/* eslint-disable react-refresh/only-export-components */
// /* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const LoaderContext = createContext(null);

// eslint-disable-next-line react/prop-types
const LoaderProvider = ({ children }) => {
  const [loader, setLoader] = useState({
    loader: false,
    loaderText: "",
  });

  const showLoader = (LoaderMsg) => {
    setLoader({
      ...loader,
      loader: true,
      loaderText: LoaderMsg,
    });
  };

  const hideLoader = () => {
    setLoader({
      ...loader,
      loader: false,
      loaderText: "",
    });
  };

  return (
    <LoaderContext.Provider value={{ showLoader, hideLoader, loader }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);

export default LoaderProvider;
