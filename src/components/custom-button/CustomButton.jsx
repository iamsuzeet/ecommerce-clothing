import React from "react";
import styles from "./customButton.module.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={
        styles.customButton + ` ${isGoogleSignIn ? styles.googleSignIn : ""}`
      }
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
