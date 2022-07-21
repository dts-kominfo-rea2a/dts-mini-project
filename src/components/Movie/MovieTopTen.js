import React, {useEffect, useState} from "react";
import Carousel from "better-react-carousel";
import Api from "../../api";
import Number1 from "../../assets/rankNumber/Rank - 01.svg";
import Number2 from "../../assets/rankNumber/Rank - 02.svg";
import Number3 from "../../assets/rankNumber/Rank - 03.svg";
import Number4 from "../../assets/rankNumber/Rank - 04.svg";
import Number5 from "../../assets/rankNumber/Rank - 05.svg";
import Number6 from "../../assets/rankNumber/Rank - 06.svg";
import Number7 from "../../assets/rankNumber/Rank - 07.svg";
import Number8 from "../../assets/rankNumber/Rank - 08.svg";
import Number9 from "../../assets/rankNumber/Rank - 09.svg";
import Number10 from "../../assets/rankNumber/Rank - 10.svg";

var baseImgUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

function MovieTop(){
    const [dataMovieTop, setDataMovieTop] = useState([]);
    useEffect(() => {
        getData();
    }, []);
    const getData = () => {
        Api.get('movie/popular?api_key=8152b136a5dad36d2ca7844f884577ba&language=en-US&page=1').then(function (response) {
            // handle success
            setDataMovieTop(response.data.results)
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    };
    return (
        <div className="flex flex-col gap-y-3">
        <p className="font-medium text-2xl px-8">Top 10 Movies</p>
        {/* list */}

        <Carousel
          scrollSnap={true}
          cols={5}
          rows={1}
          gap={5}
          containerClassName="flex w-full h-[205px] px-3"
          arrowLeft={
            <div className="absolute flex flex-col items-center px-1 justify-center z-[104] cursor-pointer h-full left-8 rounded-l-sm bg-slate-800 bg-opacity-80">
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
            <div className="absolute flex flex-col items-center px-1 justify-center z-[104] cursor-pointer h-full right-8 rounded-r-sm bg-slate-800 bg-opacity-30">
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
          {dataMovieTop.map((item, index) => {
            return(
            <Carousel.Item>
                <div className="inline-flex w-full justify-between">
                <img src={index ===  0 ? Number1 : index ===  1 ? Number2 : index ===  2 ? Number3 : index ===  3 ? Number4 : index ===  4 ? Number5 : index ===  5 ? Number6 : index ===  6 ? Number7 : index ===  7 ? Number8 : index ===  8 ? Number9 : Number10 } alt="" className="w-[100px]" />
                <img
                    src={`${baseImgUrl}${item.poster_path}`}
                    alt=""
                    className="w-[145px] h-[205px] object-cover"
                />
                </div>
            </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    );
};
export default MovieTop;