import { Route, Routes } from "react-router-dom";
import Login from "./Pages/LoginPages/Login";
import Navbar from "./Components/Header-navbar/Navbar";
import Singup from "./Pages/SingupPages/Singup";
import Landing from "./Pages/LandingPage/Landing";
import RequireAuth from "./RequireAuth/RequireAuth";
import Explore from "./Pages/Explore/Explore";
import Notification from "./Pages/Notification/Notification";
import Bookmark from "./Pages/Bookmark/Bookmark";
import ProfilePage from "./Pages/Profile Page/ProfilePage";
import Setting from "./Pages/Setting/Setting";
import FreindProfile from "./Pages/FriendsProfile/FriendsProfile";
import Loader from "./Components/Loader/Loader";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Singup />} />
        <Route path="/check" element={<Loader />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Landing />
            </RequireAuth>
          }
        />
        <Route
          path="/explore"
          element={
            <RequireAuth>
              <Explore />
            </RequireAuth>
          }
        />
        <Route
          path="/notification"
          element={
            <RequireAuth>
              <Notification />
            </RequireAuth>
          }
        />
        <Route
          path="/bookmark"
          element={
            <RequireAuth>
              <Bookmark />
            </RequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          }
        />
        <Route
          path="/profile/:userId"
          element={
            <RequireAuth>
              <FreindProfile />
            </RequireAuth>
          }
        />
        <Route
          path="/setting"
          element={
            <RequireAuth>
              <Setting />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
}

export default App;
