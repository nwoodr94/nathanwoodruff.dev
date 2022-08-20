// React
import React from "react";

// Material
import { Container, ListItemButton, ListItem, Typography } from "@mui/material";

// Icons
import Icon from "@mdi/react";
import {
  mdiGithub,
  mdiLinkedin,
  mdiInstagram,
  mdiBeehiveOutline,
} from "@mdi/js";

function Contact() {
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
        <b>Contact</b>
      </Typography>
      <br />
      <Container sx={{ textAlign: "center" }}>
        <ListItemButton
          component="a"
          href="https://github.com/nwoodr94"
          target="_blank"
        >
          <Icon path={mdiGithub} size={1} />
          <ListItem sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="caption" sx={{ fontSize: "0.70rem" }}>
              REVIEW MY WORK ON GITHUB
            </Typography>
          </ListItem>
        </ListItemButton>
        <ListItemButton
          component="a"
          href="https://linkedin.com/in/nwoodr94"
          target="_blank"
        >
          <Icon path={mdiLinkedin} size={1} />
          <ListItem sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="caption" sx={{ fontSize: "0.70rem" }}>
              JOIN MY NETWORK ON LINKEDIN
            </Typography>
          </ListItem>
        </ListItemButton>
        <ListItemButton
          component="a"
          href="https://instagram.com/hipsterphysicist"
          target="_blank"
        >
          <Icon path={mdiInstagram} size={1} />
          <ListItem sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="caption" sx={{ fontSize: "0.70rem" }}>
              FOLLOW ME ON INSTAGRAM
            </Typography>
          </ListItem>
        </ListItemButton>
        <ListItemButton
          component="a"
          href="https://www.churchofjesuschrist.org/comeuntochrist/believe/book-of-mormon"
          target="_blank"
        >
          <Icon path={mdiBeehiveOutline} size={1} />
          <ListItem sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="caption" sx={{ fontSize: "0.70rem" }}>
              BECOME A DISCIPLE OF JESUS CHRIST
            </Typography>
          </ListItem>
        </ListItemButton>
      </Container>
      <br />
    </Container>
  );
}

export default Contact;
