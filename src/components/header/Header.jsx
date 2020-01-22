import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import { auth } from "./../../firebase/firebase.utils";

import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/user/user-selectors";
import { selectCurrentUser } from "./../../redux/user/user-selectors";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "./../cart-icon/CartIcon";
import CartDropdown from "./../cart-dropdown/CartDropdown";

const Header = ({ currentUser, hidden }) => {
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

        {currentUser ? (
          <div className={styles.option} onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className={styles.option} to="/connect">
            SIGN IN
          </Link>
        )}

        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
