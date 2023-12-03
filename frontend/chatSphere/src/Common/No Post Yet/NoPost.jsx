import { FiCamera } from "react-icons/fi";

import styles from "./NoPost.module.css";

const NoPost = () => {
  return (
    <div className={styles.no__post__container}>
      <div className={styles.no__post__svg}>
        <FiCamera className={styles.cam__icon} />
      </div>
      <h2 className={styles.noPost__text}>No Post Yet</h2>
    </div>
  );
};

export default NoPost;
