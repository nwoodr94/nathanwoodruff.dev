// React
import React from "react";

// Material
import { Box, Container, Typography } from "@mui/material";

// ThreeJS
import { Canvas } from "@react-three/fiber";
import Three from "./Three/Three";

// Recharts
import {
  CartesianGrid,
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "a",
    uv: 4000,
  },
  {
    name: "b",
    uv: 3000,
  },
  {
    name: "c",
    uv: 5000,
  },
  {
    name: "d",
    uv: 7000,
  },
];

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
      <Typography variant="subtitle2" component="h3">
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
        everything from apps to servers, and containers to clouds.
        <br />
        <br />
        The emphasis of our work at the INL are digital twin systems.
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
      <br />
      <Typography variant="caption" component="p">
        The value of this work is realized through real-time analytics like
        machine learning and other physics based simulation capabilities.
      </Typography>

      <br />
      <Box
        sx={{
          height: "150px",
          margin: "0 auto",
        }}
      >
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{ top: 0, right: 25, bottom: 0, left: -50 }}
          >
            <CartesianGrid strokeDasharray={1} />
            <XAxis tick="" />
            <YAxis tick="" />
            <Line type="monotone" dataKey="uv" stroke="gray" />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Container>
  );
}

export default Work;
