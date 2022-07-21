import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CardMovie({ data }) {
  let navigate = useNavigate();

  return (
    <div onClick={() => navigate(`detail/${data.id}`)}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={data.backdrop_path ? `https://image.tmdb.org/t/p/w500${data.backdrop_path}` : "https://via.placeholder.com/500x750?text=No+Image"} alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
