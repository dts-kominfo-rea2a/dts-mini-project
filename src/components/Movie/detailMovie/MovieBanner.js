/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Api from "../../../api";
var baseImgUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face';
const MovieBanner = () => {
  const { id } = useParams();
  const [backdrop, setBackdrop] = useState('');
  const [title, setTitle] = useState('');
  const [overview, setOverview] = useState('');
  useEffect(() => {
    getDetailMovie();
  }, [id]);

  const getDetailMovie = () => {
    Api.get(`movie/${id}?api_key=8152b136a5dad36d2ca7844f884577ba&language=en-US`)
    .then(function (response) {
      // handle success
      setBackdrop(response.data.poster_path)
      setTitle(response.data.original_title);
      setOverview(response.data.overview);
      console.log(response.data.overview);
  })
  .catch(function (error) {
    console.log(error);
      // handle error
  }) 
  }
    return (
      <div className="flex flex-col w-full h-auto gap-y-8">
        <div className="relative flex w-full h-[810px] bg-slate-200">
          <img
            // src={`${baseImgUrl}${backdrop}`}
            alt=""
            className="w-full h-auto aspect-video object-cover"
          />
          <div className="absolute flex w-full h-full top-0 left-0 items-center px-4 md:px-24 bg-black opacity-50">
            <div className="flex flex-col gap-y-2">
              <p className="text-4xl font-semibold ">
                {/* {title} */}
              </p>
              <p>-</p>
              <p className="line-clamp-3 max-w-[50%]">
                {/* {overview} */}
              </p>
              {/* buttons */}
              <div className="inline-flex gap-x-4">
                <Link>
                  <button className="inline-flex gap-x-3 w-auto h-auto px-4 py-2 items-center bg-slate-300 hover:bg-white text-black font-semibold text-2xl transition-all duration-200">
                    <svg
                      width="20"
                      height="22"
                      viewBox="0 0 20 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 0.333328L20 11L0 21.6667V0.333328Z"
                        fill="#141414"
                      />
                    </svg>
                    Play
                  </button>
                </Link>
                <button className="inline-flex gap-x-3 w-auto h-auto px-4 py-2 items-center bg-slate-500 hover:bg-slate-400 opacity-80 text-2xl transition-all duration-100">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.3333 14C27.3333 21.364 21.364 27.3333 14 27.3333C6.63599 27.3333 0.666656 21.364 0.666656 14C0.666656 6.636 6.63599 0.666664 14 0.666664C21.364 0.666664 27.3333 6.636 27.3333 14ZM24.6667 14C24.6667 11.171 23.5429 8.45791 21.5425 6.45753C19.5421 4.45714 16.829 3.33333 14 3.33333C11.171 3.33333 8.45791 4.45714 6.45752 6.45753C4.45713 8.45791 3.33332 11.171 3.33332 14C3.33332 16.829 4.45713 19.5421 6.45752 21.5425C8.45791 23.5429 11.171 24.6667 14 24.6667C16.829 24.6667 19.5421 23.5429 21.5425 21.5425C23.5429 19.5421 24.6667 16.829 24.6667 14ZM12.6667 22V12.6667H15.3333V22H12.6667ZM14 10.3333C13.7824 10.3355 13.5667 10.2936 13.3657 10.2102C13.1648 10.1268 12.9828 10.0036 12.8307 9.848C12.67 9.69661 12.5428 9.51332 12.4572 9.30988C12.3715 9.10645 12.3293 8.88736 12.3333 8.66666C12.3333 8.20266 12.4973 7.808 12.8293 7.48533C13.1587 7.16266 13.5493 7 14 7C14.4493 7 14.84 7.16266 15.1693 7.48533C15.5 7.808 15.6667 8.20266 15.6667 8.66666C15.6667 9.13066 15.5013 9.52533 15.1693 9.848C15.0172 10.0036 14.8352 10.1268 14.6343 10.2102C14.4333 10.2936 14.2176 10.3355 14 10.3333Z"
                      fill="white"
                    />
                  </svg>
                  More information
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto px-11">
          <p className="mt-3 mb-1">Description :</p>
          {/* <p>{overview}</p> */}
        </div>
      </div>
      );
};

export default MovieBanner;
