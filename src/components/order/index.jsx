import { car, dining, vector } from "../../assets";
import styles from "./styles.module.css"

export const Order = () => {
  return (
    <div className={styles.orders}>
      <div className={styles.delivery}>
            <p>order & delivery</p>
            <h2>Our delivery service is top notch</h2>
      </div>
      <div className={styles.orderCards}>
            <div className={styles.cards}>
              <img src={dining} alt="" className={styles.dining} />
              <h5>Pick meals</h5>
              <p>Choose your meal from our diversed weekly menu</p>
            </div>
            <div className={styles.cards}>
                  <img src={vector} alt="" className={styles.vector} />
                  <h5>Checkout</h5>
                  <p>Enter a delivery location within our specified region and pay to checkout</p>
            </div>
            <div className={styles.cards}>
                  <img src={car} alt=""  className={styles.car} />
                  <h5>Fast Delivery</h5>
                  <p>Your order is processed and delivered within 10 ~ 15 minutes</p>
            </div>
      </div>
    </div>
  );
};

