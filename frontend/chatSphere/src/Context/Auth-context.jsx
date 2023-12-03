/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { useToaster } from "./toast";
import { loginServices, signupServices } from "../Services/Auth.services";
import { useNavigate } from "react-router-dom";
import { useLoader } from "./LoaderContext";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { showLoader, hideLoader } = useLoader();
  const navigate = useNavigate();
  const { successToast, errorToast } = useToaster();

  //userSignupHandler

  const userSignupHandler = async (userData) => {
    try {
      showLoader("signing up...");
      const res = await signupServices(userData);
      if (res.status === 201) {
        successToast(res.data.message);
        hideLoader();
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }
    } catch (err) {
      if (err) {
        hideLoader();
        errorToast(err.response.data.message);
      }
    }
  };

  //loginHandler

  const loginHandler = async (userData) => {
    try {
      showLoader("logging in...");
      const res = await loginServices(userData);
      if (res.status === 200) {
        localStorage.setItem("token", res.data?.data?.token);
        localStorage.setItem("user", JSON.stringify(res.data?.data?.user));

        successToast(res.data.message);

        setTimeout(() => {
          navigate(location.state?.from ? location.state.from : "/");
        }, 500);
        hideLoader();
      }
    } catch (err) {
      if (err) {
        hideLoader();
        errorToast(err.response.data.message);
      }
    }
  };

  //LOGIN WITH GUEST LOGIN

  const guestLoginHandler = async () => {
    const userData = {
      email: "nikhilranjankumar@gmail.com",
      password: "123456789",
    };

    try {
      showLoader("logging in you as guest...");
      const res = await loginServices(userData);
      if (res.status === 200) {
        localStorage.setItem("token", res.data?.data?.token);
        localStorage.setItem("user", JSON.stringify(res.data?.data?.user));

        successToast(res.data.message);
        setTimeout(() => {
          navigate(location.state?.from ? location.state.from : "/");
        }, 500);
        navigate(location.state?.from ? location.state.from : "/");
        hideLoader();
      }
    } catch (err) {
      if (err) {
        hideLoader();
        errorToast("Something went wrong! Please try again later! ");
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{ userSignupHandler, loginHandler, guestLoginHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
