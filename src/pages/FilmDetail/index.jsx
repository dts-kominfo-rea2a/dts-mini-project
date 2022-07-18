import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Button } from "@mui/material";
import { PlayArrow, Info } from "@mui/icons-material";
import axios from "axios";

import "./FilmDetail.css";

const FilmDetail = ({ tv }) => {
  const { filmId } = useParams();
  const [detailFilm, setDetailFilm] = useState({});

  const basePath = process.env.REACT_APP_API_BASE_PATH;
  const apiKey = process.env.REACT_APP_API_KEY;
  const imagePath = process.env.REACT_APP_API_IMAGE_PATH;

  useEffect(() => {
    const fetchData = async () => {
      const detailFilmResult = await axios.get(
        `${basePath}/${tv ? "tv" : "movie"}/${filmId}?api_key=${apiKey}`
      );

      setDetailFilm(detailFilmResult.data);
    };

    fetchData();
  }, [basePath, apiKey, filmId, tv]);

  const { backdrop_path, poster_path, title, original_name, overview } = detailFilm;

  const posterImage = poster_path
    ? `${imagePath}${poster_path}`
    : "https://placekitten.com/300/400";
    
  const bannerImage = backdrop_path
    ? `${imagePath}${backdrop_path}`
    : posterImage;

  return (
    <>
      <Container maxWidth="lg">
        <div className="film_detail">
          <div
            className="film_detail__hero"
            style={{
              backgroundImage: `linear-gradient(30deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${bannerImage}')`,
            }}
          >
            <div className="film_detail__hero__left">
              <div className="film_detail__hero__title">
                <h1>{title ?? original_name}</h1>
              </div>
              <div className="film_detail__hero__desc">
                <p>{overview}</p>
              </div>
              <div className="film_detail__hero__action">
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#fff", color: "#141414" }}
                  startIcon={<PlayArrow />}
                >
                  Play
                </Button>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    color: "#fff",
                  }}
                  startIcon={<Info />}
                >
                  More Information
                </Button>
              </div>
            </div>
            <div className="film_detail__hero__right">
              <img src={posterImage} alt={title} />
            </div>
          </div>
          <div className="film_detail__desc">
            <div className="film_detail__desc__title">
              <span>Description</span>
            </div>
            <div className="film_detail__desc__content">
              <p>{overview}</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default FilmDetail;
