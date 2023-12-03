/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { MdEmail } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useFormik } from "formik";
import { signupSchema } from "../../Schemas/Auth.schema";

import styles from "./SingupForm.module.css";
import { useToaster } from "../../Context/toast";
import { useAuth } from "../../Context/Auth-context";

//intial values of formik
const INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  Confirm__Password: "",
};

const SingupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { errorToast } = useToaster();
  const { userSignupHandler } = useAuth();
  const { values, handleBlur, handleSubmit, handleChange, errors } = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: signupSchema,
    onSubmit: (values, action) => {
      userSignupHandler(values);
      console.log(values);
      action.resetForm();
    },
  });

  const handleSignUp = () => {
    console.log("clicked");
    if (errors) {
      errorToast(errors?.firstName);
      errorToast(errors?.lastName);
      errorToast(errors?.email);
      errorToast(errors?.password);
      errorToast(errors?.Confirm__Password);
    }
  };

  console.log("🚀 ~ file: SingupForm.jsx:32 ~ SingupForm ~ errors:", errors);
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className={styles.image__container}>
          <img src="/src/assets/logo.png" alt="" />
        </div>
        <h2 className={styles.form__heading}>Welcome Back!</h2>
        <p className={styles.form__details}>
          Enter Your Email And Password Here
        </p>
        <div className={styles.input__feild}>
          <FaUserAlt className={styles.icons} />
          <input
            className={styles.input__box}
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName}
          />
        </div>
        <div className={styles.input__feild}>
          <FaUserAlt className={styles.icons} />
          <input
            className={styles.input__box}
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
          />
        </div>
        <div className={styles.input__feild}>
          <MdEmail className={styles.icons} />
          <input
            className={styles.input__box}
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
        </div>
        <div className={styles.input__feild}>
          <FaLock className={styles.icons} />
          <input
            className={styles.input__box}
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
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
        <div className={styles.input__feild}>
          <FaLock className={styles.icons} />
          <input
            className={styles.input__box}
            type={showPassword ? "text" : "password"}
            name="Confirm__Password"
            id="Confirm__Password"
            placeholder="Confirm Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Confirm__Password}
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
          <button onClick={handleSignUp} className={styles.btn}>
            Sign up
          </button>
        </div>

        <p>
          Already have an account?
          <NavLink to={"/login"}> Sign in here</NavLink>
        </p>
      </form>
    </div>
  );
};

export default SingupForm;
