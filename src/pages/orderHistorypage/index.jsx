import styles from "./styles.module.css";
import { Navbar, OrderDetails } from "../../components";
import { useRef } from "react";
import {
  ellipse,
  searchIcon,
} from "../../assets";
import { NavLink } from "react-router-dom";

export const OrderHistory = () => {
  const inputRef = useRef(null);

  const handleIconClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <Navbar showOnlyHome={true} showAdditionalContent={true} />
      <section className={styles.orderHistorySection}>
        <div className={styles.orderHistoryContent}>
          <div className={styles.searBarDetailsInfos}>
            <div className={styles.searBarDetails}>
              <div className={styles.searchBarContainer}>
                <input
                  ref={inputRef}
                  type="text"
                  className={styles.searchInput}
                />
                <img
                  src={searchIcon}
                  alt="Search"
                  className={styles.searchIcon}
                  onClick={handleIconClick}
                />
              </div>
              <NavLink to="/dashboardpage">

              <img src={ellipse} alt="" className={styles.searchIconImage} />
              </NavLink>
            </div>
          </div>
          <div className={styles.orderList}>
            <div>
              <div className={styles.ListOrder}>
                <p>ORDER LIST</p>
              </div>
              <div className={styles.orderListHistory}>
                <div className={styles.IDhistory}>
                  <p>
                    <span className={styles.checkmark}>✔</span> #345
                  </p>
                </div>
                <div className={styles.IDhistory}>
                  <p>
                    <span className={styles.checkmark}>✔</span> #345
                  </p>
                </div>
                <div className={styles.IDhistory}>
                  <p>
                    <span className={styles.checkmark}>✔</span> #345
                  </p>
                </div>
                <div className={styles.IDhistory}>
                  <p>
                    <span className={styles.checkmark}>✔</span> #345
                  </p>
                </div>
                <div className={styles.IDhistory}>
                  <p>
                    <span className={styles.checkmark}>✔</span> #345
                  </p>
                </div>
              </div>
            </div>
            <OrderDetails/>
          </div>
        </div>
      </section>
    </div>
  );
};
