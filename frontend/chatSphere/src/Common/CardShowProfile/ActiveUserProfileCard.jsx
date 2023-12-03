import { Link } from "react-router-dom";
import styles from "./ActiveUserProfileCard.module.css";

const ActiveUserProfileCard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Link to="/profile">
      <div className={styles.profile__card__container}>
        <div className={styles.image__container}>
          <img src={user?.avatar} alt={user?.user?.firstName} />
        </div>
        <div className={styles.user__name__container}>
          <h3>
            {user?.firstName} {user?.lastName}
          </h3>
        </div>
        <div className={styles.icons__container}>➡️</div>
      </div>
    </Link>
  );
};

export default ActiveUserProfileCard;
