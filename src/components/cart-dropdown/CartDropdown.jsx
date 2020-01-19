import React from "react";
import CustomButton from "./../custom-button/CustomButton";
import { CartItem } from "./../cart-item/CartItem";
import { connect } from "react-redux";
import { selectCartItems } from "./../../redux/cart/cart-selectors";

import styles from "./cartDropdown.module.scss";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className={styles.cartDropdown}>
      <div className={styles.cartItems}>
        {cartItems.length !== 0 ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <div className={styles.noItem}>NO ITEM</div>
        )}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
