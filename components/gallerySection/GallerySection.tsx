import React from "react";
import styles from "../../styles/Home.module.css";

export default function GallerySection() {
  const developerImages = [
    {
      backgroundImage: "url('/gallery/developer 1.svg')",
    },
    {
      backgroundImage: "url('/gallery/developer 2.svg')",
    },
    {
      backgroundImage: "url('/gallery/developer 3.svg')",
    },
  ];

  return (
    <div className={styles.galleryDiv}>
      <h2 className={styles.galleryHead}>Gallery</h2>
      <div className={styles.galleryP1}>
        <p>
          By the end of this course, you will be able to develop and publish
          your very own Google Chrome extension! In this course we will focus on
          coding exercises and projects.{" "}
        </p>
      </div>
      <div className={styles.galleryP2}>
        <p>
          If you would like to learn web development and get a job in the tech
          industry, you are going to LOVE this course! Learn HTML, CSS,
          JavaScript, Bootstrap and more with over 15 hours of HD video
          tutorials! This course was designed to be extremely beginner friendly.
          We will begin with the very basics of HTML and build a simple web
          page.
        </p>
      </div>
      <div style={developerImages[0]} className={styles.galleryImg1}></div>
      <div style={developerImages[1]} className={styles.galleryImg2}></div>
      <div style={developerImages[2]} className={styles.galleryImg3}></div>
    </div>
  );
}
