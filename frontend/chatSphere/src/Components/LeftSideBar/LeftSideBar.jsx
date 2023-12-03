import styles from "./LeftSideBar.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { FaHashtag } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import ActiveUserProfileCard from "../../Common/CardShowProfile/ActiveUserProfileCard";
import { NavLink } from "react-router-dom";

const LeftSideBar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className={styles.big__container}>
      <ActiveUserProfileCard />
      <div className={styles.left__sidebar__container}>
        <div className={styles.menu__container}>
          <NavLink to="/">
            <div className={styles.home}>
              <AiOutlineHome className={styles.icons} />
              <p>Home</p>
            </div>
          </NavLink>
          <NavLink to="/explore">
            <div className={styles.explore}>
              <FaHashtag className={styles.icons} />
              <p>Explore</p>
            </div>
          </NavLink>
          <NavLink to="/bookmark">
            <div className={styles.bookmark}>
              <BsBookmark className={styles.icons} />
              <p>Bookmark</p>
            </div>
          </NavLink>
          <NavLink to="/profile">
            <div className={styles.profile}>
              <BsPerson className={styles.icons} />
              <p>Profile</p>
            </div>
          </NavLink>
          <NavLink to="/setting">
            <div className={styles.delete}>
              <BsList className={styles.icons} />
              <p>Setting</p>
            </div>
          </NavLink>
        </div>
        <div className={styles.logout} onClick={handleLogout}>
          <FiLogOut className={styles.icons} />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
