import { Footer, Menu, Navbar } from "../../components";
import { egwusi, fried, jellof, okro, ora, whiterice } from "../../assets";
import styles from "./styles.module.css";

export const Menupage = () => {
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
  return (
    <div>
      <Navbar />

      <div className={styles.herosection}>
        <div className={styles.herosection1}>
          <h1>Test the goodness of fresh and Healthy foods</h1>
        </div>
      </div>

      <div className={styles.heromenu}>
        <ul>
          <li className={styles.heromenuLi}>All</li>
          <li className={styles.heromenuLi}>Breakfast</li>
          <li className={styles.heromenuLi}>Lunch</li>
          <li className={styles.heromenuLi}>Dinner</li>
        </ul>

        <div className={styles.menuCards}>
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
      </div>

      <div className={styles.recomend}>
        <p>recommended Dishes</p>
      </div>

      <div className={styles.menuCards}>
        {menuLists.slice(-3).map((menuList, index) => (
          <Menu
            key={index}
            title={menuList.title}
            price={menuList.price}
            description={menuList.description}
            foodImage={menuList.foodImage}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

// {menuLists.map((menuList, index) => {
//       return <Menu key={index} menuList={menuList} title/>;
//     })}
//   </div>
