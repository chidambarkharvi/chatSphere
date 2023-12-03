/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { RiSendPlane2Fill } from "react-icons/ri";
import { GrGallery } from "react-icons/gr";
import { AiOutlineAudio } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { BiSmile } from "react-icons/bi";
import { GiTireIronCross } from "react-icons/gi";

import { useRef, useState } from "react";
import { usePostData } from "../../Context/Post-context";

import styles from "./PhoneFeedUpload.module.css";

const PhoneFeedUpload = ({ handleHidePhoneFeedUpload }) => {
  const [userFeed, setUserFeed] = useState({
    content: "",
    image: "",
  });

  const uploadImageRef = useRef();

  const { createNewPost, getAllPosts } = usePostData();
  const user = JSON.parse(localStorage.getItem("user"));

  //create post on onClick

  //add image on click
  const handleAppPostImage = () => {
    console.log("clicked");
    uploadImageRef.current.click();
  };

  const handleAddPostImage = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = function () {
      setUserFeed({
        ...userFeed,
        image: reader.result,
      });
    };
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    await createNewPost(userFeed);
    setTimeout(() => {
      getAllPosts();
    }, 1000);
    setUserFeed({
      content: "",
      image: "",
    });
  };
  return (
    <>
      <div
        onClick={() => handleHidePhoneFeedUpload()}
        className={styles.model__overlay}
      ></div>
      <div className={styles.model__container}>
        <div className={styles.edit__profile__header}>
          <h2>What's on Your, Mind</h2>
          <GiTireIronCross
            className={styles.close__icons}
            onClick={() => handleHidePhoneFeedUpload()}
          />
        </div>
        <div className={styles.flex__container}>
          <form
            action=""
            className={styles.form__container}
            onSubmit={(e) => handleCreatePost(e)}
          >
            <div className={styles.input__container}>
              <div className={styles.avatar__image__container}>
                <img src={user?.avatar} alt={user?.avatar} />
              </div>
              <input
                type="text"
                name="userFeed"
                id="userFeed"
                placeholder={`What's on your, Mind ${user?.firstName}?`}
                value={userFeed?.content}
                onChange={(e) =>
                  setUserFeed({ ...userFeed, content: e.target.value })
                }
              />
              <div className={styles.icon__container}>
                <GrGallery
                  className={styles.icons}
                  onClick={handleAppPostImage}
                />
                <input
                  type="file"
                  ref={uploadImageRef}
                  id="post__image"
                  name="post__image"
                  style={{ display: "none" }}
                  onChange={(e) => handleAddPostImage(e)}
                />
                <AiOutlineAudio className={styles.icons} />
                <BsFillCameraVideoFill className={styles.icons} />
                <BiSmile className={styles.icons} />
              </div>
            </div>
            <div
              className={styles.send__button}
              onClick={(e) => handleCreatePost(e)}
            >
              <RiSendPlane2Fill className={styles.Post__icons} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PhoneFeedUpload;
