import {
  food,
  MaskGroup,
  egwusi,
  fried,
  jellof,
  ora,
  whiterice,
  okro,
  clock,
  light,
  call,
} from "../../assets";
import { Button, Footer, Menu, Order } from "../../components";
import { Navbar } from "../../components/navbar";
import Styles from "./styles.module.css";

const menuLists = [
  {
    title: "Fried Rice",
    price: "1000",
    description: "Fried rice with chicken laps",
    foodImage: fried,
  },
  {
    title: "Jollof Rice",
    price: "800",
    description: "Nigerian party jellof",
    foodImage: jellof,
  },
  {
    title: "Egusi Soup",
    price: "1500",
    description: "Egusi soup with plenty meat",
    foodImage: egwusi,
  },
  {
    title: "Ora Soup",
    price: "1500",
    description: "Ora soup with fish and two beef and semo",
    foodImage: ora,
  },
  {
    title: "White Rice",
    price: "1200",
    description: "White rice and stew with chicken",
    foodImage: whiterice,
  },
  {
    title: "Okro Soup",
    price: "1000",
    description: "Okro soup with plenty meat and fish",
    foodImage: okro,
  },
];
console.log({ menuLists });
export const Landingpage = () => {
  return (
    <div className={Styles.landingcontainer}>
      <Navbar />
      <div className={Styles.hero}>
        <div className={Styles.innerhero}>
          <div>
            <h2 className={Styles.inner1}>
              Your Favorite food delivered hot and fresh
            </h2>
            <p className={Styles.inner2}>
              Satisfy your craving by getting the food you want delivered to you
              fast. EvaKitchen is now available in selected areas in Enugu.
            </p>
          </div>
          <div>
            <img src={MaskGroup} alt="MaskGroup" className={Styles.maskgroup} />
          </div>
        </div>

        <div className={Styles.herocard}>
          <div className={Styles.card}>
            <img src={clock} alt="Group4" className={Styles.groups} />
            <p>10:00am - 07:00pm</p>
            <p>Working Hours</p>
          </div>
          <div className={Styles.card}>
            <img src={light} alt=" Group5" className={Styles.groups} />
            <p>Independence Layout Enugu</p>
            <p>Get Direction</p>
          </div>
          <div className={Styles.card}>
            <img src={call} alt="Group6" className={Styles.groups} />
            <p>+234 706 121 1353</p>
            <p>Call Online</p>
          </div>
        </div>
      </div>

      {/* About page */}

      <div className={Styles.about}>
        <div className={Styles.aboutus}>
          <p>ABOUT US</p>
          <h3>All you need to know about us</h3>
        </div>
        <div className={Styles.aboutKit}>
          <img src={food} alt="food" className={Styles.food} />
          <div className={Styles.healthy}>
            <p className={Styles.healthy1}>
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
            <div className={Styles.BTN}>
              <Button content="Learn More" className={Styles.learnmoreBTN} />
            </div>
          </div>
        </div>
      </div>

      <div className={Styles.section}>
        <h1>Looking for the best affordable hospitality in town?</h1>
        <div className={Styles.BTN}>
          <Button content="Book Now" className={Styles.learnmoreBTN} />
        </div>
      </div>

      <Order />

      <div className={Styles.choosemenu}>
        <p> MENU</p>
        <h2>Choose from our most popular menu</h2>
      </div>

      <div className={Styles.menuCards}>
        {menuLists.map((menuList, index) => {
          return (
            <Menu
              key={index}
              title={menuList.title}
              price={menuList.price}
              description={menuList.description}
              foodImage={menuList.foodImage}
            />
          );
        })}
      </div>

      <Footer />
    </div>
  );
};
