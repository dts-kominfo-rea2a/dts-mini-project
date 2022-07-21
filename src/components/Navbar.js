import React from 'react'
import {
    AppBar, 
    Container, 
    Toolbar, 
    Typography,
    Box,
    Button,
    Avatar
  } from '@mui/material';
import { signOutApp } from '../auth/firebase';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    const logoutHandler = async () => {
        await signOutApp();
        navigate("/login");
    }


    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        display: { md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                    >
                    LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex' }, justifyContent:'flex-end' }}>
                    <Avatar sx={{ bgcolor: 'green', marginRight:'1em' }}>N</Avatar>
                    <Button color="inherit" onClick={logoutHandler}>
                         Logout                        
                    </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
  )
}

export default Navbar