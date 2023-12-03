/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import GroupCard from "../../Common/GroudCard/GroupCard";
import SuggestFriendsCard from "../../Common/Suggest Friends/SuggestFriendsCard";
import styles from "./RightSideBar.module.css";
import { useUser } from "../../Context/User-context";
import Loader from "../Loader/Loader";
import { useLoader } from "../../Context/LoaderContext";

// eslint-disable-next-line react/prop-types
const RightSideBar = ({ isShowFriend }) => {
  const { getAllUsers, getFriends, friends, userToFollow, userToBeFollowed } =
    useUser();
  const { loader } = useLoader();

  useEffect(() => {
    getAllUsers();
    getFriends();
    userToFollow();
  }, []);

  return (
    <>
      {loader.loader && <Loader />}
      <div className={styles.right__sidebar__container}>
        {/** group card */}
        <GroupCard />
        {/**suggest card */}
        {isShowFriend && (
          <div className={styles.suggest__card__container}>
            <h3>Your Friends</h3>
            {friends?.map((eachUser) => (
              <SuggestFriendsCard eachUser={eachUser} key={eachUser?._id} />
            ))}
          </div>
        )}
        <div className={styles.suggest__card__container}>
          <h3>suggest Friends</h3>
          {userToBeFollowed?.map((eachUser) => (
            <SuggestFriendsCard
              eachUser={eachUser}
              toBeFolled={"toBeFolled"}
              key={eachUser?._id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RightSideBar;
