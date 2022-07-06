import { Container, Typography } from "@mui/material";
import React from "react";

function About() {
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
        <b>About Me</b>
      </Typography>
      <br />
      <Typography variant="caption" component="p">
        I'm into science, fitness, and nature.
        <br />
        <br />
        Originally from the Pacific Northwest, I graduated from the University
        of Washington in 2017 with a Bachelor's degree in Applied Physics. I
        first learned to code as an undergraduate researcher, programming
        microcontrollers on sounding rockets. I was interested in plotting
        flight trajectories, and in learning about sensors like accelerometers
        and gyroscopes, my first language was C.
        <br />
        <br />
        Before becoming an engineer, I spent two years turning wrenches on the
        outskirts of Austin, TX for a semiconductor tooling manufacturer.
      </Typography>
    </Container>
  );
}

export default About;
