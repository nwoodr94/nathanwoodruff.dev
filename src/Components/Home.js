import React from "react";
import { Box, Container, Typography } from "@mui/material";

function Home() {
  return (
    <Container
      sx={{
        width: "500px",
        height: "25vh",
        maxWidth: "80vw",
        textAlign: "left",
      }}
    >
      <Typography variant="subtitle" component="h3">
        Welcome to my website
      </Typography>
      <br />
      <Typography variant="caption" component="p">
        I built this website to share what I'm all about. This site is developed
        in React, and after running a few scripts, it lives here in my AWS
        bucket. Neat!
        <br />
        Thanks for visiting.
      </Typography>
    </Container>
  );
}

export default Home;
