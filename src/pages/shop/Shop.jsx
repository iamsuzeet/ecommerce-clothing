import React, { Component } from "react";
import { SHOP_DATA } from "./shop-data";
import PreviewCollection from "./../../components/preview-collection/PreviewCollection";

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...categoryPropery }) => (
          <PreviewCollection key={id} {...categoryPropery} />
        ))}
      </div>
    );
  }
}

export default Shop;
