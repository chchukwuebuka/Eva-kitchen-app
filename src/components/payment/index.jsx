import { useSelector } from "react-redux";
import { formatCurrency } from "../../components/formatCurrency";
import styles from "./styles.module.css"

export const Payment = () => {

      const cartItems = useSelector((state) => state.counter.items);

      console.log("cartItems", cartItems);

      const subtotal = cartItems.reduce((total, item) => {
            return total + item.price * item.quantity;
          }, 0);
        
          const deliveryFee = 3.45;
        
          const totalAmount = subtotal + deliveryFee;

  return (
    <section>
      <article className={styles.AccounPageInfo1}>
          <div>
            <h4>Order Summary</h4>
            {cartItems && cartItems.length > 0 ? (
              <ul className={styles.cartList}>
                {cartItems.map((item, index) => (
                  <li key={index} className={styles.cartItem}>
                    <img
                      src={item.foodImage}
                      alt={item.title}
                      className={styles.cartImage}
                    />
                    <div className={styles.cartDetails}>
                      <div>
                        <p className={styles.cartTitle}>
                          <strong>{item.title}</strong>
                        </p>
                        <p className={styles.cartPrice}>
                          Price: {formatCurrency(item.price * item.quantity)}
                        </p>
                      </div>
                      <p className={styles.cartQuantity}>
                        Quantity: {item.quantity}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No items in the cart</p>
            )}
            <div className={styles.cartItemDetails2}>
              {cartItems && cartItems.length > 0 ? (
                <ul className={styles.cartList}>
                  {cartItems.map((item, index) => (
                    <li key={index} className={styles.cartItem}>
                      <img
                        src={item.foodImage}
                        alt={item.title}
                        className={styles.cartImage}
                      />
                      <div className={styles.cartDetails}>
                        <div>
                          <p className={styles.cartTitle}>
                            <strong>{item.title}</strong>
                          </p>
                          <p className={styles.cartPrice}>
                            Price: {formatCurrency(item.price * item.quantity)}
                          </p>
                        </div>
                        <p className={styles.cartQuantity}>
                          Quantity: {item.quantity}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No items in the cart</p>
              )}
            </div>
            <div className={styles.subtotalDetails}>
              <div className={styles.cartSubtotal}>
                <p>Subtotal</p>
                <p className={styles.currencyValue}>
                  {formatCurrency(subtotal)}
                </p>
              </div>
              <div className={styles.cartSubtotal}>
                <p>Delivery fee</p>
                <p className={styles.currencyValue}>
                  {formatCurrency(deliveryFee)}
                </p>
              </div>
              <div className={styles.cartSubtotal}>
                <p id={styles.total}>Total</p>
                <p className={styles.currencyValue}>
                  {formatCurrency(totalAmount)}
                </p>
              </div>
            </div>
          </div>
        </article>
    </section>
  )
}

