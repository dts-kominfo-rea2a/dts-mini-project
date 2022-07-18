// import React, { useEffect, useState } from "react";
// import { accordionSummaryClasses, Box, Typography } from "@mui/material";
// import "./ListNews.css";
// import CardMovie from "../components/CardMovie";
// import axios from "axios";

// const MovieList = () => {
//   const [News, setNews] = useState([]);

//   useEffect(() => {
//     const fetchDataNews = async () => {
//       try {
//         const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=f2026a1ebf4585e85922daa07771d8bc");
//         setNews(response.data.results);
//       } catch (err) {
//         console.log("Error", err);
//       }
//     };
//     fetchDataNews();
//   }, []);

//   return (
//     <Box className="boxy">
//       <Typography variant="h5">Container for ListNews</Typography>
//       {News.map((movie) => {
//         return <CardMovie key={movie.id} propsMovie={movie} />;
//       })}
//     </Box>
//   );
// };

// export default MovieList;
