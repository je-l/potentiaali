import React from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <svg
      viewBox="0 0 1440 60"
      className={styles["footer__top-triangle"]}
      preserveAspectRatio="none"
    >
      <polygon
        points="0,60 1440,60 0,0"
        className={styles["footer__top-triangle-fill"]}
      />
    </svg>
    <div className={styles["footer-links"]}>
      <a
        href="https://www.facebook.com/KumpulanPotentiaali/"
        rel="noopener noreferrer"
        target="_blank"
        className={styles["footer-icon"]}
        alt="View our Facebook page"
      >
        <i className="fab fa-facebook-square"></i>
      </a>
      <a
        href="https://www.linkedin.com/company/kumpulan-potentiaali/"
        rel="noopener noreferrer"
        target="_blank"
        className={styles["footer-icon"]}
        alt="View our LinkedIn profile"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a
        href="mailto:info@potentiaali.com"
        alt="Send an email"
        className={styles["footer-icon"]}
      >
        <i className="fas fa-envelope"></i>
      </a>
    </div>
  </footer>
);

Footer.propTypes = {
  logos: PropTypes.array
};

export default Footer;
