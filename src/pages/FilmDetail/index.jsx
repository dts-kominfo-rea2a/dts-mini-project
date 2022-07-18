import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Button } from "@mui/material";
import { PlayArrow, Info } from "@mui/icons-material";
import axios from "axios";

import "./FilmDetail.css";

const FilmDetail = () => {
  const { filmId } = useParams();
  const [detailFilm, setDetailFilm] = useState({});

  const basePath = process.env.REACT_APP_API_BASE_PATH;
  const apiKey = process.env.REACT_APP_API_KEY;
  const imagePath = process.env.REACT_APP_API_IMAGE_PATH;

  useEffect(() => {
    const fetchData = async () => {
      const detailFilmResult = await axios.get(
        `${basePath}/movie/${filmId}?api_key=${apiKey}`
      );

      setDetailFilm(detailFilmResult.data);
    };

    fetchData();
  }, [basePath, apiKey, filmId]);

  const { backdrop_path, poster_path, title, overview } = detailFilm;

  return (
    <>
      <Container maxWidth="lg">
        <div className="film_detail">
          <div
            className="film_detail__hero"
            style={{
              backgroundImage: `linear-gradient(30deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${imagePath}${backdrop_path}')`,
            }}
          >
            <div className="film_detail__hero__left">
              <div className="film_detail__hero__title">
                <h1>{title}</h1>
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
              <img src={`${imagePath}${poster_path}`} alt={title} />
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
