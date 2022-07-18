import React from "react";
import { Box} from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../authentication/Firebase";
import VideoPreview from "./MoviePreview";

const Home = () => {

  const [user] = useAuthState(auth);
  return (
    <>
      <Box style={{minHeight:'50em', display:'flex', justifyContent:'center', marginTop:'10em'}}>
        {/* <VideoPreview /> */}
      {user ? (<VideoPreview />) : ("")}

      </Box>
    </>
  );
};

export default Home;
