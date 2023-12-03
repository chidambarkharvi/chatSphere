/* eslint-disable react/prop-types */
import styles from "./StatusCard.module.css";
const StatusCard = ({ DATA }) => {
  const handleDataTest = () => {
    console.log("🚀 ~ file: StatusCard.jsx:6 ~ handleDataTest ~ DATA", DATA);
  };

  return (
    <div className={styles.card}>
      <img src={DATA?.avatar} alt={DATA?.firstName} onClick={handleDataTest} />
    </div>
  );
};

export default StatusCard;
