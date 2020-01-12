import React from "react";
import styles from "./collectionItem.module.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => {
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
    </div>
  );
};
export default CollectionItem;
