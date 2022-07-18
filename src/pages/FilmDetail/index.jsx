import { useParams } from "react-router-dom";
import { Container, Button } from "@mui/material";
import { PlayArrow, Info } from "@mui/icons-material";
import "./FilmDetail.css";

import { ListFilm } from "../../components";

const FilmDetail = () => {
  const { filmId } = useParams();

  return (
    <>
      <Container maxWidth="lg">
        <div className="film_detail">
          <h1>Film Detail {filmId}</h1>
          <div
            className="film_detail__hero"
            style={{
              backgroundImage: 'url("https://placekitten.com/1000/300")',
            }}
          >
            <div className="film_detail__hero__title">
              <h1>Gundala</h1>
            </div>
            <div className="film_detail__hero__desc">
              <p>
                Anak yatim jalanan yang menjadi Gundala sang pahlawan super ini
                memanfaatkan kekuatan petir dan berjuang menjaga kotanya dari
                ketidakadilan dan bos mafia yang penindas.
              </p>
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
          <div className="film_detail__desc">
            <div className="film_detail__desc__title">
              <span>Description</span>
            </div>
            <div className="film_detail__desc__content">
              <p>
                Anak yatim jalanan yang menjadi Gundala sang pahlawan super ini
                memanfaatkan kekuatan petir dan berjuang menjaga kotanya dari
                ketidakadilan dan bos mafia yang penindas.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default FilmDetail;
