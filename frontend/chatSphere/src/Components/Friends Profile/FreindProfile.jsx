import { FiEdit2 } from "react-icons/fi";
import { FcGallery } from "react-icons/fc";
import { RiUserFollowLine } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";

import styles from "./friendsProfile.module.css";
import { useUser } from "../../Context/User-context";
import FeedCard from "../../Common/FeedCard/FeedCard";
import { usePostData } from "../../Context/Post-context";
import { useLoader } from "../../Context/LoaderContext";
import Loader from "../Loader/Loader";
import NoPost from "../../Common/No Post Yet/NoPost";
const FreindProfile = () => {
  const { profile } = useUser();
  const { loader } = useLoader();
  const { postData } = usePostData();
  return (
    <>
      {loader.loader && <Loader />}
      <div className={styles.profile__container}>
        <div className={styles.cover__image}>
          <img src={profile?.cover} alt="cover" />
        </div>
        <div className={styles.profile__details}>
          <div className={styles.user__image}>
            <img src={profile?.avatar} alt="user" />
          </div>
        </div>
        <div className={styles.flex__container}>
          <div className={styles.user__name}>
            <h2>
              {profile?.firstName} {profile?.lastName}
              {profile?.isActivated ? "🟢" : "🔴"}
            </h2>
            <h3>{profile?.email}</h3>
            <div className={styles.bio__container}>
              <p>{profile?.bio}</p>
              <FiEdit2 className={styles.icon} />
            </div>
          </div>
        </div>
        <div className={styles.flex__container}>
          <div className={styles.social__container}>
            <FcGallery className={styles.icon} />
            <button>Posts</button>
          </div>
          <div className={styles.social__container}>
            <RiUserFollowLine className={styles.icon} />
            <button>Followings ({profile?.following.length})</button>
          </div>
          <div className={styles.social__container}>
            <FaUserFriends className={styles.icon} />
            <button>Followers ({profile?.followers.length})</button>
          </div>
        </div>
        {postData?.postBySpecificUser.length > 0 ? (
          postData?.postBySpecificUser?.map((eachPost) => {
            const isLiked = eachPost.likes.includes(
              JSON.parse(localStorage.getItem("user"))._id
            );
            return (
              <div className={styles.feed__list__container} key={eachPost._id}>
                <FeedCard DATA={eachPost} isLiked={isLiked ? true : false} />
              </div>
            );
          })
        ) : (
          <NoPost />
        )}
      </div>
    </>
  );
};

export default FreindProfile;
