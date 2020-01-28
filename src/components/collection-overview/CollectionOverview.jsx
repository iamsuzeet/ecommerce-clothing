import React from "react";
import styles from "./CollectionOverview.module.scss";
import { connect } from "react-redux";
import PreviewCollection from "./../preview-collection/PreviewCollection";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "./../../redux/shop/shop-selectors";

const CollectionOverview = ({ collections }) => {
  return (
    <div className={styles.CollectionOverview}>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export default connect(mapStateToProps)(CollectionOverview);
