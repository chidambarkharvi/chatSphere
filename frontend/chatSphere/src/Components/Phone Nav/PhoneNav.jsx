/* eslint-disable react/prop-types */
import { AiOutlineHome } from "react-icons/ai";
import { FaHashtag } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsList } from "react-icons/bs";

import styles from "./PhoneNav.module.css";
import { NavLink } from "react-router-dom";

const PhoneNav = ({ handleShowPhoneFeedUpload }) => {
  return (
    <div className={styles.phone__nav__container}>
      <ul className={styles.phone__nav__ul}>
        <li className={styles.nav__items}>
          <NavLink to="/">
            <AiOutlineHome className={styles.nav__icons} />
          </NavLink>
        </li>
        <li className={styles.nav__items}>
          <NavLink to="/explore">
            <FaHashtag className={styles.nav__icons} />
          </NavLink>
        </li>
        <li
          onClick={() => handleShowPhoneFeedUpload()}
          className={styles.nav__items}
        >
          ➕
        </li>
        <li className={styles.nav__items}>
          <NavLink to="/bookmark">
            <BsBookmark className={styles.nav__icons} />
          </NavLink>
        </li>
        <li className={styles.nav__items}>
          <NavLink to="/profile">
            <BsPerson className={styles.nav__icons} />
          </NavLink>
        </li>
        <li className={styles.nav__items}>
          <NavLink to="/setting">
            <BsList className={styles.nav__icons} />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default PhoneNav;
