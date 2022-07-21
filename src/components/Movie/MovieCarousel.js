import React, {useEffect, useState} from "react";
import Carousel from "better-react-carousel";
import Api from "../../api";
import { Link } from "react-router-dom";
var baseImgUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face';
function MovieCarousel(){
    const [dataMovie, setDataMovie] = useState([]);
    useEffect(() => {
        getData();
    }, []);
    const getData = () => {
        Api.get('movie/popular?api_key=8152b136a5dad36d2ca7844f884577ba&language=en-US&page=1').then(function (response) {
            // handle success
            setDataMovie(response.data.results)
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    };
    return (
        <Carousel
        scrollSnap={true}
        cols={1}
        rows={1}
        gap={10}
        loop={true}
        autoplay={5000}
        containerClassName="flex w-full md:h-[420px] px-3"
        arrowLeft={
          <div className="absolute flex flex-col items-center px-1 justify-center z-[104] cursor-pointer h-full left-0 rounded-l-sm bg-slate-800 bg-opacity-50">
            <svg
              className="rotate-180"
              width="20"
              height="34"
              viewBox="0 0 20 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.41423 0L0.641113 1.76728L15.8243 17L0.641113 32.2327L2.41423 34L19.3589 17L2.41423 0Z"
                fill="white"
              />
            </svg>
          </div>
        }
        arrowRight={
          <div className="absolute flex flex-col items-center px-1 justify-center z-[104] cursor-pointer h-full right-0 rounded-r-sm bg-slate-800 bg-opacity-30">
            <svg
              width="20"
              height="34"
              viewBox="0 0 20 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.41423 0L0.641113 1.76728L15.8243 17L0.641113 32.2327L2.41423 34L19.3589 17L2.41423 0Z"
                fill="white"
              />
            </svg>
          </div>
        }
      >
        {/* loop here */}
        {dataMovie.slice(0, 10).map((data) => (
          <Carousel.Item key={data.id}>
            <div className="relative w-full h-auto">
              {/* image */}
              <div className="relative inline-flex w-full">
                <div className="absolute w-full h-full bg-gradient-to-r from-[#040B16] via-slate-900" />
                <div className="flex w-1/2 min-h-full" />
                <img
                  src={`${baseImgUrl}${data.poster_path}`}
                  alt=""
                  className="w-1/2 h-auto rounded-l-3xl object-cover right-0"
                />
              </div>
              {/* content */}
              <div className="absolute flex flex-col gap-y-3 w-1/2 top-16 left-8">
                <p className="text-xl font-semibold">{data.title}</p>
                <div className="inline-flex gap-x-2 text-sm">
                  {data.genre_ids}
                </div>
                <p className="line-clamp-3 text-base">{data.overview}</p>
                <div className="flex max-w-fit h-auto">
                  <Link to={`/project-movies/home/detail/${data.id}`}>
                    <p className="inline-flex w-auto justify-center h-auto px-4 py-1 border-2 border-white gap-x-3 items-center">
                      <svg
                        width="20"
                        height="22"
                        viewBox="0 0 20 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 0.333328L20 11L0 21.6667V0.333328Z"
                          fill="white"
                        />
                      </svg>

                      <p className="text-xl">Watch Now</p>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    );
};
export default MovieCarousel;