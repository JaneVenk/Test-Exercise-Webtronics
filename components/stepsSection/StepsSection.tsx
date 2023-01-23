import React from "react";
import styles from "../../styles/Home.module.css";

import LeftStep from "./LeftStep";
import RightStep from "./RightStep";

export default function StepsSection() {
  return (
    <React.Fragment>
      <h2 className={styles.stepsHead}>Steps</h2>

      <div className={styles.stepsDiv}>
        <img
          className={styles.stepsLine}
          src="/steps/stepsline.svg"
          alt={"line"}
        ></img>

        <LeftStep
          stepNumber={"1"}
          title={"Introduction to Front-End"}
          text={
            "Lorem ipsum dolor sit amet consectetur. Elit massaerat vitae non semper quis."
          }
          style={"step1"}
        />
        <RightStep
          stepNumber={"2"}
          title={"Introduction to Front-End"}
          text={
            "Lorem ipsum dolor sit amet consectetur. Elit massaerat vitae non semper quis."
          }
          style={"step2"}
        />
        <LeftStep
          stepNumber={"3"}
          title={"Introduction to Front-End"}
          text={
            "Lorem ipsum dolor sit amet consectetur. Elit massaerat vitae non semper quis."
          }
          style={"step3"}
        />
        <RightStep
          stepNumber={"4"}
          title={"Introduction to Front-End"}
          text={
            "Lorem ipsum dolor sit amet consectetur. Elit massaerat vitae non semper quis."
          }
          style={"step4"}
        />
        <LeftStep
          stepNumber={"5"}
          title={"Introduction to Front-End"}
          text={
            "Lorem ipsum dolor sit amet consectetur. Elit massaerat vitae non semper quis."
          }
          style={"step5"}
        />
        <RightStep
          stepNumber={"6"}
          title={"Introduction to Front-End"}
          text={
            "Lorem ipsum dolor sit amet consectetur. Elit massaerat vitae non semper quis."
          }
          style={"step6"}
        />
      </div>
    </React.Fragment>
  );
}
