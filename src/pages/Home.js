// Home.js
import React from 'react';
import HomepageImage from '../components/HomepageImage';
import { Typography, Grid, Button, TextField} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';



const Home = () => {
    return (
      <>
          <Typography><DownloadIcon></DownloadIcon></Typography>
          

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
                  defaultValue=""
                />
              </Grid>
              <Grid item xs={12} sm={12} md={2}>
                <Button variant="outlined">De-Hash</Button>
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