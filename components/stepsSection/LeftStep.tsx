import React from "react";
import styles from "../../styles/Home.module.css";

interface Props {
  stepNumber: string;
  title: string;
  text: string;
  style: string;
}

const LeftStep: React.FC<Props> = ({ stepNumber, title, text, style }) => {
  return (
    <div className={styles[style]}>
      <div className={styles.stepLEFTDiv}>
        <img
          className={styles.stepLEFTDivArrowImg}
          src="/steps/arrowleft.svg"
        ></img>
        <div className={styles.stepLEFTOuterDiv}>
          <img
            className={styles.stepLEFTOuterBorder}
            src="/steps/borderleft.svg"
          ></img>
          <div className={styles.stepLEFTInnerDiv}>
            <h4 className={styles.stepLEFTH4}>Step {stepNumber}</h4>
            <h3 className={styles.stepLEFTH3}>{title}</h3>
            <div className={styles.stepLEFTP}>
              <p>{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftStep;
