/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar";
import RightSideBar from "../../Components/RightSideBar/RightSideBar";
import { usePostData } from "../../Context/Post-context";

import styles from "./Bookmark.module.css";
import BookMarkList from "../../Components/BookmarkList/BookMarkList";
import { useLoader } from "../../Context/LoaderContext";
import Loader from "../../Components/Loader/Loader";
import { ToastContainer } from "react-toastify";
import PhoneNav from "../../Components/Phone Nav/PhoneNav";
import PhoneFeedUpload from "../../Common/Phone feed Upload/PhoneFeedUpload";

const Bookmark = () => {
  const { getBookmarkedPost } = usePostData();
  const { loader } = useLoader();
  const [showPhoneFeedUpload, setShowPhoneFeedUpload] = useState(false);

  const handleShowPhoneFeedUpload = () => {
    setShowPhoneFeedUpload(true);
  };

  const handleHidePhoneFeedUpload = () => {
    setShowPhoneFeedUpload(false);
  };
  useEffect(() => {
    getBookmarkedPost();
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
      <div className={styles.bookmark__page__container}>
        {/* side bar  */}
        <LeftSideBar />
        {/* feed section  */}
        <div className={styles.bookmark__feed__container}>
          <BookMarkList />
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

export default Bookmark;
