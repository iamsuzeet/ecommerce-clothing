import React from "react";
import styles from "./cartIcon.module.scss";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart-action";
import { selectCartItemsCount } from "./../../redux/cart/cart-selectors";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className={styles.cartIcon} onClick={toggleCartHidden}>
      <ShoppingIcon className={styles.shoppingIcon} />
      <span className={styles.itemCount}>{itemCount}</span>
    </div>
  );
};

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
