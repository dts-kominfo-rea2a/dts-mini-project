import { Box, Button, Container, Grid, TextField } from '@mui/material';
import React from 'react'

import ilustration from '../../assets/image/ProfilePicture.png'

const LoginPage = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row'
    }}>
      <Box sx={{ display: { xs: 'none', sm: 'block'}, width: '100%',height: '100vh'}}>
      <img src={ilustration} width={'100%'}  style={{ height: '100vh' }} alt="ilustration-login" />
      </Box>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ width: '100%' }}
      >
        <Box background='' sx={{ display: 'flex', flexDirection: 'column', gap: '12px', backgroundColor: 'linear-gradient(to right bottom, #430089, #82ffa1)' }}>
        <TextField
          type="email"
          placeholder="EMAIL"
          variant="outlined"
          size="large"
          sx={{"::placeholder": { color: 'grey'} }}
          />
          {/* onChange={textFieldEmailOnChangeHandler} */}
          {/* value={credential.email} */}

        <TextField
          type="Password"
          variant="outlined"
          placeholder='PASSWORD'
          size="large"
          sx={{width: '400px', borderColor: 'white', outline: 'none', "::placeholder": { color: 'white'}}}  />
          {/* onChange={textFieldPasswordOnChangeHandler} */}
          {/* value={credential.password} */}

        <Button
          variant="contained"
          color='primary'
          size="large"
          >
            Login
          {/* onClick={buttonLoginOrRegisterOnClickHandler} */}
        </Button>
          {/* {loginOrRegister === "login" ? "Login" : "Register Account"} */}
        </Box>
      </Grid>
    </Box>
  )
}

export default LoginPage;