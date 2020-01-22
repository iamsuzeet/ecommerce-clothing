import React from "react";
import CustomButton from "./../custom-button/CustomButton";
import { CartItem } from "./../cart-item/CartItem";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import styles from "./cartDropdown.module.scss";

import { createStructuredSelector } from "reselect";
import { selectCartItems } from "./../../redux/cart/cart-selectors";
import { toggleCartHidden } from "./../../redux/cart/cart-action";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className={styles.cartDropdown}>
      <div className={styles.cartItems}>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className={styles.emptymessage}>Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
