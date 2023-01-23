import React from "react";
import styles from "../../styles/Home.module.css";

interface Props {
  questionTitle: string;
  onClickButton(): void;
}

const CloseQuestion: React.FC<Props> = ({ questionTitle, onClickButton }) => {
  return (
    <div className={styles.questionsContentListSecondItem}>
      <div className={styles.questionsContentListSecondItemText}>
        <h4>{questionTitle}</h4>
        <button
          onClick={onClickButton}
          className={styles.questionsContentListSecondItemButton}
        >
          <img src="/questions/minus.svg" alt="minus"></img>
        </button>
      </div>
    </div>
  );
};

export default CloseQuestion;
