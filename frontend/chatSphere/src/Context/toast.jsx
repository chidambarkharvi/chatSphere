/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { toast } from "react-toastify";

const ToastContext = createContext(null);

const ToastProvider = ({ children }) => {
  const successToast = (Message) =>
    toast.success(Message, {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const errorToast = (Message) =>
    toast.error(Message, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const warrningToast = (Message) =>
    toast.warn(Message, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  return (
    <ToastContext.Provider value={{ successToast, errorToast, warrningToast }}>
      {children}
    </ToastContext.Provider>
  );
};

const useToaster = () => useContext(ToastContext);

export { useToaster, ToastProvider };
