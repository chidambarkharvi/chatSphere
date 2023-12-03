import { ToastContainer } from "react-toastify";
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar";
import Loader from "../../Components/Loader/Loader";
import RightSideBar from "../../Components/RightSideBar/RightSideBar";
import { useLoader } from "../../Context/LoaderContext";
import HomePage from "../HomePage/HomePage";
import PhoneNav from "../../Components/Phone Nav/PhoneNav";
import PhoneFeedUpload from "../../Common/Phone feed Upload/PhoneFeedUpload";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const [showPhoneFeedUpload, setShowPhoneFeedUpload] = useState(false);
  const navigate = useNavigate();

  const handleShowPhoneFeedUpload = () => {
    navigate("/");
    setShowPhoneFeedUpload(true);
  };

  const handleHidePhoneFeedUpload = () => {
    setShowPhoneFeedUpload(false);
  };

  const { loader } = useLoader();
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
      <div className="homepage__landing">
        {/* side bar  */}
        <LeftSideBar />
        {/* feed section  */}
        <HomePage />
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

export default Landing;
