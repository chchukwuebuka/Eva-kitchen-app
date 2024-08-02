import { EvaKitchen, XIcon, callIcon, envelopIcon, facebook, instagram } from "../../assets"
import styles from "./styles.module.css"

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.evaFooter}>
            <img src={EvaKitchen} alt="" className={styles.evaKitchenLogo1} />
            <div className={styles.evaFooter1}>
                  <h4>Menue</h4>
                  <p>Soup</p>
                  <p>Rice</p>
                  <p>Meat</p>
            </div>
            <div className={styles.evaFooter1}>
                  <h4>About us</h4>
                  <div className={styles.evaIcons}>
                        <img src={envelopIcon} alt="" className={styles.evaIcons1} />
                  <p>info@evakitchen.com</p>
                  </div>
                  <div className={styles.evaIcons}>
                        <img src={callIcon} alt="" className={styles.evaIcons1} />
                  <p>info@evakitchen.com</p>
                  </div>
            </div>
            <div className={styles.evaFooter1}>
                  <h4>Opening Hours</h4>
                  <p>Monday - Saturday</p>
                  <p>10:50am - 07:00pm</p>
                  <p>Sunday</p>
                  <p>11:00am - 08:00pm</p>
            </div>
            <div className={styles.evaFooter1}>
                  <h4>Follow us on social media</h4>
                 
                 <img src={instagram} alt=""  className={styles.evaFooterImg}/>
                  <img src={facebook} alt=""  className={styles.evaFooterImg}/>
                  <img src={XIcon} alt=""  className={styles.evaFooterImg}/>
               
            </div>
      </div>
      <div className={styles.footerCopyright}>
      <p>Copyright 2020 evakitchen. All right reserved</p>
      </div>
      
    </div>
  )
}

