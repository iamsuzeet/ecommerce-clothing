import React from "react";
import CustomButton from "./../custom-button/CustomButton";
import { CartItem } from "./../cart-item/CartItem";
import { connect } from "react-redux";

import styles from "./cartDropdown.module.scss";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className={styles.cartDropdown}>
      <div className={styles.cartItems}>
        {cartItems.length !== 0
          ? cartItems.map(cartItem => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
          : "no item"}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default connect(mapStateToProps)(CartDropdown);
