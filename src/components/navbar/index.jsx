import { NavLink } from "react-router-dom";
import { EvaKitchen } from "../../assets";
import styles from "./styles.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.container}>
    <img src={EvaKitchen} alt="EvaKitchen" className={styles.EvaKitchenlogo}/>
    <div>
      <ul>
        
            <li className={styles.linkItem}><NavLink to="/"  className={styles.navlink}>Home</NavLink></li>
            <li className={styles.linkItem}> <NavLink to="/menupage" className={styles.navlink}>Menu</NavLink></li>
            <li className={styles.linkItem}> <NavLink to="/aboutus" className={styles.navlink}>About Us</NavLink></li>
            <li className={styles.linkItem}> <NavLink className={styles.navlink}>Contact Us</NavLink></li>
      </ul>
    </div>
    </nav>
  );
};

