import "./styles/App.css";
import * as React from "react";
import { Container, Typography, Button, Paper, Box } from '@mui/material';
function App ()
{
  return (
    <Container maxWidth="sm">
      <Paper square elevation={10}>
        <Box p={ 2 }>
          <Typography variant="h4">Read Docs</Typography>
          <Typography variant="subtitle1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quas possimus magni corrupti recusandae dolor fugit sequi eius dignissimos modi aliquam tempora natus accusantium reiciendis quidem! Neque amet vitae adipisci.
          </Typography>
          <Button variant="contained" sx={{color:"#ffff",backgroundColor:"#f50057"}}>Learn More</Button>
        </Box>
      </Paper>

    </Container >
  );
}
// Note :- Elevation is used to increase box shadow
export default App;
