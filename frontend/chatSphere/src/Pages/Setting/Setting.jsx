import { useState } from "react";
import UserSetting from "../../Common/UserSetting/UserSetting";
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar";
import PhoneNav from "../../Components/Phone Nav/PhoneNav";
import RightSideBar from "../../Components/RightSideBar/RightSideBar";

import styles from "./Setting.module.css";
import PhoneFeedUpload from "../../Common/Phone feed Upload/PhoneFeedUpload";

const Setting = () => {
  const [showPhoneFeedUpload, setShowPhoneFeedUpload] = useState(false);

  const handleShowPhoneFeedUpload = () => {
    setShowPhoneFeedUpload(true);
  };

  const handleHidePhoneFeedUpload = () => {
    setShowPhoneFeedUpload(false);
  };
  return (
    <>
      <div className={styles.setting__page__container}>
        {/* side bar  */}
        <LeftSideBar />
        {/* feed section  */}
        <div className={styles.setting__container}>
          <UserSetting />
        </div>
        {/* side bar  */}
        <RightSideBar />
      </div>
      <PhoneNav handleShowPhoneFeedUpload={handleShowPhoneFeedUpload} />
      {showPhoneFeedUpload && (
        <PhoneFeedUpload
          handleHidePhoneFeedUpload={handleHidePhoneFeedUpload}
        />
      )}
    </>
  );
};

export default Setting;
