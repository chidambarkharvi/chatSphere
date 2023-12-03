/* eslint-disable react/no-unescaped-entities */
import styles from "./Form.module.css";
import { MdEmail } from "react-icons/md";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import { loginSchema } from "../../Schemas/Auth.schema";
import { useToaster } from "../../Context/toast";
import { useAuth } from "../../Context/Auth-context";

//intial state for the login form
const INITIAL_VALUES = {
  email: "",
  password: "",
};

const Form = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { errorToast } = useToaster();
  const { loginHandler, guestLoginHandler } = useAuth();
  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: loginSchema,
    onSubmit: (values, action) => {
      loginHandler(values);
      action.resetForm();
    },
  });
  console.log("🚀 ~ file: Form.jsx:27 ~ Form ~ errors:", errors);

  const handleUserLogin = () => {
    if (errors) {
      errorToast(errors?.email);
      errorToast(errors?.password);
    }
  };

  const handleGuestLogin = () => {
    guestLoginHandler();
  };

  return (
    <div className="container">
      <form style={{width:"400px",height:"300px",marginBottom:"50px"}} onSubmit={handleSubmit}>
        <div className={styles.image__container}>
          <img src="/src/assets/logo.png" alt="" />
        </div>
        <h2 className={styles.form__heading}>Welcome Back!</h2>
        <p className={styles.form__details}>
          Enter Your Email And Password Here
        </p>
        <div className={styles.input__feild}>
          <MdEmail className={styles.icons} />
          <input
            className={styles.input__box}
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder="Email"
          />
        </div>
        <div className={styles.input__feild}>
          <FaLock className={styles.icons} />
          <input
            className={styles.input__box}
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            placeholder="Password"
          />
          {!showPassword ? (
            <FaEye
              onClick={() => setShowPassword(true)}
              className={styles.icons}
            />
          ) : (
            <FaEyeSlash
              onClick={() => setShowPassword(false)}
              className={styles.icons}
            />
          )}
        </div>
        <div className={styles.button__container}>
          <button className={styles.btn} onClick={handleUserLogin}>
            Login
          </button>
          <button className={styles.btn} onClick={handleGuestLogin}>
            Guest Login
          </button>
        </div>

        <p>
          Don't have an account?
          <NavLink to={"/signup"}>Sign up here</NavLink>
        </p>
      </form>
    </div>
  );
};

export default Form;
