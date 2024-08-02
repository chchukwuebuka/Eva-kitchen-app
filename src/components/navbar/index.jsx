import { EvaKitchen } from "../../assets";
import styles from "./styles.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.container}>
    <img src={EvaKitchen} alt="EvaKitchen" className={styles.EvaKitchenlogo}/>
    <div>
      <ul>
            <li className={styles.linkItem}>Home</li>
            <li className={styles.linkItem}>Menu</li>
            <li className={styles.linkItem}>About Us</li>
            <li className={styles.linkItem}>Contact Us</li>
      </ul>
    </div>
    </nav>
  );
};

