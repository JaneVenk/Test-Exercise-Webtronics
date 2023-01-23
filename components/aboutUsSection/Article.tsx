import React from "react";
import styles from "../../styles/Home.module.css";

interface Props {
  imageSrc: string;
  title: string;
  text: string;
  classStyle: string;
  alt: string;
}

const Article: React.FC<Props> = ({
  imageSrc,
  title,
  text,
  classStyle,
  alt,
}) => {
  return (
    <article className={styles[classStyle]}>
      <img src={imageSrc} alt={alt}></img>
      <h4 className={styles.mentorArticleText}>{title}</h4>
      <p className={styles.mentorArticleText + " " + styles.mentorArticleTextP}>
        {text}
      </p>
    </article>
  );
};

export default Article;
