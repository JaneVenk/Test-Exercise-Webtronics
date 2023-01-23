import React from "react";
import styles from "../../styles/Home.module.css";

interface Props {
  questionTitle: string;
  questionText: string;
  onClickButton(): void;
}

const OpenQuestion: React.FC<Props> = ({
  questionTitle,
  questionText,
  onClickButton,
}) => {
  return (
    <div className={styles.questionsContentListFirstItem}>
      <div className={styles.questionsContentListFirstItemText}>
        <h4>{questionTitle}</h4>
        <textarea
          rows={20}
          readOnly
          className={styles.questionsContentListTextArea}
          placeholder={questionText}
        ></textarea>
      </div>
      <button
        onClick={onClickButton}
        className={styles.questionsContentListFirstItemButton}
      >
        <img src="/questions/plus.svg" alt="plus"></img>
      </button>
    </div>
  );
};

export default OpenQuestion;
