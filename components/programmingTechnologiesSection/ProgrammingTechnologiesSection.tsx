import React from "react";
import styles from "../../styles/Home.module.css";

import ListItem from "./ListItem";

export default function ProgrammingTechnologiesSection() {
  return (
    <div className={styles.progTechDiv}>
      <div className={styles.progTechHeadDiv}>
        <h2>Programming technologies</h2>
        <div className={styles.progTechHeadPDiv}>
          <p>
            {" "}
            By the end, you’ll have the portfolio and interview skills you need
            to start your new career.
          </p>
        </div>
      </div>

      <div className={styles.progTechCardsDiv}>
        <ul className={styles.progTechCardsList}>
          <ListItem imageSrc={"/progTech/angular.svg"} imageAlt={"angular"} text={"Angular"} />
          <ListItem imageSrc={"/progTech/react.svg"} imageAlt={"react"} text={"React"} />
          <ListItem imageSrc={"/progTech/vue.svg"} imageAlt={"vue"} text={"Vue"}/>
          <ListItem imageSrc={"/progTech/js 1.svg"} imageAlt={"js"} text={"JavaScript"} />
        </ul>
      </div>
    </div>
  );
}
