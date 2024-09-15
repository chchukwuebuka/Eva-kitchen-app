import { fried, okro, ora, whiterice } from "../../assets";
import { Button, Footer, Navbar, Menu } from "../../components";
import styles from "./styles.module.css";
import { formatCurrency } from "../../components/formatCurrency";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, addItemToCart } from "../../state/counter/counterSlice";
import Rating from "../../components/rating";
import { useNavigate } from "react-router-dom";

export const OrderPage = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const price = 1000;

  const menuLists = [
    {
      id: 1,
      title: "Ora Soup",
      price: 1500,
      description: "Ora soup with fish and two beef and semo",
      foodImage: ora,
    },
    {
      id: 2,
      title: "White Rice",
      price: 1200,
      description: "White rice and stew with chicken",
      foodImage: whiterice,
    },
    {
      id: 3,
      title: "Okro Soup",
      price: 1000,
      description: "Okro soup with plenty meat and fish",
      foodImage: okro,
    },
  ];

  const currentItem = {
    id: 4,
    title: "Fried Rice",
    price: 1400,
    description: "Fried rice with chicken laps",
    foodImage: fried,
  };

  const handleAddToCart = () => {
    if (count > 0) {
      dispatch(addItemToCart({ ...currentItem, quantity: count }));
      navigate("/accountpage");
    } else {
      alert("Please select a quantity before adding to cart");
    }
  };

  console.log("currentItem", currentItem);
  console.log("count", count);

  return (
    <div>
      <Navbar />
      <section className={styles.OrderSection}>
        <div className={styles.OrderSectionInfo}>
          <div>
            <img src={fried} alt="Fried Rice" className={styles.OrderIMG} />
          </div>
          <div className={styles.OrderInfo}>
            <p className={styles.sectionInfo}>{formatCurrency(price)}</p>
            <div className={styles.OrderBTN}>
              <button onClick={() => dispatch(decrement())}> ➖</button>
              <h1>{count}</h1>
              <button onClick={() => dispatch(increment())}> ➕</button>
            </div>
            <p className={styles.rice}>Fried Rice</p>
            <p className={styles.friedRice}>{currentItem.description}</p>
            <p className={styles.currency}>{formatCurrency(currentItem.price)}</p>
            <div className={styles.ratingReview}>
              <Rating />
              <p>3.5</p>
            </div>
            <Button
              content="Add to Cart"
              className={styles.Orderbutton}
              onClick={handleAddToCart}
            />
          </div>
        </div>
      </section>

      <section className={styles.menuDishes}>
        <div>
          <h3>Related dishes</h3>
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
        </div>
      </section>

      <section className={styles.menuDishes} id={styles.menuDishes}>
        <div>
          <h3>Other Dishes</h3>
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
        </div>
      </section>
      <Footer />
    </div>
  );
};
