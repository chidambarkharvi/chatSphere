/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar";
import RightSideBar from "../../Components/RightSideBar/RightSideBar";
import { profileService } from "../../Services/Profile.services";
import UserProfile from "../../Components/Profile/UserProfile";
import { useUser } from "../../Context/User-context";
import { usePostData } from "../../Context/Post-context";

import styles from "./Profile.module.css";
import { useLoader } from "../../Context/LoaderContext";
import Loader from "../../Components/Loader/Loader";
import { ToastContainer } from "react-toastify";
import PhoneNav from "../../Components/Phone Nav/PhoneNav";
import PhoneFeedUpload from "../../Common/Phone feed Upload/PhoneFeedUpload";
import { useToaster } from "../../Context/toast";

const ProfilePage = () => {
  const { getUser } = useUser();
  const { getPostById } = usePostData();
  const [showPhoneFeedUpload, setShowPhoneFeedUpload] = useState(false);

  const handleShowPhoneFeedUpload = () => {
    setShowPhoneFeedUpload(true);
  };

  const handleHidePhoneFeedUpload = () => {
    setShowPhoneFeedUpload(false);
  };

  const { loader, showLoader, hideLoader } = useLoader();
  const { errorToast } = useToaster();
  useEffect(() => {
    (async () => {
      try {
        showLoader("Fetching Profile...");
        const res = await profileService(localStorage.getItem("token"));
        if (res.status === 200) {
          getUser(res?.data?.data);
          getPostById(res?.data?.data?._id);
          hideLoader();
        }
      } catch (err) {
        console.log(err);
        if (err) {
          hideLoader();
          errorToast("Something went wrong while fetching profile");
        }
      }
    })();
  }, []);

  return (
    <>
      {loader.loader && <Loader />}
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className={styles.profile__page__container}>
        {/* side bar  */}
        <LeftSideBar />
        {/* user Profile  */}
        <div className={styles.feed__container}>
          <UserProfile />
        </div>
        {/* side bar  */}
        <RightSideBar isShowFriend={true} />
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

export default ProfilePage;
