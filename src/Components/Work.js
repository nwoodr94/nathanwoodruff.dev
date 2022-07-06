import { Container, Typography } from "@mui/material";
import React from "react";

function Work() {
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
        <b>Work</b>
      </Typography>
      <br />
      <Typography variant="caption" component="p">
        I'm a software engineer at the Idaho National Laboratory, a United
        States research facility.
        <br />
        <br />I build applications that enable researchers to do novel and
        interesting things with nuclear reactors. I'm a full-stack developer,
        and I do everything from apps to servers, and containers to clouds. This
        work involves research, and I've authored papers on data warehouses, and
        blockchains.
      </Typography>
    </Container>
  );
}

export default Work;
