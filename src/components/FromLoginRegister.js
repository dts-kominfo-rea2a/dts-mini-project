import React from 'react'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const FromLoginRegister = ({title}) => {
  return (
    <Box sx={{
        width: '100%',
        padding: '2em',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
        <Card sx={{ minWidth: '30em' }}>
          <form>
            <CardContent>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1em',
              }}>
                <Typography variant="h5" align='center' sx={{fontWeight:'bold'}}>{title}</Typography>
                <TextField id="standard-basic" label="Email" variant="standard" />
                <TextField id="standard-basic" label="Password" variant="standard" type="password" />
              </Box>
            </CardContent>
            <CardActions>
              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%'
              }}>
                <Button variant="contained">{title}</Button>
              </Box>
            </CardActions>
          </form>
        </Card>
    </Box>
  )
}

export default FromLoginRegister