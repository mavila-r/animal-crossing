import Casita from "../assets/Casita.png";
import styles from "./loadingScreen.module.css";

function LoadingScreen() {
  return (
    <div className={styles.loadingScreen}>
      <img className={styles.loadingScreenIcon} src={Casita} alt="Casita" />
    </div>
  );
}
export default LoadingScreen;