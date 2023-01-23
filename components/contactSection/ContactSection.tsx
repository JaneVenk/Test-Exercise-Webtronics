import React from "react";
import styles from "../../styles/Home.module.css";

import Form from "./Form";

export default function ContactSection() {
  return (
    <div className={styles.contactSubstrateDiv}>
      <div className={styles.contactDiv}>
        <div className={styles.contactDivText}>
          <h2>Contact Us</h2>
          <p className={styles.contactDivTextP}>
            Do you have any kind of help please contact with us.
          </p>
        </div>

        <Form />
      </div>
    </div>
  );
}
