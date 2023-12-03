import FeedCard from "../../Common/FeedCard/FeedCard";
import NoPost from "../../Common/No Post Yet/NoPost";
import { useLoader } from "../../Context/LoaderContext";
import { usePostData } from "../../Context/Post-context";
import Loader from "../Loader/Loader";

import styles from "./BookMarkList.module.css";

const BookMarkList = () => {
  const { postData } = usePostData();
  const { loader } = useLoader();
  return (
    <>
      {loader.loader && <Loader />}
      <div className={styles.bookmark__list__container}>
        {postData?.bookmarkedPosts.length > 0 ? (
          postData?.bookmarkedPosts?.map((eachPost) => {
            const DATA = {
              ...eachPost?.post_id,
              userId: eachPost?.user_id,
            };
            const isLiked = eachPost.post_id.likes.includes(
              JSON.parse(localStorage.getItem("user"))._id
            );

            console.log(
              "🚀 ~ file: BookMarkList.jsx:24 ~ postData?.bookmarkedPosts?.map ~ isLiked:",
              isLiked
            );

            const isBookMarked =
              eachPost?.user_id._id ===
              JSON.parse(localStorage.getItem("user"))._id;

            return (
              <FeedCard
                key={eachPost._id}
                isLiked={isLiked ? true : false}
                isBookMarked={isBookMarked ? true : false}
                DATA={DATA}
              />
            );
          })
        ) : (
          <NoPost />
        )}
      </div>
    </>
  );
};

export default BookMarkList;
