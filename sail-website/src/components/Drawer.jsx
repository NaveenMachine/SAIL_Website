import { useState } from 'react';
import { Drawer, IconButton, Typography, Box, List, ListItemButton, ListItemText, Button } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import PropTypes from 'prop-types';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link as RouterLink } from 'react-router-dom';

export default function DrawerComp({ links }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Drawer Component */}
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(9,9,121,1)',
          },
        }}
        anchor="top"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 2,
          }}
        >
          <Typography variant="h6" component="div" sx={{ color: 'white', marginBottom: 2 }}>
            OSU SAIL
          </Typography>
          <List>
            {/* 2. Modify the mapped links */}
            {links.map((link, index) => (
              <ListItemButton
                key={index}
                component={RouterLink}
                to={`/${link.toLowerCase()}`}
                onClick={() => setOpen(false)} // This correctly closes the drawer on click
                sx={{ textDecoration: 'none' }}
              >
                <ListItemText sx={{ color: 'white', textAlign: 'center' }} primary={link} />
              </ListItemButton>
            ))}
            
            {/* 3. Wrap social media icons in <a> tags */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2,
                marginTop: 2,
              }}
            >
              <a href="https://linkedin.com/in/naveen-kamath-434668287" target="_blank" rel="noopener noreferrer">
                <IconButton sx={{ background: 'white' }}>
                  <LinkedInIcon sx={{ color: 'black', '&:hover': { color: 'white' } }} />
                </IconButton>
              </a>
              <a href="https://github.com/NaveenMachine" target="_blank" rel="noopener noreferrer">
                <IconButton sx={{ background: 'white' }}>
                  <GitHubIcon sx={{ color: 'black', '&:hover': { color: 'white' } }} />
                </IconButton>
              </a>
              <a href="https://instagram.com/naveenkamath_/" target="_blank" rel="noopener noreferrer">
                <IconButton sx={{ background: 'white' }}>
                  <InstagramIcon sx={{ color: 'black', '&:hover': { color: 'white' } }} />
                </IconButton>
              </a>
            </Box>

            {/* 4. Modify the Contact button */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: 2,
              }}
            >
              <Button
                component={RouterLink}
                to="/about"
                onClick={() => setOpen(false)} // Also close drawer on click
                sx={{
                  background: 'white',
                  '&:hover': {
                    background: 'rgba(2,0,36,0.8)',
                    color: 'white',
                  },
                  color: 'black',
                  textDecoration: 'none',
                }}
                variant="contained"
              >
                Contact
              </Button>
            </Box>
          </List>
        </Box>
      </Drawer>

      {/* IconButton to Open Drawer */}
      <IconButton
        onClick={() => setOpen(!open)}
        sx={{
          marginLeft: 'auto',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
          },
        }}
      >
        <MenuRoundedIcon />
      </IconButton>
    </>
  );
}

// Define prop types for the NavBar component
DrawerComp.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
};