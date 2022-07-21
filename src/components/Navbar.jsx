import { Box, Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { useState } from 'react';
import LogoImage from '../assets/image/logo-app.svg'
import IconMenuBar from '../assets/icon/icon-menu.svg'
import { Link } from 'react-router-dom';

const LogoApp = () => {
    return <img src={LogoImage} alt='logo-app' />
}

const IconMenu = () => {
    return <img src={IconMenuBar} alt='menu' />
}

const drawerWidth = 280;
const navItems = [
    { text: 'Home', href: '/home' },
    { text: 'Series', href: '/series' },
    { text: 'Movies', href: '/movies' },
    { text: 'New and Popular', href: '/new-and-popular' },
    { text: 'My List', href: '/my-list' },
];


const Navbar = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', }}>
            <LogoApp />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.href} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center', }}>
                            <Link to={item.href} style={{ textDecoration: 'none', color: '#fff' }}>
                                <ListItemText primary={item.text} />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
                <AppBar component="nav" elevation={0}>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }} >
                        <LogoApp />
                        <Divider />
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item) => (
                                <Button key={item.href} sx={{ textTransform: 'capitalize', color: 'text.primary' }}>
                                    <Link to={item.href} style={{ textDecoration: 'none', color: '#fff' }}>
                                        <ListItemText primary={item.text}>
                                        </ListItemText>
                                    </Link>
                                </Button>
                            ))}
                        </Box>
                        <Divider />
                        <div style={{ display: 'flex', }}>
                            <Button
                                color="inherit"
                                aria-label="open drawer"
                                edge="end"

                                onClick={handleDrawerToggle}
                                sx={{ ml: 2, display: { sm: 'none', }, justifyContent: 'end' }}
                            >
                                <IconMenu />
                            </Button>
                        </div>
                    </Toolbar>
                </AppBar>
                <Box component="nav" sx={{}}>
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        anchor='right'
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, paddingY: '16px' , bgcolor: 'primary', },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
        </>
    )
}

export default Navbar;