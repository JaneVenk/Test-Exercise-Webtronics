import React from "react";
import styles from "../../styles/Home.module.css";

interface Props {
  placeholderText: string;
  typeText: string;
  idText: string;
  errorMessage: string;
  register: {};
}

const ErrorInput: React.FC<Props> = ({
  placeholderText,
  typeText,
  idText,
  errorMessage,
  register,
}) => {
  return (
    <div className={styles.contactDivError}>
      <div className={styles.contactDivInputContainerError}>
        <input
          className={styles.contactDivInputError}
          placeholder={placeholderText}
          type={typeText}
          id={idText}
          {...register}
        ></input>
      </div>
      <span className={styles.contactDivPError}>{errorMessage}</span>
    </div>
  );
};

export default ErrorInput;
