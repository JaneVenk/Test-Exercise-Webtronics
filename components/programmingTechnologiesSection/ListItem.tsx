import React from "react";
import styles from "../../styles/Home.module.css";

interface Props {
  imageSrc: string;
  imageAlt: string;
  text:string;
}

const ListItem: React.FC<Props> = ({ imageSrc, imageAlt, text }) => {
  return (
    <li className={styles.progTechCardsListItem}>
      <div className={styles.progTechCardsItemDiv}>
        <img
          className={styles.progTechCardsItemSubtract}
          src="/progTech/substrate.svg"
          alt="substrate"
        ></img>
        <img
          className={styles.progTechCardsItemImage}
          src={imageSrc}
          alt={imageAlt}
        ></img>
        <h4 className={styles.progTechCardsItemText}>{text}</h4>
      </div>
    </li>
  );
};

export default ListItem;
