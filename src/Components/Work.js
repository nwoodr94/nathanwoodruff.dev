import { Box, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Three from "./Three/Three";

function Work() {
  return (
    <Container
      sx={{
        width: "500px",
        height: "50vh",
        maxWidth: "80vw",
        textAlign: "left",
        overflowY: "scroll",
      }}
    >
      <Typography variant="subtitle" component="h3">
        <b>Work</b>
      </Typography>
      <br />
      <Typography variant="caption" component="p">
        I'm a software engineer at the Idaho National Laboratory, a United
        States research facility.
        <br />
        <br />
        I build applications that enable researchers to do novel and interesting
        things with energy systems. I'm a full-stack developer, and so I do
        everything from apps to servers, and containers to cloud.
        <br />
        <br />
        The focus of my work at the INL is developing leading edge digital twin
        capabilities.
        <br />
        <br />
        <b>Digital Twins</b>
        <br />A digital twin is a virtual representation of some complex
        engineering system. These twins integrate data from a variety of
        sources, and in real-time enable researchers to interact with, observe,
        and make informed decisions with the systems they represent.
      </Typography>
      <Box
        sx={{
          height: "150px",
          width: "150px",
          margin: "0 auto",
        }}
      >
        <Canvas>
          <Three />
        </Canvas>
      </Box>
    </Container>
  );
}

export default Work;
