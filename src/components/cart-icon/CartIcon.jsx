import React from "react";
import styles from "./cartIcon.module.scss";
import { connect } from "react-redux";

import { toggleCartHidden } from "./../../redux/actions/cart-action";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className={styles.cartIcon} onClick={toggleCartHidden}>
      <ShoppingIcon className={styles.shoppingIcon} />
      <span className={styles.itemCount}>0</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);
