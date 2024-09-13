import { useState } from "react";
import { Button, Footer, Navbar } from "../../components";
import styles from "./styles.module.css";
import { Group4, Group5, Group6 } from "../../assets";
import { LeafletMap } from "../../components/leafletMap";

export const ContactUs = () => {
  const [note, setNote] = useState("");

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Note submitted:", note);
  };

  return (
    <div>
      <Navbar />
      <section className={styles.contactSection}>
        <div className={styles.contactSectionInfo}>
          <h3>Let’s get in touch</h3>
          <div className={styles.contact}>
            <form
              onSubmit={handleSubmit}
              className={styles.SectionInputSection}
            >
              <div className={styles.SectionInput}>
                <div className={styles.contactSectionInput}>
                  <label htmlFor="">First Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className={styles.SectionInputInfo}
                  />
                </div>
                <div>
                  <label htmlFor="">Last Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className={styles.SectionInputInfo}
                  />
                </div>
              </div>
              <div className={styles.contactInput}>
                <label htmlFor="">Email</label>
                <input type="Email" placeholder="example@xyz.com" />
                <label htmlFor="" id={styles.subject}>
                  Subject
                </label>
                <input type="text" />
              </div>
              <div className={styles.contactInput}>
                <label htmlFor="note">Message</label>
                <textarea
                  id="note"
                  value={note}
                  onChange={handleNoteChange}
                  rows="5"
                  cols="30"
                />
              </div>
              <Button
                type="submit"
                content="Leave us a message"
                className={styles.contactBTN}
              />
            </form>
            <div>
              <div className={styles.herocard}>
                <div className={styles.card}>
                  <img src={Group4} alt="Group4" className={styles.groups} />
                  <p>10:00am - 07:00pm</p>
                  <p>Working Hours</p>
                </div>
                <div className={styles.card}>
                  <img src={Group5} alt=" Group5" className={styles.groups} />
                  <p>Independence Layout Enugu</p>
                  <p>Get Direction</p>
                </div>
                <div className={styles.card}>
                  <img src={Group6} alt="Group6" className={styles.groups} />
                  <p>+234 706 121 1353</p>
                  <p>Call Online</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.leafLet}>
        <LeafletMap />
      </div>
      <Footer />
    </div>
  );
};
