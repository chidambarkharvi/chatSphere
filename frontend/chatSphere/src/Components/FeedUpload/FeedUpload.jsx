import styles from "./FeedUpload.module.css";
import { RiSendPlane2Fill } from "react-icons/ri";
import { GrGallery } from "react-icons/gr";
import { useRef, useState } from "react";
import { usePostData } from "../../Context/Post-context";
import { useLoader } from "../../Context/LoaderContext";
// import Picker from "emoji-picker-react";

const FeedUpload = () => {
  const { showLoader, hideLoader } = useLoader();
  // const [showEmojiPicker, setShowEmojiPicker] = useState(false);
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
    showLoader();
    await createNewPost(userFeed);
    setTimeout(() => {
      getAllPosts();
    }, 1000);
    setUserFeed({
      content: "",
      image: "",
    });
    hideLoader();
  };

  // const onEmojiClick = (e, emojiObject) => {
  //   setUserFeed((prev) => ({
  //     ...prev,
  //     content: prev.content + emojiObject.emoji,
  //   }));
  // };

  return (
    <>
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
            </div>
          </div>
          <div
            className={styles.send__button}
            onClick={(e) => handleCreatePost(e)}
          >
            <RiSendPlane2Fill className={styles.icons} />
          </div>
        </form>
      </div>
      <div className={styles.emoji__container}>
        {/* {showEmojiPicker && <Picker onEmojiClick={onEmojiClick} />} */}
      </div>
    </>
  );
};

export default FeedUpload;
