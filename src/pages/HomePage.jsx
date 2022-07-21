import React from "react";
import PopularList from "../containers/PopularList";

import { Navigation, Pagination, Scrollbar } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { useGetMoviesQuery } from "../services/movies";
import SliderMovies from "../components/SliderMovies";
import ErrorComponent from "../components/ErrorComponent";

const HomePage = () => {
  const {
    data: latesMovies,
    error,
    isLoading,
  } = useGetMoviesQuery({
    page: 1,
    param: "now_playing",
  });
  return (
    <>
      <div className="flex px-2 py-5 h-96 md:w-full md:h-4/5">
        {error ? (
          <ErrorComponent message={"opps, Somthing wrongs"} />
        ) : isLoading ? (
          <ErrorComponent message={"Movies On Loading"} />
        ) : (
          <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            direction="horizontal"
            slidesPerView={1}
            spaceBetween={5}
            navigation
            scrollbar={{ draggable: true }}

            // onReachEnd={() => {
            //   setPage(page + 1);
            // }}
          >
            {latesMovies?.results.map((movie, i) => (
              <SwiperSlide key={i}>
                <SliderMovies dataMovie={movie}></SliderMovies>
              </SwiperSlide>
            ))}
            ...
          </Swiper>
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
export default HomePage;
