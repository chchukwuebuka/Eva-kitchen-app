import { NavLink } from "react-router-dom";
import {
  arrowDown,
  briefcase,
  clarity,
  ellipse,
  EvaKitchen,
  searchIcon,
  toggle,
} from "../../assets";
import styles from "./styles.module.css";
import { useRef, useState } from "react";

export const DashboradNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const inputRef = useRef(null);

  const handleIconClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className={styles.DashboradNavbar}>
      <nav className={styles.Dashboradcontainer}>
        <div className={styles.Dashboradcontainer1}>
          <img
            src={EvaKitchen}
            alt="EvaKitchen"
            className={styles.EvaKitchenlogo}
          />
          <button className={styles.hamburger} onClick={toggleMenu}>
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
                <NavLink to="/orderHistorypage" className={styles.navlink}>
                  Order History
                </NavLink>
              </li>
              <li className={styles.linkItem}>
                <NavLink to="" className={styles.navlink}>
                  Messages
                </NavLink>
              </li>
              <li className={styles.linkItem}>
                <NavLink to="" className={styles.navlink}>
                  Shipping
                </NavLink>
              </li>
              <li className={styles.linkItem}>
                <NavLink to="/contactus" className={styles.navlink}>
                  Contact Us
                </NavLink>
              </li>
              <NavLink to="/orderHistorypage">
                <div className={styles.navAccount}>
                  <p>Account</p>
                  <img src={arrowDown} alt="" />
                </div>
              </NavLink>
              <div className={styles.DashboradsearchContainer}>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search"
                  className={styles.DashboradsearchInput}
                />
                <img
                  src={searchIcon}
                  alt="Search"
                  className={styles.DashboradsearchIcon}
                  onClick={handleIconClick}
                />
              </div>
              <div className={styles.ellipseSection}>
                <img src={clarity} alt="" />
                <img src={ellipse} alt="" className={styles.ellipse} />
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
