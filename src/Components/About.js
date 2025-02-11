// React
import React from "react";

// Material
import { Box, Container, Typography } from "@mui/material";

// Assets
import mountain from "../Assets/mountain.jpg";

function About() {
  return (
    <Container
      sx={{
        width: "500px",
        height: "50vh",
        maxWidth: "80vw",
        textAlign: "left",
        overflowY: "auto",
      }}
    >
      <Typography variant="subtitle2" component="h3">
        <b>About Me</b>
      </Typography>
      <br />
      <Typography variant="caption" component="p">
        I'm into science, fitness, and nature.
        <br />
        <br />
        I'm from the Pacific Northwest, and studied Applied Physics at the University of Washington. I
        first learned to code as an undergraduate researcher, programming
        microcontrollers on sounding rockets. I was interested in plotting
        flight trajectories, and in learning about sensors like accelerometers
        and gyroscopes, my first language was C.
        <br />
        <br />
        
      </Typography>
      <br />
      <Container sx={{ textAlign: "center", padding: 0 }}>
        <Box
          component="img"
          sx={{
            height: 235,
            width: "90%",
          }}
          src={mountain}
        />
        <Typography variant="caption" component="p">The Grand Teton, 2021</Typography>
      </Container>
    </Container>
  );
}

export default About;
