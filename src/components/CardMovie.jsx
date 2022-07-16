import React from "react";
import Col from "react-bootstrap/Col";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

const urlImage = "https://image.tmdb.org/t/p/w500";

const CardMovie = ({ data }) => {
  return (
    <>
      <Col xs={12} md={3}>
        <Card sx={{ maxWidth: "100%", mb: 1 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              image={`${urlImage}${data.backdrop_path}`}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="body1" component="div">
                {data.title}
              </Typography>
              <Rating
                name="half-rating-read"
                defaultValue={data.vote_average / 2}
                precision={0.1}
                size="small"
                readOnly
              />
              <Typography variant="body2" color="text.secondary">
                {`${data.overview.substr(0, 100)}...`}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <Link to={`/detail-film/${data.id}`}>Film Detail</Link>
            </Button>
          </CardActions>
        </Card>
      </Col>
    </>
  );
};

export default CardMovie;
