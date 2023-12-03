import FeedList from "../Feed List/FeedList";
import FeedUpload from "../FeedUpload/FeedUpload";
import Header from "../Header/Header";
import Stories from "../Stories Card/Stories";
import styles from "./Feed.module.css";
const Feed = () => {
  return (
    <div className={styles.feed__container}>
      <div className={styles.feed__upload__container}>
        <Header />
        <Stories />
        <FeedUpload />
      </div>
      <FeedList />
    </div>
  );
};

export default Feed;
