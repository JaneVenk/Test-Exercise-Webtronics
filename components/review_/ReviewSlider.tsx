import React, { useState } from "react";
import styles from "../../styles/Home.module.css";

interface Props {
  sliders1: { url: string }[];
  sliders2: { url: string }[];
  sliders3: { url: string }[];
  counter: { url: string }[];
  text: { title: string; text: string }[];
}

const ReviewSlider: React.FC<Props> = ({
  sliders1,
  sliders2,
  sliders3,
  counter,
  text,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideStylesWidthBackground1 = {
    backgroundImage: `url(${sliders1[currentIndex].url})`,
  };

  const slideStylesWidthBackground2 = {
    backgroundImage: `url(${sliders2[currentIndex].url})`,
  };

  const slideStylesWidthBackground3 = {
    backgroundImage: `url(${sliders3[currentIndex].url})`,
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliders1.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === sliders1.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <h4 className={styles.reviewContentH4}>{text[currentIndex].title}</h4>
      <div className={styles.reviewContentP}>
        <p>{text[currentIndex].text}</p>
      </div>
      <div className={styles.reviewContentBorderImg1Div}></div>
      <div
        style={slideStylesWidthBackground1}
        className={styles.reviewContentImg1Div}
      ></div>
      <div className={styles.reviewContentBorderImg2Div}></div>
      <div
        style={slideStylesWidthBackground2}
        className={styles.reviewContentImg2Div}
      ></div>
      <div className={styles.reviewContentBorderImg3Div}></div>
      <div
        style={slideStylesWidthBackground3}
        className={styles.reviewContentImg3Div}
      ></div>
      <img
        src={counter[currentIndex].url}
        className={styles.reviewContentTextImg}
        alt={"counter text"}
      ></img>

      <button onClick={goToPrevious} className={styles.buttonArrowLeft}>
        <img src="/review_/reviewArrowLeft.svg" alt="arrowLeft"></img>
      </button>

      <button onClick={goToNext} className={styles.buttonArrowRight}>
        <img src="/review_/reviewArrowRight.svg" alt="arrowRight"></img>
      </button>
    </div>
  );
};

export default ReviewSlider;
