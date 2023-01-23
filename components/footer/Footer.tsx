import React from "react";
import styles from "../../styles/Home.module.css";

interface Props {
  aboutUsSectionRef: any;
  stepsSectionRef: any;
  questionsSectionRef: any;
  reviewsSectionRef: any;
  gallerySectionRef: any;
}

function scroll(ref: any) {
  ref.current.scrollIntoView({ behavior: "smooth" });
}

const Footer: React.FC<Props> = (Props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerDiv}>
        <div className={styles.footerLogo}>
          <a href="/">
            <img src="/footer/logo2.svg"></img>
          </a>
          <div className={styles.footerLogoP}>
            <p>Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815</p>
          </div>
        </div>

        <div className={styles.footerCompany}>
          <h5>Company</h5>
          <div className={styles.footerList}>
            <div className={styles.footerList1}>
              <a onClick={() => scroll(Props.aboutUsSectionRef)}>
                <p className={styles.footerListPwithMargin}>About</p>
              </a>
              <a onClick={() => scroll(Props.stepsSectionRef)}>
                <p className={styles.footerListPwithMargin}>Steps</p>
              </a>
              <a onClick={() => scroll(Props.questionsSectionRef)}>
                <p className={styles.footerListP}>FAQs</p>
              </a>
            </div>
            <div className={styles.footerList2}>
              <a onClick={() => scroll(Props.reviewsSectionRef)}>
                <p className={styles.footerListPwithMargin}>Review</p>
              </a>
              <a onClick={() => scroll(Props.gallerySectionRef)}>
                <p className={styles.footerListP}>Gallery</p>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.socialMedia}>
          <h5>Social Media</h5>
          <div className={styles.socialMediaIcons}>
            <a href="https://www.facebook.com/">
              <img src="/footer/facebook.svg" alt="facebook"></img>
            </a>
            <a href="https://about.gitlab.com/">
              <img src="/footer/gitlab.svg" alt="gitlab"></img>
            </a>
            <a href="https://twitter.com/">
              <img src="/footer/twitter.svg" alt="twitter"></img>
            </a>
            <a href="https://www.linkedin.com/">
              <img src="/footer/linkedin.svg" alt="linkedin"></img>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
