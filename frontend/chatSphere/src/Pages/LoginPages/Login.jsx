import { ToastContainer } from "react-toastify";
import Form from "../../Common/Form/Form";
import styles from "./Login.module.css";
import { useLoader } from "../../Context/LoaderContext";
import Loader from "../../Components/Loader/Loader";
const Login = () => {
  const { loader } = useLoader();
  return (
    <>
      {loader.loader && <Loader />}
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className={styles.login__container}>
        {/* <div className={styles.grid__container}> */}
          {/* <div className={styles.about__section}>
            <div className={styles.about__grid__container}>
              <div className={styles.about__brand}>
                <h1>chatSphere</h1>
                <p>
                  Social media is not just an activity; it is an investment of
                  valuable time and resources. Surround yourself with people who
                  not just support you but inform your thinking
                </p>
                <button className={styles.btn}>Read More</button>
              </div>
              <div className={styles.image}>
                <img src="/src/assets/login-vector-3.png" alt="" />
              </div>
            </div>
          </div> */}
          <div className={styles.login__card}>
            <Form />
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default Login;
