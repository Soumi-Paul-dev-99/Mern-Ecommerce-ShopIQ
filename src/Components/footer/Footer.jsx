import React from "react";
import styles from "./Footer.module.scss";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className={styles.footer}>
      &copy; &nbsp;<span>SoumiTech </span> &nbsp; {year} All Rights &nbsp;
      <span>Reserved</span>
    </div>
  );
};

export default Footer;
