// Home.js
import React, { useState } from 'react';
import HomepageImage from '../components/HomepageImage';
import { Typography, Grid, Button, TextField} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';



const Home = () => {
  const [textFieldValue, setTextFieldValue] = useState('');

  const handleButtonClick = async () => {
    try {
      // Make a fetch request
      const response = await fetch(`http://172.206.255.161:8080/hash/${textFieldValue}`);
      
      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the response JSON
      const data = await response.json();

      // Print the results in the console
      console.log('Fetched data:', data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

    return (
      <>
          <Typography></Typography>
          

          <Grid container spacing={2} align="center" justify="center" alignItems="center">
              <Grid item xs={12} sm={12} md={12}></Grid>
              <Grid item xs={12} sm={12} md={12}></Grid>
              <Grid item xs={12} sm={12} md={12}></Grid>
              <Grid item xs={12} sm={12} md={12}></Grid>

              <Grid item xs={12} sm={12} md={2}></Grid>
              <Grid item xs={12} sm={12} md={2}></Grid>
              <Grid item xs={12} sm={12} md={2}>
                <TextField
                  id="outlined-multiline-static"
                  label="Input Hash Here"
                  multiline
                  rows={8}
                  value={textFieldValue}
                  onChange={(e) => setTextFieldValue(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={2}>
                <Button variant="outlined" onClick={handleButtonClick}>De-Hash</Button>
              </Grid>
              <Grid item xs={12} sm={12} md={2}>
                <Button variant="outlined">Download<DownloadIcon></DownloadIcon></Button>
              </Grid>
              <Grid item xs={12} sm={12} md={2}></Grid>
              <Grid item xs={12} sm={12} md={2}></Grid>
              
              <Grid item xs={12} sm={12} md={12}></Grid>
              <Grid item xs={12} sm={12} md={12}></Grid>
              <Grid item xs={12} sm={12} md={12}>
                <HomepageImage/>
              </Grid>
          </Grid>

      </>
    );
}


export default Home;