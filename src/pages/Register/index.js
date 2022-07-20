import React from 'react'
import FromLoginRegister from '../../components/FromLoginRegister'
import { Box } from '@mui/material';
import BgImage from '../../assets/img/profilePicture.png'

const Register = () => {
  return (
      <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${BgImage})`,
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >
      <Box sx={{ 
              width: '80%', 
              height: '100%', 
              background: 'linear-gradient(270.09deg, #000000 70%, rgba(255,255,255, 1%) 100%)',
              position: 'absolute', 
              top: '0', 
              right: '0'
            }}
      >  
        <FromLoginRegister title='Register'/>
      </Box>
    </Box>
  )
}

export default Register