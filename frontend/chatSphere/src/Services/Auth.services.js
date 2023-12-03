import axios from "../Utils/apiUtils";

//signup services

const signupServices = async ({ firstName, lastName, email, password }) =>
  await axios.post("signup", {
    firstName,
    lastName,
    email,
    password,
  });

//login services

const loginServices = async ({ email, password }) =>
  await axios.post("login", {
    email: email,
    password: password,
  });

//get all users

const getAllUsersServices = async () =>
  await axios.get("getalluser", {
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
    },
  });

export { signupServices, loginServices, getAllUsersServices };
