import React from "react";
import styles from "./Checkout.module.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "./../../components/checkout-item/CheckoutItem";
import {
  selectCartItems,
  selectCartTotal
} from "./../../redux/cart/cart-selectors";

const Checkout = ({ cartItems, total }) => {
  return (
    <div className={styles.CheckoutPage}>
      <div className={styles.CheckoutHeader}>
        <div className={styles.HeaderBlock}>
          <span>Product</span>
        </div>
        <div className={styles.HeaderBlock}>
          <span>Description</span>
        </div>
        <div className={styles.HeaderBlock}>
          <span>Quantity</span>
        </div>{" "}
        <div className={styles.HeaderBlock}>
          <span>Price</span>
        </div>
        <div className={styles.HeaderBlock}>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className={styles.total}>
        <span>TOTAL: ${total}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
