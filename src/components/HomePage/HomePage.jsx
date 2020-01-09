import React from "react";
import styles from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.directory__menu}>
        <div className={styles.menu__item}>
          <div className={styles.content}>
            <div className={styles.title}>HATS</div>
            <span className={styles.subtitle}>SHOP NOW</span>
          </div>
        </div>

        <div className={styles.menu__item}>
          <div className={styles.content}>
            <div className={styles.title}>JACKETS</div>
            <span className={styles.subtitle}>SHOP NOW</span>
          </div>
        </div>

        <div className={styles.menu__item}>
          <div className={styles.content}>
            <div className={styles.title}>SNEAKERS</div>
            <span className={styles.subtitle}>SHOP NOW</span>
          </div>
        </div>

        <div className={styles.menu__item}>
          <div className={styles.content}>
            <div className={styles.title}>WOMENS</div>
            <span className={styles.subtitle}>SHOP NOW</span>
          </div>
        </div>

        <div className={styles.menu__item}>
          <div className={styles.content}>
            <div className={styles.title}>MENS</div>
            <span className={styles.subtitle}>SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
};
