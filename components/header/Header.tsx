import React from "react";
import styles from "../../styles/Home.module.css";

interface Props {
  aboutUsSectionRef: any;
  progTechSectionRef: any;
  stepsSectionRef: any;
  questionsSectionRef: any;
  contactSectionRef: any;
}

function scroll(ref: any) {
  ref.current.scrollIntoView({ behavior: "smooth" });
}

const Header: React.FC<Props> = (Props) => {
  return (
    <header>
      <div className={styles.headerWrapper}>
        <div>
          <a href="/">
            <img src="/header/logo webtronics 2 (1).svg" alt="Logotype"></img>
          </a>
        </div>
        <nav>
          <ul className={styles.headerList}>
            <li className={styles.headerListItem}>
              <a
                onClick={() => scroll(Props.aboutUsSectionRef)}
                className={styles.headerListItemLink}
              >
                About
              </a>
            </li>
            <li className={styles.headerListItem}>
              <a
                onClick={() => scroll(Props.progTechSectionRef)}
                className={styles.headerListItemLink}
              >
                Programs
              </a>
            </li>
            <li className={styles.headerListItem}>
              <a
                onClick={() => scroll(Props.stepsSectionRef)}
                className={styles.headerListItemLink}
              >
                Steps
              </a>
            </li>
            <li className={styles.headerListItem}>
              <a
                onClick={() => scroll(Props.questionsSectionRef)}
                className={styles.headerListItemLink}
              >
                Questions
              </a>
            </li>
            <li className={styles.headerListItem}>
              <a
                onClick={() => scroll(Props.contactSectionRef)}
                className={styles.headerListItemLink}
              >
                Get in touch
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
