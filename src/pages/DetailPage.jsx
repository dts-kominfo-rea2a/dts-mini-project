import React from "react";
import DetailMovie from "../components/DetailMovie";
import PopularList from "../containers/PopularList";

const DetailPage = (event) => {
  return (
    <>
      <div className="md:py-4">
        <DetailMovie></DetailMovie>
      </div>
      <div className="flex-col w-full px-4 md:px-12 ">
        <PopularList title={"Popular"} />
        <PopularList title={"On The Agenda"} />
        <PopularList title={"Top Movies"} />
        <PopularList title={"Popular"} />
      </div>
    </>
  );
};
export default DetailPage;
