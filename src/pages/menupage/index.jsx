import { Footer, Menu, Navbar } from "../../components"
import styles from "./styles.module.css"


export const Menupage = () => {
  return (
    <div>
      < Navbar />

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

            < Menu />
      </div>

      <Footer/>
    </div>
  )
}

