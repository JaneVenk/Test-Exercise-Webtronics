import React from "react";
import styles from "../../styles/Home.module.css";
import ListQuestionsItem from "./ListQuestionsItem";

export default function QuestionsSection() {
  return (
    <div className={styles.questionsDiv}>
      <div className={styles.questionsHead}>
        <h2>Frequently Asked Questions</h2>
      </div>

      <div className={styles.questionsContentDiv}>
        <div className={styles.questionsContentSignDiv}>
          <div className={styles.questionsContentSignText}>
            <p>
              Do you have any kind of questions?<br></br>We are here to help.
            </p>
          </div>

          <svg
            className={styles.questionsContentSignSVG}
            width="356"
            height="417"
            viewBox="0 -40 356 417"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M271.646 225.577L271.651 225.575C290.921 217.781 311.27 207.461 326.799 191.057C342.418 174.558 353 152.078 353 120.353C353 88.0199 341.38 58.5173 314.977 37.169C288.659 15.889 248.011 3 190.472 3C123.557 3 76.6297 20.2539 46.403 47.7038C16.1506 75.1771 3 112.527 3 151.919V164C3 167.866 6.134 171 10 171H87.855C91.721 171 94.855 167.866 94.855 164V144.772C94.855 126.331 99.9966 113.17 113.104 104.381C126.536 95.3757 148.821 90.5956 184.091 90.5956C217.663 90.5956 236.705 94.4866 247.295 100.48C252.496 103.424 255.594 106.842 257.435 110.541C259.296 114.281 259.985 118.539 259.985 123.331C259.985 132.634 256.989 139.114 250.818 144.708C244.436 150.494 234.595 155.392 220.668 161.052L220.658 161.056L180.083 177.719C180.077 177.722 180.072 177.724 180.067 177.726C161.955 184.925 145.103 193.751 132.772 206.488C120.339 219.331 112.639 236.011 112.639 258.529V275.375C112.639 279.241 115.773 282.375 119.639 282.375H198.654C202.52 282.375 205.654 279.241 205.654 275.375V272.228C205.654 264.969 206.52 259.93 209.533 255.637C212.593 251.277 218.188 247.235 228.735 242.843C228.74 242.84 228.746 242.838 228.751 242.836L271.646 225.577ZM212.616 407V317.919C212.616 314.053 209.482 310.919 205.616 310.919H113.838C109.972 310.919 106.838 314.053 106.838 317.919V407C106.838 410.866 109.972 414 113.838 414H205.616C209.482 414 212.616 410.866 212.616 407Z"
              stroke="url(#paint0_linear_30_141)"
              strokeOpacity="0.7"
              strokeWidth="6"
            />
            <defs>
              <linearGradient
                id="paint0_linear_30_141"
                x1="43.84"
                y1="44.1235"
                x2="293.888"
                y2="445.92"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#15BFFD" />
                <stop offset="1" stopColor="#9C37FD" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className={styles.questionsContentListDiv}>
          <ListQuestionsItem
            isOpen={true}
            title={"What is the price?"}
            text={
              "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like afront-end engineer, too."
            }
          />
          <div className={styles.emptyDiv}></div>
          <ListQuestionsItem
            isOpen={false}
            title={"What is the price?"}
            text={
              "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like afront-end engineer, too."
            }
          />
          <div className={styles.emptyDiv}></div>
          <ListQuestionsItem
            isOpen={false}
            title={"What is the price?"}
            text={
              "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like afront-end engineer, too."
            }
          />
          <div className={styles.emptyDiv}></div>
          <ListQuestionsItem
            isOpen={false}
            title={"What is the price?"}
            text={
              "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like afront-end engineer, too."
            }
          />
          <div className={styles.emptyDiv}></div>
          <ListQuestionsItem
            isOpen={false}
            title={"What is the price?"}
            text={
              "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like afront-end engineer, too."
            }
          />
        </div>
      </div>
    </div>
  );
}
