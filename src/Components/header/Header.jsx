import React, { useState } from "react";
import styles from "./Header.module.scss";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";

export const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        Shop<span>IQ</span>
      </h2>
    </Link>
  </div>
);

export const activeLink = ({ isActive }) =>
  isActive ? `${styles.active}` : "";

const Header = () => {
  const [showmenu, setShowMenu] = useState(false);

  const togglemenu = () => {
    setShowMenu(!showmenu);
  };
  const hidemenu = () => {
    setShowMenu(false);
  };
  const cart = (
    <span className={styles.cart}>
      <Link to="/cart">
        Cart
        <FaShoppingCart size={20} />
        <p>0</p>
      </Link>
    </span>
  );

  return (
    <header>
      <div className={styles.header}>
        {logo}
        <nav
          className={
            showmenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
          }
        >
          <div
            className={
              showmenu
                ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
                : `${styles["nav-wrapper"]}`
            }
            onClick={hidemenu}
          ></div>
          <ul>
            <li className={styles["logo-mobile"]}>
              {logo}
              <FaTimes size={22} color="#fff" onClick={hidemenu} />
            </li>
            <li>
              <NavLink to="/shop" className={activeLink}>
                Shop
              </NavLink>
            </li>
          </ul>
          <div className={styles["header-right"]}>
            <span className={styles.links}>
              <NavLink to={"login"} className={activeLink}>
                Login
              </NavLink>
              <NavLink to={"register"} className={activeLink}>
                Register
              </NavLink>
              <NavLink to={"order-history"} className={activeLink}>
                My Order
              </NavLink>
            </span>
            {cart}
            {/* <HiOutlineMenuAlt3 /> */}
          </div>
        </nav>
        <div className={styles["menu-icon"]}>
          {cart}

          <HiOutlineMenuAlt3 size={28} onClick={togglemenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
