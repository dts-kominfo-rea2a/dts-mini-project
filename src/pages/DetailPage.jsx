import React from "react";
import DetailMovie from "../components/DetailMovie";
import PopularList from "../containers/PopularList";
import ErrorComponent from "../components/ErrorComponent";

import { useParams } from "react-router-dom";

import { useGetDetailQuery } from "../services/movies";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const DetailPage = (event) => {
  let params = useParams();
  const { data, error, isLoading } = useGetDetailQuery(params.id);

  return (
    <>
      <div className="flex py-5 h-96 md:w-full md:h-4/5">
        {error ? (
          <ErrorComponent message={"opps, movies cant load"} />
        ) : isLoading ? (
          <ErrorComponent message={"Movies On Loading"} />
        ) : (
          <DetailMovie movie={data} />
        )}
      </div>
      <div className="flex-col w-full px-4 md:px-12 ">
        <PopularList title={"Popular"} param={"popular"} />
        <PopularList title={"Top Rated"} param={"top_rated"} />
        <PopularList title={"Up Comming"} param={"upcoming"} />
      </div>
    </>
  );
};
export default DetailPage;
