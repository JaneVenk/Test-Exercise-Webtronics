import React from "react";
import styles from "../../styles/Home.module.css";

export default function BannerSection() {
  return (
    <div className={styles.bannerTop}>
      <h1 className={styles.h1}>Front-End</h1>
      <div className={styles.bannerP}>
        <p>
          Make UIs and websites beautiful, functional, and fast. Cover all the
          topics that expensive bootcamps teach (and more).
        </p>
      </div>
      <div className={styles.bannerBottom}>
        <button className={styles.bannerButton}>Start my career change</button>
        <h1 className={styles.h1}>Developer</h1>
      </div>
      <h3 className={styles.bannerH3}>Courses</h3>
    </div>
  );
}
