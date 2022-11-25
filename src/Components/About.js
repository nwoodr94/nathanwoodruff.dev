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
        Originally from the Pacific Northwest, I graduated from the University
        of Washington in 2017 with a Bachelor's degree in Applied Physics. I
        first learned to code as an undergraduate researcher, programming
        microcontrollers on sounding rockets. I was interested in plotting
        flight trajectories, and in learning about sensors like accelerometers
        and gyroscopes, my first language was C.
        <br />
        <br />
        Before becoming an engineer, I spent two years turning wrenches on the
        outskirts of Austin, TX, learning how semiconductors are made.
        <br />
        <br />
        I serve as First Counselor to the Elder's Quorum. This religious service includes leadership, philanthropy, volunteer work, teaching classes, and worshipping Jesus Christ alongside other adult men in the Idaho Falls area.
      </Typography>
      <br />
      <Container sx={{ textAlign: "center", padding: 0 }}>
        <Box
          component="img"
          sx={{
            height: 235,
            width: "100%",
          }}
          src={mountain}
        />
        <Typography variant="caption" component="p">The Grand Teton, 2021</Typography>
      </Container>
    </Container>
  );
}

export default About;
