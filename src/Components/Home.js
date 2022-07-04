import React from "react";
import { Box, Container, Typography } from "@mui/material";

function Home() {
  return (
    <Container sx={{ width: "500px", maxWidth: "80vw", textAlign: "left" }}>
      <Typography variant="subtitle">Welcome to my website</Typography>
      <br />
      <br />
      <Typography variant="caption" component="p">
        I built this website to share what I'm all about. This site is developed
        in Vue, and after running a few scripts, it lives here in my AWS bucket.
        Neat! Thanks for visiting.
      </Typography>
    </Container>
  );
}

export default Home;
