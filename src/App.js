// React
import React from "react";

// Hooks
import { useState, useEffect } from "react";

// Material
import {
  AppBar,
  Box,
  Button,
  List,
  Container,
  Typography,
  Stack,
  Toolbar,
  Switch,
} from "@mui/material";

// Router
import { Outlet, Link } from "react-router-dom";

// Themes
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme, darkTheme } from "./Themes/Theme";
import { ThemeProvider } from "@mui/material/styles";

// Styles
import "./App.css";

function App() {
  let [theme, setTheme] = useState(true);
  let [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
  }, []);

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <CssBaseline />
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="h2" sx={{ flexGrow: 1 }}>
              Nathan Woodruff
            </Typography>
            <Switch size="small" onChange={() => setTheme(!theme)} />
          </Toolbar>
        </AppBar>

        <Container
          sx={{
            textAlign: "center",
            height: "80vh",
          }}
        >
          <Box
            sx={{
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Stack>
              <Box sx={{ paddingTop: "10vh" }}>
                <Box className={fade ? "fadeIn" : "transparent"}>
                  <Typography variant="subtitle">Hi, I'm Nathan</Typography>
                </Box>
                <br />
                <br />
                <Typography variant="subtitle2">
                  I'm a software engineer based in Idaho Falls{" "}
                  <span role="img" aria-label="mountain">
                    {String.fromCodePoint(0x1f3de)}
                  </span>
                </Typography>
              </Box>
              <br />
              <List
                sx={{
                  display: "inline",
                  alignItems: "center",
                  width: "500px",
                  maxWidth: "80vw",
                  margin: "0 auto",
                }}
              >
                <Button dense="true" sx={{ padding: 0 }}>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    <Typography variant="caption" sx={{ padding: "0.25rem" }}>
                      Home
                    </Typography>
                  </Link>
                </Button>
                <Button dense="true" sx={{ padding: 0 }}>
                  <Link
                    to="/about"
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    <Typography variant="caption">About</Typography>
                  </Link>
                </Button>
                <Button dense="true" sx={{ padding: 0 }}>
                  <Link
                    to="/work"
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    <Typography variant="caption">Work</Typography>
                  </Link>
                </Button>
                <Button dense="true" sx={{ padding: 0 }}>
                  <Link
                    to="/contact"
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    <Typography variant="caption">Contact</Typography>
                  </Link>
                </Button>
              </List>
              <Container sx={{ padding: "1rem" }}>
                <Outlet />
              </Container>
            </Stack>
          </Box>
        </Container>
        <AppBar
          position="fixed"
          color="primary"
          elevation={0}
          sx={{
            top: "auto",
            bottom: 0,
            padding: "1rem",
          }}
        >
          <Box
            sx={{
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Typography variant="caption" gutterBottom component="h2">
              Developed by Nathan Woodruff
            </Typography>
          </Box>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default App;
