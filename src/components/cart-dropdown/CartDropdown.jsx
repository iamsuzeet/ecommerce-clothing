import React from "react";
import CustomButton from "./../custom-button/CustomButton";

import styles from "./cartDropdown.module.scss";

export const CartDropdown = () => {
  return (
    <div className={styles.cartDropdown}>
      <div className={styles.cartItems}>
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
    </div>
  );
};
