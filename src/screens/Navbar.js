import React, { useState } from 'react';
import { CssBaseline, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, AppBar, Typography, Box, Button, } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import LayersIcon from '@mui/icons-material/Layers';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';
import Logo from '../assets/images/logo.jpeg';
import '../css/Navbar.css';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import FlashlightOffIcon from '@mui/icons-material/FlashlightOff';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import HomeIcon from '@mui/icons-material/Home';



export default function DashboardLayout() {
  const navigate = useNavigate();
  const themeMode = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerWidth = 240;

  const handleDrawer = () => {
    setDrawerOpen((prev) => !prev)
  }

  const handleGitHub = () => {
    window.open('https://github.com/jabarajrajapandi', '_blank');
  };

  const handleHome = () => {
    window.location.href = '/Home'
  };

  const handleContact = () => {
    navigate('/contact'); // Use navigate for contact page
  };

  const handleSkills = () => {
    navigate('/skills'); // Use navigate for contact page
  };





  const NAV_ITEMS = [
    {
      title: 'Home',
      icon: <HomeIcon />,
      onClick: handleHome,
    },
    {
      title: 'GitHub',
      icon: <GitHubIcon />,
      onClick: handleGitHub,
    },
    {
      title: 'skills',
      icon: <CodeIcon />,
      onClick: handleSkills,
    },
    {
      title: 'Contact',
      icon: <PermContactCalendarIcon />,
      onClick: handleContact,
    },
    // { title: 'Integrations', icon: <LayersIcon />, path: '/integrations' },
  ];



  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Button variant='containe' className='drowerIcon' onClick={handleDrawer}>
              {drawerOpen ?
                <AlignHorizontalLeftIcon />
                :
                <MenuOpenIcon />
              }


            </Button>




            <img src={Logo} alt="" className="logoImage" />
            <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} className="LogoName">
              Jabaraj R
            </Typography>
            <button
              onClick={() => dispatch(toggleTheme())}
              style={{
                background: 'none',
                border: 'none',
                color: 'inherit',
                fontSize: '1rem',
                cursor: 'pointer',
              }}
            >
              {themeMode === 'light' ? (
                <div className="bulbBGOff">
                  <FlashlightOffIcon style={{ fontSize: '24px', color: '#000' }} />
                </div>
              ) : (
                <div className="bulbBGOn">
                  <LightbulbIcon style={{ fontSize: '24px', color: '#fcb713' }} />
                </div>
              )}
            </button>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          sx={{
            width: drawerOpen ? drawerWidth : 60,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerOpen ? drawerWidth : 60,
              transition: 'width 0.3s',
              boxSizing: 'border-box',
            },
          }}
        >
          <Toolbar />
          <List>
            {NAV_ITEMS.map((item, index) => (
              <React.Fragment key={index}>
                <ListItem
                  button
                  onClick={item.onClick || (() => {
                    if (item.path) {
                      window.location.href = item.path;
                    }
                  })}
                >

                  <ListItemIcon
                    sx={{
                      transition: 'transform 0.3s ease',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'scale(1.2)',
                      },
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>


                  {drawerOpen && (
                    <ListItemText
                      className="hover-scale"
                      primary={item.title}
                      sx={{
                        transition: 'transform 0.3s ease',
                        cursor: 'pointer',
                        '&:hover': {
                          transform: 'scale(1.2)',
                        },
                      }}
                    />
                  )}

                </ListItem>
              </React.Fragment>
            ))}
          </List>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}
