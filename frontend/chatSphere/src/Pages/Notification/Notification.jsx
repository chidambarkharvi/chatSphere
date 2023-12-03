import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar";
import RightSideBar from "../../Components/RightSideBar/RightSideBar";

const Notification = () => {
  return (
    <div className="homepage__landing">
      {/* side bar  */}
      <LeftSideBar />
      {/* feed section  */}
      <h1>Notification</h1>
      {/* side bar  */}
      <RightSideBar />
    </div>
  );
}

export default Notification
