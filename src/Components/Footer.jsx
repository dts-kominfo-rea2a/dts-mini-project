import React from "react";

import { Box, Toolbar, Typography } from "@mui/material";

const Footer = () => {

  return (
    <Box style={{height:'1em'}}>
        <Toolbar style={{backgroundColor: '#575757',display:'flex', justifyContent:'center',}}>
          <Typography component="div" style={{color:'white'}}>
            Footer
          </Typography>
          </Toolbar>
    </Box>
  );
};

export default Footer;