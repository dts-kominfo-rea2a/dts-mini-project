import React from "react";
import PopularList from "../containers/PopularList";

const HomePage = () => {
  return (
    <>
      <div className=" flex-col w-full px-4 md:px-12 ">
        <PopularList title={"Popular"} />
      </div>
    </>
  );
};
export default HomePage;
