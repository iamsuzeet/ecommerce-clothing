import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";

import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/" className={styles.logo__container}>
        <Logo className={styles.logo} />
      </Link>

      <div className={styles.options}>
        <Link className={styles.option} to="/shop">
          SHOP
        </Link>

        <Link className={styles.option} to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
