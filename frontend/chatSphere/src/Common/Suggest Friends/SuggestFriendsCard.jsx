/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./SuggestFriendsCard.module.css";
import { useUser } from "../../Context/User-context";

const SuggestFriendsCard = ({ eachUser, toBeFolled }) => {
  const { followUser, unFlollowUser } = useUser();

  const handleFollowUser = (e, userId) => {
    e.stopPropagation();
    followUser(userId);
  };

  const handleUnFollowUser = (e, userId) => {
    e.stopPropagation();
    unFlollowUser(userId);
  };

  return (
    <Link to={`/profile/${eachUser._id}`}>
      <div className={styles.profile__card__container}>
        <div className={styles.image__container}>
          <img src={eachUser?.avatar} alt={eachUser?.firstName} />
        </div>
        <div className={styles.user__name__container}>
          <h3>{eachUser?.firstName}</h3>
        </div>
        <div
          onClick={(e) =>
            toBeFolled
              ? handleFollowUser(e, eachUser._id)
              : handleUnFollowUser(e, eachUser._id)
          }
          className={styles.icons__container}
        >
          {toBeFolled ? "➕" : "➖"}
        </div>
      </div>
    </Link>
  );
};

export default SuggestFriendsCard;
