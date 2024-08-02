import { egwusi, fried, jellof, okro, ora, whiterice } from "../../assets";
import styles from "./styles.module.css";

export const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.choosemenu}>
        <p> MENU</p>
        <h2>Choose from our most popular menu</h2>
      </div>

      <div className={styles.menu1}>
        <div className={styles.menucard}>
          <img src={fried} alt="" />
          <div className={styles.menucard2}>
            <div className={styles.menucard1}>
              <p className={styles.menufood}>Fried Rice</p>
              <p className={styles.menuprice}>
                <span>₦1000</span>
              </p>
            </div>
            <p>Fried rice with chicken laps</p>
            <div className={styles.orderBTN}>
              <button>Order Now</button>
            </div>
          </div>
        </div>
        <div className={styles.menucard}>
          <img src={jellof} alt="" />
          <div className={styles.menucard2}>
            <div className={styles.menucard1}>
              <p className={styles.menufood}>Jellof Rice</p>
              <p className={styles.menuprice}>
                <span>₦800</span>
              </p>
            </div>
            <p>Nigerian party jellof</p>
            <div className={styles.orderBTN}>
              <button>Order Now</button>
            </div>
          </div>
        </div>
        <div className={styles.menucard}>
          <img src={egwusi} alt="" />
          <div className={styles.menucard2}>
            <div className={styles.menucard1}>
              <p className={styles.menufood}>Egusi Soup</p>
              <p className={styles.menuprice}>
                <span>₦1500</span>
              </p>
            </div>
            <p>Egusi soup with plenty meat </p>
            <div className={styles.orderBTN}>
              <button>Order Now</button>
            </div>
          </div>
        </div>
        <div className={styles.menucard}>
          <img src={ora} alt="" />
          <div className={styles.menucard2}>
            <div className={styles.menucard1}>
              <p className={styles.menufood}>Fried Rice</p>
              <p className={styles.menuprice}>
                <span>₦1500</span>
              </p>
            </div>
            <p>Ora soup with fish and two beef and semo</p>
            <div className={styles.orderBTN}>
              <button>Order Now</button>
            </div>
          </div>
        </div>
        <div className={styles.menucard}>
          <img src={whiterice} alt="" />
          <div className={styles.menucard2}>
            <div className={styles.menucard1}>
              <p className={styles.menufood}>White Rice</p>
              <p className={styles.menuprice}>
                <span>₦1200</span>
              </p>
            </div>
            <p>White rice and stew with chicken</p>
            <div className={styles.orderBTN}>
              <button>Order Now</button>
            </div>
          </div>
        </div>
        <div className={styles.menucard}>
          <img src={okro} alt="" />
          <div className={styles.menucard2}>
            <div className={styles.menucard1}>
              <p className={styles.menufood}>Okro Soup</p>
              <p className={styles.menuprice}>
                {" "}
                <span>₦1000</span>
              </p>
            </div>
            <p>Fried rice with chicken laps</p>
            <div className={styles.orderBTN}>
              <button>Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
