import Sort from "../../Common/Sort/Sort";
import FeedList from "../../Components/Feed List/FeedList";
import FeedUpload from "../../Components/FeedUpload/FeedUpload";
import Loader from "../../Components/Loader/Loader";
import Stories from "../../Components/Stories Card/Stories";
import { useLoader } from "../../Context/LoaderContext";

import styles from "./HomePage.module.css";

const HomePage = () => {
  const { loader } = useLoader();
  return (
    <>
      {loader.loader && <Loader />}

      <div className={styles.feed__container}>
        <div className={styles.feed__upload__container}>
          <Stories />
          <FeedUpload />
        </div>
        <Sort />
        <FeedList />
      </div>
    </>
  );
};

export default HomePage;
