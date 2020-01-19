import React from "react";
import { connect } from "react-redux";
import styles from "./collectionItem.module.scss";

import CustomButton from "./../custom-button/CustomButton";
import { addItem } from "../../redux/cart/cart-action";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className={styles.CollectionItem}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={styles.CollectionFooter}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price}</span>
      </div>

      <CustomButton
        onClick={() => addItem(item)}
        inverted
        myStyle={styles.customButton}
      >
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
