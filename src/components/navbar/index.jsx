import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import { EvaKitchen, toggle } from "../../assets";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.container}>
      <img
        src={EvaKitchen}
        alt="EvaKitchen"
        className={styles.EvaKitchenlogo}
      />
      <button className={styles.hamburger} onClick={toggleMenu}>
        {/* ☰ */}
        <img src={toggle} alt="" />
      </button>
      <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <ul>
          <li className={styles.linkItem}>
            <NavLink to="/" className={styles.navlink}>
              Home
            </NavLink>
          </li>
          <li className={styles.linkItem}>
            <NavLink to="/menupage" className={styles.navlink}>
              Menu
            </NavLink>
          </li>
          <li className={styles.linkItem}>
            <NavLink to="/aboutus" className={styles.navlink}>
              About Us
            </NavLink>
          </li>
          <li className={styles.linkItem}>
            <NavLink to="/contactus" className={styles.navlink}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
