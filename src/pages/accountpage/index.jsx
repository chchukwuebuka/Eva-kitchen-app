import styles from "./styles.module.css";
import { Button, Navbar } from "../../components";
import { wizard } from "../../assets";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../components/formatCurrency";
import { setEmail, setPassword } from "../../state/counter/counterSlice";

export const AccounPage = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.counter.email);
  const password = useSelector((state) => state.counter.password);

  const [localEmail, setLocalEmail] = useState("");
  const [localPassword, setLocalPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const cartItems = useSelector((state) => state.counter.items);

  console.log("cartItems", cartItems);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setEmail(localEmail));
    dispatch(setPassword(localPassword));
  };

  console.log("Updated Email:", localEmail);
  console.log("Updated Password:", localPassword);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  const subtotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const deliveryFee = 3.45;

  const totalAmount = subtotal + deliveryFee;

  return (
    <div>
      <Navbar />
      <section className={styles.AccounPage}>
        <article className={styles.AccounPageInfo}>
          <div className={styles.AccounInfo}>
            <p id={styles.account}>Account</p>
            <img src={wizard} alt="" />
            <p>Shipping</p>
            <img src={wizard} alt="" />
            <p>Payment</p>
          </div>
          <div className={styles.AccounInfos}>
            <h4>Account details</h4>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className={styles.forms}>
              <div className={styles.AccounDetail}>
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  placeholder="Email@myemail.com"
                  value={localEmail}
                  onChange={(e) => setLocalEmail(e.target.value)}
                />
              </div>
              <div className={styles.AccounDetail}>
                <label htmlFor="password">Password</label>
                <div className={styles.passwordWrapper}>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    placeholder="********"
                    id="password"
                    className={styles.passwordInput}
                    value={localPassword}
                    onChange={(e) => setLocalPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className={styles.togglePassword}
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.accountBTN}>
              <div id={styles.accountBTN}>
                <p>Register for account</p>
                <Button content="Login" type="submit" />
              </div>
            </div>
          </form>
          <div className={styles.shippingBTN}>
            <div id={styles.shippingBTN}>
              <p>Cancel order</p>
              <Button content="Shipping details" />
            </div>
          </div>
        </article>
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
    </div>
  );
};
