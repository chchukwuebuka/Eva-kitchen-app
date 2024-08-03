import { lady, pot } from "../../assets";
import { Footer, Navbar, Order } from "../../components";
import styles from "./styles.module.css";

export const AboutUs = () => {
  return (
    <div>
      <Navbar />

      <div className={styles.AboutUssection}>
        <div className={styles.AboutUssection1}>
          <h1>Welcome to evakitchen where your statisfaction is our goal</h1>
        </div>
      </div>

      <Order />

      {/* About page */}

      <div className={styles.AboutUs}>
        <div className={styles.AboutUsPage}>
          <p>ABOUT US</p>
          <h3>All you need to know about us</h3>
        </div>
        <div className={styles.aboutKit1}>
          <img src={pot} alt="food" className={styles.food1} />
          <div className={styles.healthy1}>
            <p className={styles.healthy2}>
              “Healthy” isn’t just an idea. “Healthy” is science, and we take it
              seriously. Every delicious dish and drink at EvaKitchen is crafted
              to be better for your taste buds and your body.
            </p>
            <p>
              At EvaKitchen, our menu is carefully crafted so that every bite
              and every refreshing sip serve up big flavor, an abundance of
              fresh ingredients and a taste of the unexpected. Our artisan chefs
              create crave-worthy classics alongside a steady rotation of
              seasonal offerings that take advantage of naturally ripe fruits
              and vegetables so their flavor is full and their nutrients, rich.
              Creative, hand-crafted beverages built around seasonality, quality
              ingredients and simple preparations complement every occasion from
              brunch, lunch, dinner and, of course, dessert. Always room for
              dessert.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.testimonials}>
        <div className={styles.testiCustomer}>
          <p>Testimonies</p>
          <h4>What our customers say about us</h4>
        </div>
        <div className={styles.profile}>
          <p className={styles.profile1}>
            This has been the best hotel I have ever been to. Their hospitality
            was top notch, their services was the best. Do patronize them
          </p>
          <div className={styles.bio}>
            <p id={styles.bio1}>Adefiwa George</p>
            <p id={styles.bio2}>CEO Fiwa Groups</p>
          </div>
        </div>
       <div id={styles.bioPic}>
       <img src={lady} alt="" />
       </div>
      </div>
      <Footer/>
    </div>
  );
};
