import { NavLink } from "react-router-dom";
import { Button } from "../button";
import styles from "./styles.module.css";

export const Menu = (menuList) => {
  return (
    <div className={styles.menu}>
      <div className={styles.menucard}>
        <img src={menuList.foodImage} alt="" />
        <div className={styles.menucard2}>
          <div className={styles.menucard1}>
            <p className={styles.menufood}>{menuList.title}</p>
            <p className={styles.menuprice}>
              <span>{menuList.price}</span>
            </p>
          </div>
          <p>{menuList.description}</p>
          <NavLink to="./orderpage">
            <div className={styles.menuBTN}>
              <Button content="Order Now" className={styles.orderBTN} />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
