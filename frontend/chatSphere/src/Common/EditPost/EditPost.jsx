/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { GiTireIronCross } from "react-icons/gi";
import styles from "./EditPost.module.css";
import { usePostData } from "../../Context/Post-context";
import { useLoader } from "../../Context/LoaderContext";
import Loader from "../../Components/Loader/Loader";

const EditPost = ({ edit, handleCloseEdit }) => {
  const [editPost, setEditPost] = useState({
    content: edit?.content,
    img: edit?.img,
  });
  const { loader } = useLoader();
  const editPhoto = useRef();

  const { editPostfun } = usePostData();

  const handleClickToAddImage = () => {
    editPhoto.current.click();
  };
  const handleChangePostImage = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = function () {
      setEditPost({
        ...editPost,
        img: reader.result,
      });
    };
  };

  const handleEditPostOnSubmit = (e, postId, data) => {
    e.preventDefault();
    editPostfun(postId, data);
    handleCloseEdit();
  };

  return (
    <>
      {loader?.loader && <Loader />}
      <div
        className={styles.model__wrapper}
        onClick={() => handleCloseEdit()}
      ></div>
      <div className={styles.model__container}>
        <div className={styles.model__header}>
          <h1>Edit Your Post</h1>
          <GiTireIronCross
            className={styles.close__icon}
            onClick={() => handleCloseEdit()}
          />
        </div>
        <form
          action="#"
          className={styles.form__container}
          onSubmit={(e) => handleEditPostOnSubmit(e, edit._id, editPost)}
        >
          <div className={styles.edit__imgae__container}>
            <img
              src={editPost?.img}
              alt={edit?.userId?.firstName}
              onClick={handleClickToAddImage}
            />
            <label htmlFor="image">
              Want to change your imgae click on the image to upload new image
            </label>
            <input
              type="file"
              name="image"
              id="image"
              ref={editPhoto}
              style={{ display: "none" }}
              onChange={(e) => handleChangePostImage(e)}
            />
          </div>
          <div className={styles.content__container}>
            <label htmlFor="content">Content</label>
            <textarea
              name="content"
              id=""
              cols="30"
              rows="10"
              value={editPost?.content}
              placeholder="Write your post here..."
              onChange={(e) =>
                setEditPost({ ...editPost, content: e.target.value })
              }
            ></textarea>
            <button>Confirm Edit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditPost;
