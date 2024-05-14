import { VillagerDetails } from "../types/types"; 

export async function fetchVillager(villagerName: string) {
    // const apiKey = '98d6307f-9c88-41e0-9bad-2fd7a78c62fb'; // Reemplaza 'TuClaveAquí' con tu clave de API
  
    const url = `https://api.nookipedia.com/villagers?name=${villagerName}`;
  
    // console.log("Esto es url: " + url)

    try {
      // console.log("Hula")
      const response = await fetch(url, {
        headers: {
          'X-API-KEY': '98d6307f-9c88-41e0-9bad-2fd7a78c62fb',
          'Accept-Version': '1.0.0',
        },
      });
  
// console.log("Esto es response: " + response) //DA EL DATO PERFE

      if (!response.ok) {
        throw new Error('Error al obtener datos del vecino');
      }
  
      const data = await response.json();

      console.log ("Esto es data: " + JSON.stringify(data))

      const dataJSON = JSON.stringify(data);

      const dataArray = data[0];
      
      console.log("Esto es dataJSON: " + dataJSON)
      console.log("Esto es dataArray: " + dataArray)
      console.log("Esto es dataArray en plan JSON: " + JSON.stringify(dataArray))


      const villager: VillagerDetails = {
        name: dataArray.name ? dataArray.name : '',
        id: dataArray.id ? dataArray.id : '',
        image_url: dataArray.image_url ? dataArray.image_url : '',
        personality: dataArray.personality ? dataArray.personality : '',
        species: dataArray.species ? dataArray.species : '',
        gender: dataArray.gender ? dataArray.gender : '',
      };
        console.log("Esto es villager: " + JSON.stringify(villager))
        // console.log("Esto es name: " + data.name)

      return villager;
    } catch (error) {
      console.error('Hubo un error:', error);
      return null;
    }
  }

    
  // Llamar a la función para obtener los aldeanos
  fetchVillager("Ace")
    .then((villager) => {
      console.log('Aldeano:', villager);
      // Haz algo con los datos de los aldeanos
    })
    .catch((error) => {
      console.error('Error al obtener aldeano:', error);
    });
  
