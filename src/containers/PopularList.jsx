import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar } from "swiper";
import ErrorComponent from "../components/ErrorComponent";

import MovieTile from "../components/MovieTile";
import { useGetMoviesQuery } from "../services/movies";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./slider.css";

const PopularList = ({ title, param }) => {
  const [page, setPage] = useState(1);
  const [listMovie, setListMovie] = useState([]);
  const { data, error, isLoading } = useGetMoviesQuery({ page, param });

  useEffect(() => {
    if (data) {
      setListMovie([...listMovie, ...data.results]);
    }
  }, [data]);
  return (
    <>
      <section id={param}>
        <p className="text-white font-semibold pb-4">{title}</p>
        <div
          id={title}
          className="flex w-full h-44  pb-4 overflow-x-auto overflow-y-visible"
        >
          {error ? (
            <ErrorComponent message={"Sorry something wrongs"} />
          ) : isLoading ? (
            <ErrorComponent message={"Movies On Loading"} />
          ) : (
            <>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar]}
                direction="horizontal"
                slidesPerView={"auto"}
                spaceBetween={2}
                navigation
                scrollbar={{ draggable: true }}
                onReachEnd={(event) => {
                  if (event.activeIndex !== 0) {
                    let newPage = page + 1;
                    setPage(newPage);
                  }
                }}
              >
                {listMovie?.map((movie, i) => (
                  <SwiperSlide key={i}>
                    <MovieTile key={i} dataMovie={movie}></MovieTile>
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          )}
        </div>
      </section>
    </>
  );
};
export default PopularList;
