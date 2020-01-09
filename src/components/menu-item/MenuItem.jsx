import React from "react";
import styles from "./MenuItem.module.scss";

export const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${styles.MenuItem} ${size ? styles.large : ""}`}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={styles.background__image}
      />
      <div className={styles.content}>
        <div className={styles.title}>{title.toUpperCase()}</div>
        <span className={styles.subtitle}>SHOP NOW</span>
      </div>
    </div>
  );
};
