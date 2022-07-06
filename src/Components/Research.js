import { Container, Typography } from "@mui/material";
import React from "react";

function Research() {
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
        <b>Research</b>
      </Typography>
      <br />
      <Typography variant="caption" component="p">
        My research is supported in part through my position at the Idaho
        National Laboratory. My most recent research is focused on the area of
        blockchains. I'm interested in demonstrating how both public and private
        laboratories can better utilize slack computational resources to make
        use of blockchains and generate returns.
      </Typography>
    </Container>
  );
}

export default Research;
