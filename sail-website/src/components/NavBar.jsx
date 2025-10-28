import {
    AppBar,
    Toolbar,
    Typography,
    useTheme,
    useMediaQuery,
    Tabs,
    Tab,
    Box,
    Button,
    IconButton,
  } from '@mui/material';
  import InstagramIcon from '@mui/icons-material/Instagram';
  import GitHubIcon from '@mui/icons-material/GitHub';
  import LinkedInIcon from '@mui/icons-material/LinkedIn';
  import { useState, useEffect } from 'react';
  import DrawerComp from './Drawer';
  import PropTypes from 'prop-types';
  import { Link } from 'react-scroll';
  
  export default function NavBar({ links }) {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    const [value, setValue] = useState();
    const [scrolled, setScrolled] = useState(false);
  
    // ✅ Detect scroll position
    useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 80);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <AppBar
        position="fixed"
        elevation={scrolled ? 6 : 0}
        sx={{
          transition: 'all 0.35s ease',
          backgroundImage: scrolled
            ? 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'
            : 'none',
          backgroundColor: scrolled ? 'rgba(2, 0, 36, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(6px)' : 'none',
          paddingY: scrolled ? '4px' : '14px', // ✅ shrinks height
        }}
      >
        <Toolbar
          sx={{
            transition: 'all 0.35s ease',
          }}
        >
          {isMatch ? (
            <>
              {/* Mobile Header Logo */}
              <Typography
                component={Link}
                to="home"
                smooth={true}
                duration={500}
                sx={{
                  flexGrow: 1,
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: scrolled ? '1.1rem' : '1.4rem',
                  transition: 'font-size 0.35s ease',
                  color: 'white',
                }}
              >
                OSU SAIL
              </Typography>
  
              <DrawerComp links={links} />
            </>
          ) : (
            <>
              {/* Desktop Logo */}
              <Typography
                component={Link}
                to="home"
                smooth={true}
                duration={500}
                sx={{
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: scrolled ? '1.2rem' : '1.6rem', // ✅ Shrinks logo text
                  transition: 'font-size 0.35s ease',
                  color: 'white',
                }}
              >
                OSU SAIL
              </Typography>
  
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Tabs
                  sx={{ marginLeft: 5 }}
                  indicatorColor="secondary"
                  textColor="inherit"
                  value={value}
                  onChange={(e, val) => setValue(val)}
                >
                  {links.map((link, index) => (
                    <Tab
                      key={index}
                      label={link}
                      component={Link}
                      to={link.toLowerCase()}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      sx={{
                        fontSize: scrolled ? '0.85rem' : '1rem', // ✅ Shrinks nav text
                        transition: 'font-size 0.35s ease',
                      }}
                    />
                  ))}
                </Tabs>
  
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <IconButton
                    sx={{ background: 'rgba(2,0,36,1)' }}
                    component="a"
                    href="https://www.linkedin.com/in/naveen-kamath-434668287/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon sx={{ color: 'white' }} />
                  </IconButton>
  
                  <IconButton
                    sx={{ background: 'rgba(2,0,36,1)' }}
                    component="a"
                    href="https://www.github.com/NaveenMachine"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon sx={{ color: 'white' }} />
                  </IconButton>
  
                  <IconButton
                    sx={{ background: 'rgba(2,0,36,1)' }}
                    component="a"
                    href="https://www.instagram.com/naveenkamath_/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon sx={{ color: 'white' }} />
                  </IconButton>
  
                  <Button
                    sx={{ marginLeft: 5, background: 'rgba(2,0,36,1)' }}
                    variant="contained"
                    component={Link}
                    to="contact"
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Contact
                  </Button>
                </Box>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    );
  }
  
  NavBar.propTypes = {
    links: PropTypes.arrayOf(PropTypes.string).isRequired,
  };
  