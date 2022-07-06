import { Container, Typography } from "@mui/material";
import React from "react";

function Contact() {
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
        <b>Contact</b>
      </Typography>
      <br />
    </Container>
  );
}

export default Contact;
