import { NavLink } from "react-router-dom";
import {
  chartBar,
  ellipse,
  humanAvatar,
  note,
  noteBook,
  pen,
  position,
  troller,
} from "../../assets";
import { Button, DashboradNavbar } from "../../components";
import Rating from "../../components/rating";
import styles from "./styles.module.css";

export const DashboardPage = () => {
  return (
    <section>
      <div className={styles.DashboardPage}>
        <DashboradNavbar />
        <div className={styles.DashboardPageSection}>
          <div className={styles.PageSection}>
            <p>Total number of orders 10 Items</p>
          </div>
          <div className={styles.PageSection}>
            <p>Total number of orders delivered 8 Orders</p>
          </div>
          <div className={styles.PageSection}>
            <p>Comments and Reviews 5 People</p>
          </div>
          <Button
            content="Add Reviews"
            className={styles.DashboardPageSectionBTN}
          />
        </div>
      </div>

      <article className={styles.profileContainer}>
        <div className={styles.profileHeader}>
          <div id={styles.profileImage}>
            <img src={ellipse} alt="" className={styles.profileImage} />
          </div>
          <div className={styles.profileDetails}>
            <div className={styles.profileInfo}>
              <h4 className={styles.profileName}>Michael Einstein</h4>
              <ul>
                <NavLink to="">
                  <li className={styles.profileSection}>
                    <img
                      src={humanAvatar}
                      alt=""
                      className={styles.profileIcon}
                    />
                    <p>Profile</p>
                  </li>
                </NavLink>
                <NavLink  to="/shippingpage">
                  <li className={styles.profileSection}>
                    <img src={troller} alt="" className={styles.profileIcon} />
                    <p>Shipping</p>
                  </li>
                </NavLink>
                <NavLink  to="/orderPage">
                  <li className={styles.profileSection}>
                    <img src={note} alt="" className={styles.profileIcon} />
                    <p>Order</p>
                  </li>
                </NavLink>
                <NavLink to="/contactus">
                  <li className={styles.profileSection}>
                    <img src={noteBook} alt="" className={styles.profileIcon} />
                    <p>Contact us</p>
                  </li>
                </NavLink>
                <NavLink  to="">
                  <li className={styles.profileSection}>
                    <img src={chartBar} alt="" className={styles.profileIcon} />
                    <p>Settings</p>
                  </li>
                </NavLink>
              </ul>
            </div>

            <div className={styles.basicInfo}>
              <div className={styles.infoHeader}>
                <h6>Michael Einstein</h6>
                <div className={styles.locationInfo}>
                  <img src={position} alt="" className={styles.locationIcon} />
                  <p>Abuja, Nigeria</p>
                </div>
              </div>
              <div className={styles.ratingInfo}>
                <p id={styles.rating}>Rating</p>
                <div className={styles.ratingDetails}>
                  <p>8:6</p>
                  <Rating />
                </div>
              </div>
              <h3>Basic Information</h3>
              <div className={styles.infoInputDetails}>
                <div className={styles.infoInput}>
                  <textarea name="text" placeholder="Name: Michael"></textarea>
                  <img src={pen} alt="" className={styles.editIcon} />
                </div>
                <div className="infoInput">
                  <textarea
                    name="text"
                    placeholder="Full Name: Einstein"
                  ></textarea>
                  <img src={pen} alt="" className={styles.editIcon} />
                </div>
                <div className="infoInput">
                  <textarea name="text" placeholder="Gender: Female"></textarea>
                  <img src={pen} alt="" className={styles.editIcon} />
                </div>
                <div className="infoInput">
                  <textarea
                    name="text"
                    placeholder="Language: English"
                  ></textarea>
                  <img src={pen} alt="" className={styles.editIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contactInfo}>
          <h4>Contacts & Password</h4>
          <div className={styles.infoInputDetails}>
            <div className={styles.infoInput}>
              <textarea
                name="text"
                placeholder="Email: Michael.E@gmail.com"
              ></textarea>
              <img src={pen} alt="" className={styles.editIcon} />
            </div>
            <div className={styles.infoInput}>
              <textarea
                name="text"
                placeholder="Phone number: +2348066778890"
              ></textarea>
              <img src={pen} alt="" className={styles.editIcon} />
            </div>
            <div className="infoInput">
              <textarea name="text" placeholder="Password: 123456"></textarea>
              <img src={pen} alt="" className={styles.editIcon} />
            </div>
            <div className="infoInput">
              <textarea name="text" placeholder="Location: Abuja"></textarea>
              <img src={pen} alt="" className={styles.editIcon} />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
