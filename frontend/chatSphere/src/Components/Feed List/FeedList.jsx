/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import FeedCard from "../../Common/FeedCard/FeedCard";
import styles from "./FeedList.module.css";
import { usePostData } from "../../Context/Post-context";
import NoPost from "../../Common/No Post Yet/NoPost";
const FeedList = () => {
  const { getAllPosts, postData, bookmarkPost, dispatch } = usePostData();

  useEffect(() => {
    getAllPosts();
  }, []);

  const handleAddToBookMark = async (id) => {
    await bookmarkPost(id);
    setTimeout(() => {
      dispatch({
        type: "CHECK_IS_ALREADY_BOOKMARK",
        payload: JSON.parse(localStorage.getItem("user")),
      });
    }, 300);
    getAllPosts();
  };

  return (
    <div className={styles.feed__list__container}>
      {postData?.posts.length > 0 ? (
        postData?.posts?.map((eachPost) => {
          const isLiked = eachPost.likes.includes(
            JSON.parse(localStorage.getItem("user"))._id
          );
          const isBookMarked = eachPost?.bookMarkedBy?.includes(
            JSON.parse(localStorage.getItem("user"))._id
          );
          return (
            <FeedCard
              key={eachPost._id}
              DATA={eachPost}
              isLiked={isLiked ? true : false}
              isBookMarked={isBookMarked ? true : false}
              handleAddToBookMark={handleAddToBookMark}
            />
          );
        })
      ) : (
        <NoPost />
      )}
    </div>
  );
};

export default FeedList;
