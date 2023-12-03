import FeedList from "../../Components/Feed List/FeedList";
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar";
import RightSideBar from "../../Components/RightSideBar/RightSideBar";
import Sort from "../../Common/Sort/Sort";
import Header from "../../Components/Header/Header";
import { useLoader } from "../../Context/LoaderContext";
import Loader from "../../Components/Loader/Loader";
import { ToastContainer } from "react-toastify";
import PhoneNav from "../../Components/Phone Nav/PhoneNav";
import { useState } from "react";
import PhoneFeedUpload from "../../Common/Phone feed Upload/PhoneFeedUpload";

import styles from "./Explore.module.css";
const Explore = () => {
  const { loader } = useLoader();
  const [showPhoneFeedUpload, setShowPhoneFeedUpload] = useState(false);

  const handleShowPhoneFeedUpload = () => {
    setShowPhoneFeedUpload(true);
  };

  const handleHidePhoneFeedUpload = () => {
    setShowPhoneFeedUpload(false);
  };

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
      <div className={styles.explore__container}>
        {/* side bar  */}
        <LeftSideBar />
        {/* feed section  */}
        <div className={styles.feed__container}>
          <Header />
          <Sort />
          <FeedList />
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

export default Explore;
