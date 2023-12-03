import { MoonLoader } from "react-spinners";

const Loader = () => {
  return (
    <>
      <div className="loader__container">
        <MoonLoader
          color="#000"
          cssOverride={{}}
          loading
          size={80}
          speedMultiplier={0.3}
        />
      </div>
    </>
  );
};

export default Loader;
