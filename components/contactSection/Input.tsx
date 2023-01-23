import React from "react";
import styles from "../../styles/Home.module.css";

interface Props {
  placeholderText: string;
  typeText: string;
  idText: string;
  register: {};
}

const Input: React.FC<Props> = ({
  placeholderText,
  typeText,
  idText,
  register,
}) => {
  return (
    <div className={styles.contactDivInputContainer}>
      <input
        className={styles.contactDivInput}
        placeholder={placeholderText}
        type={typeText}
        id={idText}
        {...register}
      ></input>
    </div>
  );
};

export default Input;
