import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import { arrowDown, briefcase, EvaKitchen, toggle } from "../../assets";

export const Navbar = ({ showOnlyHome, showAdditionalContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const cartItems = useSelector((state) => state.counter.items);
  const totalItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    console.log("Cart updated", cartItems);
  }, [cartItems]);

  return (
    <nav className={styles.container}>
      <div className={styles.container1}>
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
            {showAdditionalContent && (
              <div>
                <div id={styles.additionalContent}>
                  {" "}
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
                    Wishlist
                    </NavLink>
                  </li>
                  <li className={styles.linkItem}>
                    <NavLink to="" className={styles.navlink}>
                    Products
                    </NavLink>
                  </li>
                </div>
              </div>
            )}

            {!showOnlyHome && (
              <>
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
              </>
            )}
          </ul>
        </div>
      </div>
      <div className={styles.navAccountInfo}>
        <NavLink to="/orderHistorypage">
          <div className={styles.navAccount}>
            <p>Account</p>
            <img src={arrowDown} alt="" />
          </div>
        </NavLink>
        <div id={styles.navAccount}>
          <img src={briefcase} alt="" />
          <p>{totalItemCount} Items</p>
        </div>
      </div>
    </nav>
  );
};
