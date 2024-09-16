import styles from "./styles.module.css";
import { Button, Navbar, Payment } from "../../components";
import { wizard } from "../../assets";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword } from "../../state/counter/counterSlice";
import { useNavigate } from "react-router-dom"; 

export const AccounPage = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.counter.email);
  const password = useSelector((state) => state.counter.password);
  const navigate = useNavigate();

  const [localEmail, setLocalEmail] = useState("");
  const [localPassword, setLocalPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

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

  const handleShippingDetailsClick = () => {
      if (!email || !password) {
        alert("Please log in to proceed to shipping details");
      } else {
        navigate("/shippingpage"); 
      }
    };

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
              <Button content="Shipping details" onClick={handleShippingDetailsClick} />
            </div>
          </div>
        </article>
        <Payment/>
      </section>
    </div>
  );
};
