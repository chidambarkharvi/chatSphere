import { FcSettings } from "react-icons/fc";

import styles from "./UserSetting.module.css";
import { useUser } from "../../Context/User-context";
import { useState } from "react";
import EditProfile from "../EditProfile/EditProfile";

const UserSetting = () => {
  const [showEditProfile, setShowEditProfile] = useState(false);

  const { deleteAccount } = useUser();

  const handleDeleteAccount = () => {
    deleteAccount();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };

  const closeEditProfile = () => setShowEditProfile(false);

  return (
    <>
      <div className={styles.setting__container}>
        <div className={styles.setting__header}>
          <h3>Setting</h3>
          <FcSettings className={styles.icons} />
        </div>
        <div className={styles.account__zone}>
          <h4>Account Zone</h4>
          <div className={styles.delet__account}>
            <h5>Delete Account</h5>
            <button className={styles.delet__btn} onClick={handleDeleteAccount}>
              Delete
            </button>
          </div>
          <div className={styles.change__password}>
            <h5>Change Password</h5>
            <button
              className={styles.change__password__btn}
              onClick={() => setShowEditProfile(true)}
            >
              Change password
            </button>
          </div>
        </div>
        <div className={styles.personal__zone}>
          <h4>Personal Zone</h4>
          <div className={styles.change__email}>
            <h5>Change Email</h5>
            <button
              className={styles.change__email__btn}
              onClick={() => setShowEditProfile(true)}
            >
              Change Email
            </button>
          </div>
        </div>
        <button onClick={handleLogout} className={styles.logout__btn}>
          Logout
        </button>
      </div>
      {showEditProfile && (
        <EditProfile
          isAccountSeeting={true}
          closeEditProfile={closeEditProfile}
        />
      )}
    </>
  );
};

export default UserSetting;
