import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./ListFilm.css";

const ListFilm = ({ title }) => {
  return (
    <>
      <div className="list_film">
        <div className="list_film__title">
          <span>{title}</span>
        </div>
        <div className="list_film__list">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={100}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            style={{
              "--swiper-pagination-color": "#fff",
              "--swiper-pagination-bullet-inactive-color": "#aeaeae",
              "--swiper-pagination-bullet-inactive-opacity": "1",
            }}
          >
            <SwiperSlide>
              <Link to="/detail-film/1">
                <img src="https://placekitten.com/300/200" alt="movie 1" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/detail-film/3">
                <img src="https://placekitten.com/300/200" alt="movie 1" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/detail-film/3">
                <img src="https://placekitten.com/300/200" alt="movie 1" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/detail-film/4">
                <img src="https://placekitten.com/300/200" alt="movie 1" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/detail-film/5">
                <img src="https://placekitten.com/300/200" alt="movie 1" />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ListFilm;
