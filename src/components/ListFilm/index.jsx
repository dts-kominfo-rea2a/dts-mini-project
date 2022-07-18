import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./ListFilm.css";

const ListFilm = ({ title, movies, tv }) => {
  const imagePath = "https://image.tmdb.org/t/p/w500/";

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
            {movies.map((movie) => {
              const { backdrop_path, poster_path, id, title } = movie;

              return (
                <SwiperSlide>
                  <Link
                    to={`/detail-${tv ? "tv" : "film"}/${id}`}
                    state={{ movie }}
                  >
                    <img
                      src={`${imagePath}${tv ? poster_path : backdrop_path}`}
                      alt={title}
                      style={{ width: 300, borderRadius: 5 }}
                    />
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ListFilm;
