/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import FreindProfile from "../../Components/Friends Profile/FreindProfile";
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar";
import RightSideBar from "../../Components/RightSideBar/RightSideBar";
import { useUser } from "../../Context/User-context";

import styles from "./FriendsProfile.module.css";
import { useParams } from "react-router-dom";
import { usePostData } from "../../Context/Post-context";
import { useLoader } from "../../Context/LoaderContext";
import Loader from "../../Components/Loader/Loader";
import { ToastContainer } from "react-toastify";
import PhoneNav from "../../Components/Phone Nav/PhoneNav";
const FriendsProfile = () => {
  const { getProfileById } = useUser();
  const { userId } = useParams();
  const { getPostById } = usePostData();
  const { loader } = useLoader();

  useEffect(() => {
    getProfileById(userId);
    getPostById(userId);
  }, [userId]);

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
          <FreindProfile />
        </div>
        {/* side bar  */}
        <RightSideBar />
      </div>
      <PhoneNav />
    </>
  );
};

export default FriendsProfile;
