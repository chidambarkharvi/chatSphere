import * as yup from "yup";

const signupSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "First Name must be of 2 char!")
    .max(20, "First Name must be less then 10 char")
    .required("First name is required"),
  lastName: yup
    .string()
    .min(2, "Last Name must be of 2 char!")
    .max(10, "Last Name must be less then of 10 char")
    .required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  Confirm__Password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export { signupSchema, loginSchema };
