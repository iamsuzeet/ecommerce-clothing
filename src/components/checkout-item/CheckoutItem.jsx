import React from "react";
import styles from "./CheckoutItem.module.scss";

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => {
  return (
    <div className={styles.CheckoutItem}>
      <div className={styles.ImageContainer}>
        <img src={imageUrl} alt="item" />
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.quantity}>{quantity}</div>
      <div className={styles.price}>{price}</div>
      <div className={styles.RemoveButton}>&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
