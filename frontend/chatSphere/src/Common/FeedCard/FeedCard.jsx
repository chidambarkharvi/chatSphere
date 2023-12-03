/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import styles from "./FeedCard.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiTwotoneLike, AiFillDelete, AiFillEdit } from "react-icons/ai";
import { GiTireIronCross } from "react-icons/gi";
import { RiSendPlane2Fill } from "react-icons/ri";
import { BsBookmarkFill } from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { usePostData } from "../../Context/Post-context";
import EditPost from "../EditPost/EditPost";
import Loader from "../../Components/Loader/Loader";
import { useLoader } from "../../Context/LoaderContext";

const FeedCard = ({ DATA, handleAddToBookMark, isLiked, isBookMarked }) => {
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [comment, setComment] = useState("");
  const { loader } = useLoader();
  const userId = localStorage.getItem("user");
  const parsedUserId = JSON.parse(userId);
  const {
    deletePost,
    getAllPosts,
    likePost,
    createComment,
    deleteComment,
    removePostFromBookmark,
    disLikePost,
  } = usePostData();

  const handleDeletePost = async () => {
    setShowDelete(false);
    await deletePost(DATA._id);
    getAllPosts();
  };

  const handleCloseEdit = () => {
    setShowEdit(false);
  };

  const handleLikePost = (id) => {
    console.log("btn");
    likePost(id);
  };

  const handleDisLikePost = (id) => {
    disLikePost(id);
  };

  const handleCreateComment = (e, id, comment) => {
    e.preventDefault();
    setShowComment(true);
    createComment(id, comment);
    setComment("");
  };

  const handleDeleteComment = (postId, commentId) => {
    deleteComment(postId, commentId);
    setShowComment(true);
  };

  const handleRemoveBookMark = () => {
    removePostFromBookmark(DATA._id);
  };

  return (
    <>
      {loader?.loader && <Loader />}
      <div className={styles.card__container}>
        <div className={styles.user__name}>
          <div className={styles.user__details}>
            <img src={DATA?.userId?.avatar} alt="" />
            <p>{DATA?.userId?.firstName}</p>
          </div>
          <div className={styles.function__icon__container}>
            {parsedUserId?._id === DATA?.userId?._id && (
              <AiFillDelete
                style={{
                  display: showDelete ? "block" : "none",
                  transition: "all 1s ease-in-out",
                }}
                onClick={handleDeletePost}
                className={styles.delete__icon}
              />
            )}
            {parsedUserId?._id === DATA?.userId?._id && (
              <AiFillEdit
                style={{
                  display: showDelete ? "block" : "none",
                  transition: "all 1s ease-in-out",
                }}
                className={styles.edit__icon}
                onClick={() => setShowEdit(true)}
              />
            )}
            {showDelete && (
              <BsBookmarkFill
                style={{
                  fill: isBookMarked ? "black" : "#ccc",
                }}
                onClick={
                  isBookMarked
                    ? () => handleRemoveBookMark(DATA._id)
                    : () => handleAddToBookMark(DATA._id)
                }
                className={styles.icons}
              />
            )}
            {!showDelete ? (
              <GiHamburgerMenu
                onClick={() => setShowDelete(true)}
                className={styles.icons}
              />
            ) : (
              <GiTireIronCross
                onClick={() => setShowDelete(false)}
                className={styles.icons}
              />
            )}
          </div>
        </div>
        {DATA.content && (
          <div className={styles.post__details}>
            <p>{DATA?.content}</p>
          </div>
        )}
        {DATA?.img && (
          <div className={styles.post__container}>
            <img src={DATA?.img} alt={DATA?.userId?.firstName} loading="lazy" />
          </div>
        )}
        <div className={styles.like__comment__count__container}>
          <div className={styles.likes__count}> {DATA.likes.length} Likes</div>
          <div className={styles.comment__count}>
            {DATA?.comments?.length} Comment
          </div>
        </div>
        <div className={styles.like__commnet__container}>
          {
            <button
              onClick={() =>
                isLiked ? handleDisLikePost(DATA._id) : handleLikePost(DATA._id)
              }
              style={{ color: isLiked ? "blue" : "black" }}
            >
              <AiTwotoneLike style={{ color: isLiked ? "blue" : "black" }} />
              {isLiked ? "Liked" : "Like"}
            </button>
          }
          <button onClick={() => setShowComment((prev) => !prev)}>
            <BiComment style={{ color: showComment ? "blueviolet" : "#000" }} />
            Comment
          </button>
        </div>

        {DATA?.comments?.length > 0 && showComment && (
          <div className="comments__list__contaier">
            {DATA?.comments?.map((comment) => {
              return (
                <div key={comment?.commentId}>
                  <div className={styles.comment__container}>
                    <div className={styles.commnets}>
                      <div className={styles.profile__avatar}>
                        <img src={comment?.commentedBy?.avatar} alt="" />
                      </div>
                      <div className={styles.comment__details}>
                        <h2>
                          {comment?.commentedBy?.firstName}{" "}
                          {comment?.commentedBy?.lastName}
                        </h2>
                        <p>{comment?.comment}</p>
                      </div>
                    </div>
                    <div className={styles.icons__container}>
                      <BsFillSuitHeartFill className={styles.like__icons} />
                      <MdDelete
                        className={styles.delete__icons}
                        onClick={() =>
                          handleDeleteComment(DATA._id, comment?.commentId)
                        }
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className={styles.create__commnet__container}>
          <div className={styles.profile__avatar}>
            <img src={parsedUserId.avatar} alt="" />
          </div>
          <div className={styles.create__comment__container}>
            <form
              action="#"
              onSubmit={(e) => handleCreateComment(e, DATA._id, comment)}
            >
              <input
                type="text"
                placeholder="Write a comment..."
                name="commennt"
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </form>
          </div>
          <RiSendPlane2Fill
            className={styles.send__icon}
            onClick={(e) => handleCreateComment(e, DATA._id, comment)}
          />
        </div>
      </div>
      {showEdit && <EditPost edit={DATA} handleCloseEdit={handleCloseEdit} />}
    </>
  );
};

export default FeedCard;
