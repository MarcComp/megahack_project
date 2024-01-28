// Home.js
import React, { useState, useEffect } from 'react';
import HomepageImage from '../components/HomepageImage';
import RevealedHash from '../components/RevealedHash';
import { Typography, Grid, Button, TextField} from '@mui/material';



const Home = () => {
  const [textFieldValue, setTextFieldValue] = useState('');
  const [hashName, setHashName] = useState('');
  const [hashText, setHashText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonClick = async () => {
    try {
      if (textFieldValue === "") {
        setIsVisible(false);
        alert("Input cannot be empty.");
        return;
      }

      // Make a fetch request
      const response = await fetch(`http://172.206.255.161:8080/hash/${textFieldValue}`);
      
      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the response JSON
      const data = await response.json();
      setHashName(data.hashName);
      setHashText(data.hashResult);
      setIsVisible(true);
      setTextFieldValue("");

      // Print the results in the console
      console.log('Fetched data:', data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

    return (
      <>
          <Typography variant="h2" align="center"><u>De-Hashing & Education</u></Typography>
          
          <Grid container spacing={2} align="center" justify="center" alignItems="center">
              <Grid item xs={12} sm={12} md={12}></Grid>
              <Grid item xs={12} sm={12} md={12}></Grid>
              <Grid item xs={12} sm={12} md={12}><Typography variant="h6"><u>An Introduction to Hashing!</u></Typography></Grid>
              <Grid item xs={12} sm={6} md={4}></Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Typography align="left">Welcome to the world of hashing! Hashing is a fundamental technology used to protect information in the digital age. 
                            From the 1970s to modern day, hashing has played a crucial role in securing communications and data. 
                </Typography>
                
                <Typography><u>Why Hashing Matters</u></Typography>
                <Typography align="left">
                Hashing is vital for maintaining privacy and security. 
                Primarily, it ensures data integrity by creating unique hash codes for digital content, allowing the detection of any unauthorized modifications during transmission or storage. 
                In password security, hashing transforms passwords into irreversible hash values, enhancing the security of stored credentials. 
                It plays a vital role in digital signatures, verifying message authenticity and sender identity.  
                In essence, hashing is fundamental for maintaining the integrity, security, and authenticity of digital data.
                </Typography>

              </Grid>
              <Grid item xs={12} sm={6} md={4}></Grid>
              <Grid item xs={12} sm={3} md={2}></Grid>
              <Grid item xs={12} sm={3} md={2}></Grid>
              <Grid item xs={12} sm={3} md={2}>
                <TextField
                  id="outlined-multiline-static"
                  label="Input Hash Here"
                  multiline
                  required
                  rows={8}
                  value={textFieldValue}
                  onChange={(e) => setTextFieldValue(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={3} md={2}>
                <Button variant="outlined" onClick={handleButtonClick}>De-Hash</Button>
              </Grid>
              <Grid item xs={12} sm={12} md={2}></Grid>
              <Grid item xs={12} sm={12} md={2}></Grid>
              
              <Grid item xs={12} sm={12} md={12}></Grid>
              <Grid item xs={12} sm={12} md={4}></Grid>
              <Grid item xs={12} sm={12} md={4}>
                <RevealedHash shouldRender={isVisible} hashName={hashName} hashText={hashText}/>
              </Grid>
              <Grid item xs={12} sm={12} md={4}></Grid>
              <Grid item xs={12} sm={12} md={12}></Grid>
              <Grid item xs={12} sm={12} md={12}>
                <HomepageImage/>
              </Grid>
          </Grid>

      </>
    );
}


export default Home;