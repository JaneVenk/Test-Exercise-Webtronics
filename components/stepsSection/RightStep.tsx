import React from "react";
import styles from "../../styles/Home.module.css";

interface Props {
  stepNumber: string;
  title: string;
  text: string;
  style: string;
}

const RightStep: React.FC<Props> = ({ stepNumber, title, text, style }) => {
  return (
    <div className={styles[style]}>
      <div className={styles.stepRIGHTDiv}>
        <img
          className={styles.stepRIGHTDivArrowImg}
          src="/steps/arrowright.svg"
        ></img>
        <div className={styles.stepRIGHTOuterDiv}>
          <img
            className={styles.stepRIGHTOuterBorder}
            src="/steps/borderright.svg"
          ></img>
        </div>
        <div className={styles.stepRIGHTInnerDiv}>
          <h4 className={styles.stepLEFTH4}>Step {stepNumber}</h4>
          <h3 className={styles.stepLEFTH3}>{title}</h3>
          <div className={styles.stepLEFTP}>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightStep;
