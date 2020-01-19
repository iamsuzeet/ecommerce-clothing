import React from "react";
import styles from "./customButton.module.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  myStyle,
  ...otherProps
}) => {
  return (
    <button
      className={
        styles.customButton +
        ` ${myStyle ? myStyle : ""} ${inverted ? styles.inverted : ""} ${
          isGoogleSignIn ? styles.googleSignIn : ""
        }`
      }
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
