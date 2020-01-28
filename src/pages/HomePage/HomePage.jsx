import React from "react";
import styles from "./HomePage.module.scss";
import Directory from "./../../components/directory/Directory";

export const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <Directory />
    </div>
  );
};
