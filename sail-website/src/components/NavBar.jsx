import {
    AppBar,
    Toolbar,
    Typography,
    Tabs,
    Tab,
    Box,
    Button,
    IconButton,
    useTheme,
    useMediaQuery,
  } from "@mui/material";
  import LinkedInIcon from "@mui/icons-material/LinkedIn";
  import GitHubIcon from "@mui/icons-material/GitHub";
  import InstagramIcon from "@mui/icons-material/Instagram";
  import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";
  import { useState, useEffect } from "react";
  import DrawerComp from "./Drawer";
  import PropTypes from "prop-types";
  
  export default function NavBar({ links }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [value, setValue] = useState(0);
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 80);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <AppBar
        position="fixed"
        elevation={scrolled ? 6 : 0}
        sx={{
          transition: "all 0.35s ease",
          backgroundColor: scrolled ? "rgba(2,0,36,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          paddingY: scrolled ? "4px" : "14px",
          width: "100%",
          maxWidth: "100vw",
          overflow: "hidden",
          zIndex: 1000,
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            maxWidth: "100vw",
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
            px: { xs: 1, sm: 2, md: 3 },
          }}
        >
          {isMobile ? (
            <Box sx={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "space-between",
              width: "100%",
              minWidth: 0,
            }}>
              <Typography
                component={RouterLink}
                to="/"
                sx={{
                  cursor: "pointer",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "1.4rem",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  textDecoration: "none",
                }}
              >
                OSU SAIL
              </Typography>
              <DrawerComp links={links} />
            </Box>
          ) : (
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: { xs: 1, sm: 2, md: 3 },
                minWidth: 0, // Allow shrinking
                overflow: "hidden",
              }}
            >
              {/* LEFT */}
              <Typography
                component={RouterLink}
                to="/"
                sx={{
                  cursor: "pointer",
                  color: "white",
                  fontWeight: 700,
                  fontSize: scrolled ? "1.15rem" : "1.5rem",
                  whiteSpace: "nowrap",
                  textDecoration: "none",
                }}
              >
                OSU SAIL
              </Typography>
  
              {/* CENTER */}
              <Box sx={{ 
                flexGrow: 1, 
                display: "flex", 
                justifyContent: "center",
                minWidth: 0, // Allow shrinking
                overflow: "hidden",
              }}>
                <Tabs
                  value={value}
                  onChange={(e, val) => setValue(val)}
                  textColor="inherit"
                  TabIndicatorProps={{ style: { background: "#C8102E" } }}
                  variant="scrollable"
                  scrollButtons="auto"
                  allowScrollButtonsMobile
                  sx={{
                    maxWidth: "100%",
                    "& .MuiTabs-scrollButtons": {
                      color: "white",
                    },
                    "& .MuiTabs-scrollButtons.Mui-disabled": {
                      opacity: 0.3,
                    },
                  }}
                >
                  {links.map((link, i) => (
                    <Tab
                      key={i}
                      label={link}
                      component={RouterLink}
                      to={`/${link.toLowerCase()}`}
                      sx={{
                        fontSize: scrolled ? "0.85rem" : "1rem",
                        fontWeight: 500,
                        minWidth: "auto",
                        px: { xs: 1, sm: 1.5, md: 2 },
                        whiteSpace: "nowrap",
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    />
                  ))}
                </Tabs>
              </Box>
  
              {/* RIGHT */}
              <Box sx={{ 
                display: "flex", 
                alignItems: "center", 
                flexShrink: 0, 
                gap: { xs: "8px", sm: "12px" },
                minWidth: "fit-content",
              }}>
                <IconButton href="https://www.linkedin.com" target="_blank" sx={{ color: "white" }}>
                  <LinkedInIcon />
                </IconButton>
                <IconButton href="https://github.com" target="_blank" sx={{ color: "white" }}>
                  <GitHubIcon />
                </IconButton>
                <IconButton href="https://instagram.com" target="_blank" sx={{ color: "white" }}>
                  <InstagramIcon />
                </IconButton>
  
                {/* --- CONTACT BUTTON REMOVED --- */}
                
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    );
  }
  
  NavBar.propTypes = {
    links: PropTypes.arrayOf(PropTypes.string).isRequired,
  };