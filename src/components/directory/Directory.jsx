import React, { Component } from "react";
import styles from "./Directory.module.scss";
import { categories } from "./directory.data";
import MenuItem from "./../menu-item/MenuItem";

export class Directory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: categories
    };
  }
  render() {
    return (
      <div className={styles.directory__menu}>
        {this.state.categories.map(({ id, ...otherCategoryProps }) => (
          <MenuItem key={id} {...otherCategoryProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
