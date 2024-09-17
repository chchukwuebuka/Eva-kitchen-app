import { eggfood, ellipse, primary, primaryfill, spag } from "../../assets"
import { Button } from "../button"
import styles from "./styles.module.css"

export const OrderDetails = () => {
  return (
    <div>
      <article className={styles.orderArticle}>
              <div className={styles.orderArticleInfo}>
                <div className={styles.orderHeader}>
                  <div className={styles.orderInfo}>
                    <p id={styles.orderInfo}>Order #351</p>
                    <p className={styles.orderDate}>23 Feb 2021, 08:28 PM</p>
                  </div>
                  <img
                    src={ellipse}
                    alt=""
                    className={styles.orderStatusIcon}
                  />
                </div>

                <div className={styles.orderItemContainer}>
                  <img src={spag} alt="" className={styles.orderItemImage} />
                  <div className={styles.orderItemDetails}>
                    <p className={styles.vegetable}>Vegetable Mixups</p>
                    <p className={styles.orderEgg}>Vegetable with Egg</p>
                    <div className={styles.orderItemPriceQty}>
                      <p>$5.30</p>
                      <p>Qty: 1</p>
                    </div>
                  </div>
                </div>
                <div className={styles.orderItemContainer}>
                  <img src={eggfood} alt="" className={styles.orderItemImage} />
                  <div className={styles.orderItemDetails}>
                    <p className={styles.vegetable}>Vegetable Mixups</p>
                    <p className={styles.orderEgg}>Vegetable with Egg</p>
                    <div className={styles.orderItemPriceQty}>
                      <p>$5.30</p>
                      <p>Qty: 1</p>
                    </div>
                  </div>
                </div>

                <div className={styles.orderSummary}>
                  <div className={styles.orderTotal}>
                    <p id={styles.items}>2 Items</p>
                    <p id={styles.amount}>$30.60</p>
                  </div>
                  <div className={styles.orderBTN}>
                  <Button img={primary} className={styles.orderButton} />
                  <Button
                    img={primaryfill}
                    className={styles.orderButton}
                  />
                  </div>
                </div>
              </div>
              <div className={styles.orderArticleInfo}>
                <div className={styles.orderHeader}>
                  <div className={styles.orderInfo}>
                    <p id={styles.orderInfo}>Order #351</p>
                    <p className={styles.orderDate}>23 Feb 2021, 08:28 PM</p>
                  </div>
                  <img
                    src={ellipse}
                    alt=""
                    className={styles.orderStatusIcon}
                  />
                </div>

                <div className={styles.orderItemContainer}>
                  <img src={spag} alt="" className={styles.orderItemImage} />
                  <div className={styles.orderItemDetails}>
                    <p className={styles.vegetable}>Vegetable Mixups</p>
                    <p className={styles.orderEgg}>Vegetable with Egg</p>
                    <div className={styles.orderItemPriceQty}>
                      <p>$5.30</p>
                      <p>Qty: 1</p>
                    </div>
                  </div>
                </div>
                <div className={styles.orderItemContainer}>
                  <img src={eggfood} alt="" className={styles.orderItemImage} />
                  <div className={styles.orderItemDetails}>
                    <p className={styles.vegetable}>Vegetable Mixups</p>
                    <p className={styles.orderEgg}>Vegetable with Egg</p>
                    <div className={styles.orderItemPriceQty}>
                      <p>$5.30</p>
                      <p>Qty: 1</p>
                    </div>
                  </div>
                </div>

                <div className={styles.orderSummary}>
                  <div className={styles.orderTotal}>
                    <p id={styles.items}>2 Items</p>
                    <p id={styles.amount}>$30.60</p>
                  </div>
                  <div className={styles.orderBTN}>
                  <Button img={primary} className={styles.orderButton} />
                  <Button
                    img={primaryfill}
                    className={styles.orderButton}
                  />
                  </div>
                </div>
              </div>
              <div className={styles.orderArticleInfo}>
                <div className={styles.orderHeader}>
                  <div className={styles.orderInfo}>
                    <p id={styles.orderInfo}>Order #351</p>
                    <p className={styles.orderDate}>23 Feb 2021, 08:28 PM</p>
                  </div>
                  <img
                    src={ellipse}
                    alt=""
                    className={styles.orderStatusIcon}
                  />
                </div>

                <div className={styles.orderItemContainer}>
                  <img src={spag} alt="" className={styles.orderItemImage} />
                  <div className={styles.orderItemDetails}>
                    <p className={styles.vegetable}>Vegetable Mixups</p>
                    <p className={styles.orderEgg}>Vegetable with Egg</p>
                    <div className={styles.orderItemPriceQty}>
                      <p>$5.30</p>
                      <p>Qty: 1</p>
                    </div>
                  </div>
                </div>
                <div className={styles.orderItemContainer}>
                  <img src={eggfood} alt="" className={styles.orderItemImage} />
                  <div className={styles.orderItemDetails}>
                    <p className={styles.vegetable}>Vegetable Mixups</p>
                    <p className={styles.orderEgg}>Vegetable with Egg</p>
                    <div className={styles.orderItemPriceQty}>
                      <p>$5.30</p>
                      <p>Qty: 1</p>
                    </div>
                  </div>
                </div>

                <div className={styles.orderSummary}>
                  <div className={styles.orderTotal}>
                    <p id={styles.items}>2 Items</p>
                    <p id={styles.amount}>$30.60</p>
                  </div>
                  <div className={styles.orderBTN}>
                  <Button img={primary} className={styles.orderButton} />
                  <Button
                    img={primaryfill}
                    className={styles.orderButton}
                  />
                  </div>
                </div>
              </div>
              <div className={styles.orderArticleInfo}>
                <div className={styles.orderHeader}>
                  <div className={styles.orderInfo}>
                    <p id={styles.orderInfo}>Order #351</p>
                    <p className={styles.orderDate}>23 Feb 2021, 08:28 PM</p>
                  </div>
                  <img
                    src={ellipse}
                    alt=""
                    className={styles.orderStatusIcon}
                  />
                </div>

                <div className={styles.orderItemContainer}>
                  <img src={spag} alt="" className={styles.orderItemImage} />
                  <div className={styles.orderItemDetails}>
                    <p className={styles.vegetable}>Vegetable Mixups</p>
                    <p className={styles.orderEgg}>Vegetable with Egg</p>
                    <div className={styles.orderItemPriceQty}>
                      <p>$5.30</p>
                      <p>Qty: 1</p>
                    </div>
                  </div>
                </div>
                <div className={styles.orderItemContainer}>
                  <img src={eggfood} alt="" className={styles.orderItemImage} />
                  <div className={styles.orderItemDetails}>
                    <p className={styles.vegetable}>Vegetable Mixups</p>
                    <p className={styles.orderEgg}>Vegetable with Egg</p>
                    <div className={styles.orderItemPriceQty}>
                      <p>$5.30</p>
                      <p>Qty: 1</p>
                    </div>
                  </div>
                </div>

                <div className={styles.orderSummary}>
                  <div className={styles.orderTotal}>
                    <p id={styles.items}>2 Items</p>
                    <p id={styles.amount}>$30.60</p>
                  </div>
                  <div className={styles.orderBTN}>
                  <Button img={primary} className={styles.orderButton} />
                  <Button
                    img={primaryfill}
                    className={styles.orderButton}
                  />
                  </div>
                </div>
              </div>
              <div className={styles.orderArticleInfo}>
                <div className={styles.orderHeader}>
                  <div className={styles.orderInfo}>
                    <p id={styles.orderInfo}>Order #351</p>
                    <p className={styles.orderDate}>23 Feb 2021, 08:28 PM</p>
                  </div>
                  <img
                    src={ellipse}
                    alt=""
                    className={styles.orderStatusIcon}
                  />
                </div>

                <div className={styles.orderItemContainer}>
                  <img src={spag} alt="" className={styles.orderItemImage} />
                  <div className={styles.orderItemDetails}>
                    <p className={styles.vegetable}>Vegetable Mixups</p>
                    <p className={styles.orderEgg}>Vegetable with Egg</p>
                    <div className={styles.orderItemPriceQty}>
                      <p>$5.30</p>
                      <p>Qty: 1</p>
                    </div>
                  </div>
                </div>
                <div className={styles.orderItemContainer}>
                  <img src={eggfood} alt="" className={styles.orderItemImage} />
                  <div className={styles.orderItemDetails}>
                    <p className={styles.vegetable}>Vegetable Mixups</p>
                    <p className={styles.orderEgg}>Vegetable with Egg</p>
                    <div className={styles.orderItemPriceQty}>
                      <p>$5.30</p>
                      <p>Qty: 1</p>
                    </div>
                  </div>
                </div>

                <div className={styles.orderSummary}>
                  <div className={styles.orderTotal}>
                    <p id={styles.items}>2 Items</p>
                    <p id={styles.amount}>$30.60</p>
                  </div>
                  <div className={styles.orderBTN}>
                  <Button img={primary} className={styles.orderButton} />
                  <Button
                    img={primaryfill}
                    className={styles.orderButton}
                  />
                  </div>
                </div>
              </div>
              <div className={styles.orderArticleInfo}>
                <div className={styles.orderHeader}>
                  <div className={styles.orderInfo}>
                    <p id={styles.orderInfo}>Order #351</p>
                    <p className={styles.orderDate}>23 Feb 2021, 08:28 PM</p>
                  </div>
                  <img
                    src={ellipse}
                    alt=""
                    className={styles.orderStatusIcon}
                  />
                </div>

                <div className={styles.orderItemContainer}>
                  <img src={spag} alt="" className={styles.orderItemImage} />
                  <div className={styles.orderItemDetails}>
                    <p className={styles.vegetable}>Vegetable Mixups</p>
                    <p className={styles.orderEgg}>Vegetable with Egg</p>
                    <div className={styles.orderItemPriceQty}>
                      <p>$5.30</p>
                      <p>Qty: 1</p>
                    </div>
                  </div>
                </div>
                <div className={styles.orderItemContainer}>
                  <img src={eggfood} alt="" className={styles.orderItemImage} />
                  <div className={styles.orderItemDetails}>
                    <p className={styles.vegetable}>Vegetable Mixups</p>
                    <p className={styles.orderEgg}>Vegetable with Egg</p>
                    <div className={styles.orderItemPriceQty}>
                      <p>$5.30</p>
                      <p>Qty: 1</p>
                    </div>
                  </div>
                </div>

                <div className={styles.orderSummary}>
                  <div className={styles.orderTotal}>
                    <p id={styles.items}>2 Items</p>
                    <p id={styles.amount}>$30.60</p>
                  </div>
                  <div className={styles.orderBTN}>
                  <Button img={primary} className={styles.orderButton} />
                  <Button
                    img={primaryfill}
                    className={styles.orderButton}
                  />
                  </div>
                </div>
              </div>
            </article>
    </div>
  )
}

