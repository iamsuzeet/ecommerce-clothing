import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "./../../components/collection-overview/CollectionOverview";
import Collection from "../collection/Collection";
import {
  firestore,
  convertCollectionsSnapshopToMap
} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "./../../redux/shop/shop-action";

class Shop extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshopToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(Shop);
