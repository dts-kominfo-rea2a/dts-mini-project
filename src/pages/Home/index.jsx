import { Box } from '@mui/material';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../../authentication/firebase';

const HomeIndex = () => {
  const [user] = useAuthState(auth)
  return (
    <Box>
      {
        user ? (
          <div>
            <div>Email : {user.email}</div>
            <div>uid : {user.uid}</div>
          </div>
        ) : (
          ""
        )
      }
    </Box>
  )
}

export default HomeIndex;