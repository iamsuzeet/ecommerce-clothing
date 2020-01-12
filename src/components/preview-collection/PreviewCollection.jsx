import React from "react";
import styles from "./previewcollection.module.scss";
import CollectionItem from "./../collection-item/CollectionItem";

const PreviewCollection = ({ title, items }) => {
  return (
    <div className={styles.CollectionPreview}>
      <h1 className={styles.title}>{title.toUpperCase()}</h1>
      <div className={styles.preview}>
        {items
          .filter((item, id) => id < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
