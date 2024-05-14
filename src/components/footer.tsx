import { Link } from "react-router-dom";
import styles from "./footer.module.css";

// Assets
import VillagerPic from "../assets/Villager.jpg"
import LocationPic from "../assets/map.png"
import ItemsPic from "../assets/items.png"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link className={styles.footerLink} to="/villagers">
                <img className={styles.footerIcon} src={VillagerPic} alt="Villager" />
                Villagers
            </Link>
            <Link className={styles.footerLink} to="/villagers">
                <img className={styles.footerIcon} src={ItemsPic} alt="Mapa" />
                Items
            </Link>
            <Link className={styles.footerLink} to="/villagers">
                <img className={styles.footerIcon} src={LocationPic} alt="Item" />
                Map
            </Link>
        </footer>
    );
}

export default Footer;