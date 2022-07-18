import { Container } from "@mui/material";
import { ListFilm } from "../../components";

import "./Home.css";

const Home = () => {
  return (
    <>
      <Container maxWidth="lg">
        <h1>Homepage</h1>
        <div className="home__list_film">
          <ListFilm title="Popular" />
          <ListFilm title="Continue Watching" />
          <ListFilm title="On The Agenda" />
          <ListFilm title="Original" />
        </div>
      </Container>
    </>
  );
};

export default Home;
