import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StatusCard from "../../Common/Status Card/StatusCard";

import styles from "./Stories.module.css";
import { useUser } from "../../Context/User-context";
import { useLoader } from "../../Context/LoaderContext";
import Loader from "../Loader/Loader";

const Stories = () => {
  const { allUsers } = useUser();
  const user = JSON.parse(localStorage.getItem("user"));
  const { loader } = useLoader();
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <>
      {loader.loader && <Loader />}
      <div className={styles.status__view__container}>
        <Slider {...settings}>
          <StatusCard DATA={user} />
          {allUsers?.map((eachStories) => {
            return <StatusCard key={eachStories._id} DATA={eachStories} />;
          })}
        </Slider>
      </div>
    </>
  );
};

export default Stories;
