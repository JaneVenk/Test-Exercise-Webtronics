import React from "react";
import styles from "../../styles/Home.module.css";

import ReviewSlider from "./ReviewSlider";

const image1 = [
  { url: "/review_/man1.svg" },
  { url: "/review_/woman1.svg" },
  { url: "/review_/man2.svg" },
];

const image2 = [
  { url: "/review_/woman1min.svg" },
  { url: "/review_/man2min.svg" },
  { url: "/review_/man1min.svg" },
];

const image3 = [
  { url: "/review_/man2min.svg" },
  { url: "/review_/man1min.svg" },
  { url: "/review_/woman1min.svg" },
];

const counter = [
  { url: "/review_/reviewText1.svg" },
  { url: "/review_/reviewText2.svg" },
  { url: "/review_/reviewText3.svg" },
];

const text = [
  {
    title: "Best courses ever",
    text: "Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the 'teacher' sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc.",
  },
  {
    title: "Amazing teaching",
    text: "The explanation is crazy it really doesn't have a structure to go from point A to point B. He starts to explain something then he change his mind and start with another thing an so on. If you try to learn pro active by doing the same thing with him all along you will get confused and start to loose interest.",
  },
  {
    title: "Simple and easy",
    text: "I am really enjoying the experience of learning a new skill I used to believe that web design was way too complicated for me to learn but so far in this course I have been keeping up and having fun.",
  },
];

export default function ReviewSection() {
  return (
    <div className={styles.reviewDiv}>
      <h2>Review</h2>
      <div className={styles.reviewContent}>
        <ReviewSlider
          sliders1={image1}
          sliders2={image2}
          sliders3={image3}
          counter={counter}
          text={text}
        />
      </div>
    </div>
  );
}
