import styles from "./GroupCard.module.css";

const GroupCard = () => {
  return (
    <div className={styles.group__card__container}>
      <div className={styles.group__heading}>
        <h3>Suggested Groups</h3>
      </div>
      <div className={styles.image__container}>
        <img src="/src/assets/p-1.jpg" />
      </div>
      <div className={styles.group__name}>
        <h4> Neog Coder Community </h4>
      </div>
    </div>
  );
};

export default GroupCard;
