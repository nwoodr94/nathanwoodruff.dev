import React from "react";
import {
  AppBar,
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  Container,
  Typography,
  Stack,
} from "@mui/material";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <Container
      sx={{
        textAlign: "center",
        height: "80vh",
        border: "1px solid blue",
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
          <Box>
            Hi, I'm Nathan
            <br />
            <br />
            I'm a software developer based in Idaho Falls{" "}
            <span role="img" aria-label="mountain">
              {String.fromCodePoint(0x1f3de)}
            </span>
          </Box>
          <br />
          <List
            sx={{
              display: "inline",
              alignItems: "center",
              width: "500px",
              maxWidth: "80vw",
            }}
          >
            <Button dense={true}>
              <Link to="/">
                <Typography variant="caption" sx={{ padding: "0.25rem" }}>
                  Home
                </Typography>
              </Link>
            </Button>
            <Button dense={true}>
              <Link to="/about">
                <Typography variant="caption">About</Typography>
              </Link>
            </Button>
            <Button dense={true}>
              <Link to="/work">
                <Typography variant="caption">Work</Typography>
              </Link>
            </Button>
            <Button dense={true}>
              <Link to="/research">
                <Typography variant="caption">Research</Typography>
              </Link>
            </Button>
            <Button dense={true}>
              <Link to="/contact">
                <Typography variant="caption">Contact</Typography>
              </Link>
            </Button>
          </List>
          <Outlet />
        </Stack>
      </Box>
    </Container>
  );
}

export default App;
