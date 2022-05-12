import React from 'react';
import { AppBar, Box, Button, ButtonGroup, Card, Container } from "@mui/material";

class App extends React.Component {
  render() {
    return (
      <Box>
        <AppBar position="sticky" sx={{ bgcolor: "white", color: "black"}}><h1 style={{ padding: "1rem", fontSize: "1.25rem"}}>Nathan Woodruff</h1></AppBar>
        <Container>
                <Box m="auto">
                    Hi, I'm Nathan
                    <br />  
                    <br />
                    I'm a software developer based in Idaho Falls <span role="img" aria-label="mountain">{String.fromCodePoint(0x1f3de)}</span>
                </Box>
                <Card>
                    <ButtonGroup>
                        <Button size="small" variant="text" href="/home">Home</Button>
                        <Button size="small" variant="text">About</Button>
                        <Button size="small" variant="text">Work</Button>
                        <Button size="small" variant="text">Research</Button>
                        <Button size="small" variant="text">Contact</Button>
                    </ButtonGroup>
                </Card>
            </Container>
        <AppBar position="fixed" elevation={0} sx={{ top: 'auto', bottom: 0, bgcolor: "white", color: "black", padding: "1rem" }}>
          <Box m="auto">Developed by Nathan Woodruff</Box>
        </AppBar>
      </Box>
    )
  }
}

export default App;