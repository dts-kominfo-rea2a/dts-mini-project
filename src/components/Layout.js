import React from 'react'
import Navbar from './Navbar'

import { Box, Container } from '@mui/material'

const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <Container maxWidth="xl">
            <Box sx={{
                width: '100%',
                margin: '2em 2em 0 2em',
                display: 'flex',
            }}>
                {children}
            </Box>
        </Container>
    </div>
  )
}

export default Layout