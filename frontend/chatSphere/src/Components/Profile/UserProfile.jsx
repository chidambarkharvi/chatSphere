import { FiEdit2 } from "react-icons/fi";
import { FcGallery } from "react-icons/fc";
import { RiUserFollowLine } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";

import styles from "./UserProfile.module.css";
import { useUser } from "../../Context/User-context";
import EditProfile from "../../Common/EditProfile/EditProfile";
import { useState } from "react";
import { usePostData } from "../../Context/Post-context";
import FeedCard from "../../Common/FeedCard/FeedCard";
import { useLoader } from "../../Context/LoaderContext";
import Loader from "../Loader/Loader";
import NoPost from "../../Common/No Post Yet/NoPost";
// import FeedCard from "../../Common/FeedCard/FeedCard";

const UserProfile = () => {
  const [showEditProfile, setShowEditProfile] = useState(false);
  const { user } = useUser();
  const { loader } = useLoader();
  const { postData } = usePostData();

  const closeEditProfile = () => setShowEditProfile(false);

  return (
    <>
      {loader.loader && <Loader />}
      <div className={styles.profile__container}>
        <div className={styles.cover__image}>
          <img src={user?.cover} alt="cover" />
        </div>
        <div className={styles.profile__details}>
          <div className={styles.user__image}>
            <img src={user?.avatar} alt="user" />
          </div>
        </div>
        <div className={styles.profile__flex__container}>
          <div className={styles.user__name}>
            <h2>
              {user?.firstName} {user?.lastName}
              {user?.isActivated ? "🟢" : "🔴"}
            </h2>
            <h3>{user?.email}</h3>
            <div className={styles.bio__container}>
              <p>{user?.bio}</p>
              <FiEdit2 className={styles.icon} />
            </div>
          </div>
          <div className={styles.profile__details}>
            <div className={styles.edit__profile}>
              <FiEdit2 className={styles.icon} />
              <button onClick={() => setShowEditProfile(true)}>
                Edit Profile
              </button>
            </div>
          </div>
        </div>
        <div className={styles.followers__flex__container}>
          <div className={styles.social__container}>
            <FcGallery className={styles.icon} />
            <button>Posts</button>
          </div>
          <div className={styles.social__container}>
            <RiUserFollowLine className={styles.icon} />
            <button>Followings ({user?.following?.length})</button>
          </div>
          <div className={styles.social__container}>
            <FaUserFriends className={styles.icon} />
            <button>Followers ({user?.followers?.length})</button>
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
        {showEditProfile && <EditProfile closeEditProfile={closeEditProfile} />}
      </div>
    </>
  );
};

export default UserProfile;
