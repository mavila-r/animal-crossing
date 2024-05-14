import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header"
import { useState , useEffect } from "react";
import styles from "./villagers.module.css";
import { fetchVillagers } from "../api/fetchVillagers";
import { Villager } from "../types/types";
import LoadingScreen from "../components/loadingScreen";
import { waitFor } from "../utils/utils";


const Villagers = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("");
    const [villagers, setVillagers] = useState<Villager[]>([]);

    useEffect(() => { // Utiliza useEffect para realizar una llamada a la API y cargar los datos de los Pokémon cuando el componente se monta.
        const fetchAllVillagers = async () => {
            setIsLoading(true);
            await waitFor(500);
          const allVillagers = await fetchVillagers(); // Llama a la función fetchPokemons para obtener los datos de los Pokémon.
          setVillagers(allVillagers); // Actualiza el estado de los Pokémon con los datos obtenidos.
          setIsLoading(false);
        };
        fetchAllVillagers(); // Ejecuta la función fetchAllPokemons cuando el componente se monta.
      }, []); // El segundo argumento de useEffect (un array vacío) asegura que el efecto solo se ejecute una vez, cuando el componente se monta.

      if (isLoading || !villagers) {
        return <LoadingScreen />;
    }


    const filteredVillagers = villagers?.slice(0, 200).filter((villager) => {
        return villager.name.toLowerCase().match(query.toLowerCase()); //Que coincida la busqueda con el texto
      });

    return (
        <>
            <Header query={query} setQuery={setQuery}/>
            <main>
            <nav>
          {filteredVillagers?.slice(0,200).map((villager) => ( // Mapea la lista de Pokémon y renderiza un enlace para cada uno.
            <Link
              key={villager.image_url}
              className={styles.listItem}
              // to={`/villagers?name=${villager.name}`}
              to={`/villagers/${villager.name}`}
            >
              <img
                className={styles.listItemIcon}
                src={villager.image_url}
                alt={villager.name}
              />
              <div className={styles.listItemText}>
                <span>{villager.name}</span>
                <span>{villager.personality}</span>
              </div>
            </Link>
          ))}
        </nav>
            </main>
           <Footer />
        </>

    )
}

export default Villagers;