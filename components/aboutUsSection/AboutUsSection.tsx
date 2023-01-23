import React from "react";
import styles from "../../styles/Home.module.css";

import Article from "./Article";

export default function AboutUsSection() {
  return (
    <React.Fragment>
      <h2 className={styles.aboutUsH2}>About Us</h2>

      <div className={styles.aboutUsDiv}>
        <div className={styles.aboutUsMentorsDiv}>
          <h3>Mentors</h3>
          <img
            className={styles.aboutUsMentorsLineImage}
            src="/aboutUs/line.png"
            alt="lineImage"
          ></img>

          <Article
            classStyle={"mentor1Article"}
            imageSrc={"/aboutUs/mentor1.png"}
            title={"Wade Warren"}
            text={"Front-end engineers work closely with designers"}
            alt={"Mentor 1"}
          />

          <Article
            classStyle={"mentor2Article"}
            imageSrc={"/aboutUs/mentor2.png"}
            title={"Kristin Watson"}
            text={"Front-end engineers work closely with designers"}
            alt={"Mentor 2"}
          />

          <Article
            classStyle={"mentor3Article"}
            imageSrc={"/aboutUs/mentor3.png"}
            title={"Robert Fox"}
            text={"Front-end engineers work closely with designers"}
            alt={"Mentor 2"}
          />
        </div>

        <div className={styles.aboutUsPDiv}>
          <p className={styles.aboutUsP}>
            Front-end engineers work closely with designers to make websites
            beautiful, functional, and fast. This Career Path will teach you not
            only the necessary languages and technologies, but how to think like
            a front-end engineer, too.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
