import React from "react";
import { GooeyCircleLoader } from "react-loaders-kit";

const Loader = () => {
  const loaderProps = {
    loading: true,
    size: 275,
    duration: 2,
    colors: ["#99fffe", "#f42e00", "#042549"],
  };

  return (
    <div className="loader">
      <GooeyCircleLoader {...loaderProps} />
      Loading...
    </div>
  );
};

export default Loader;
