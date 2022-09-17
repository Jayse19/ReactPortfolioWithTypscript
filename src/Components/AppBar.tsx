import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme, Toolbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom'
import styled from '@emotion/styled';


const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    }
    const pages = [
        { text: 'Home', href: '/' },
        { text: 'About me', href: '/AboutMe' },
        { text: 'My Projects', href: '/Projects' },
        { text: 'Contact Me', href: '/Contact' },
        { text: 'Todo List', href: '/Todo' }
    ]
    
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#1976d2'
            }
        }
    })
    const LinkStyle = styled(Link)`
    color: White;
    text-decoration: none;
    margin: 1rem;
    position: relative;
    `;


    return (
        <ThemeProvider theme={darkTheme}>
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
                                display: {xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.2rem',
                                color: 'white',
                                textDecoration: 'none',
                            }}
                        >
                            Portfolio
                        </Typography>

                        <Box sx={{ flexGrow: .1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color = 'success'
                            >
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                    color: 'white'
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page.text} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page.text}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Box sx={{ flexGrow: .5, display: { md: 'flex' } }}>
                            {pages.map((page) => (
                                <LinkStyle
                                    to={page.href}
                                    key={page.text}
                                >
                                    {page.text}
                                </LinkStyle>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
};
export default ResponsiveAppBar;
