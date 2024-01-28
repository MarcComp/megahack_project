// Blog.js
import React from 'react';
import { Typography, Grid} from '@mui/material';

const Blog = () => 
            <>
                    <Typography variant="h2" align="center"><u>Fundamentals</u></Typography>
                <Grid container spacing={2} align="center" justify="center" alignItems="center">
                    <Grid item xs={12} sm={12} md={4}></Grid>
                    <Grid item xs={12} sm={12} md={4}>
                    <Typography variant="h6" align="left">Category 1: Fundamentals of Hashing</Typography>
                    <Typography><u>What is Hashing?</u></Typography>
                    <Typography align="left">
                        Hashing is a form of cryptography that converts data into a fixed-size hash. 
                        The output, known as the hash value or hash code, is unique to the input data. 
                        Examples include SHA-256. It's commonly used for password storage and data integrity checks.
                                
                    </Typography>
                    <Typography><u>How Hashing Works</u></Typography>
                    <Typography align="left">Encryption uses algorithms and keys to transform plaintext into ciphertext. 
                                The key is a piece of information that determines the transformation. 
                                Only those with the correct key can decrypt the ciphertext back into plaintext.
                    </Typography>
                    <Typography variant="h6" align="left">Category 2: Types of Hashing</Typography>
                    <Typography><u>Symmetric Encryption</u></Typography>
                    <Typography align="left">Symmetric encryption uses the same key for both encryption and decryption. 
                                Examples include the Advanced Encryption Standard (AES). 
                                It's fast and efficient but requires secure key management.
                    </Typography>
                    <Typography><u>Asymmetric Encryption</u></Typography>
                    <Typography align="left">Asymmetric encryption, or public-key cryptography, uses two different keys – a public key for encryption and a private key for decryption. 
                                Examples include RSA. It's more secure for certain applications but computationally heavier.
                    </Typography>
                    <Typography><u>Hashing</u></Typography>
                    <Typography align="left">Hashing is a form of cryptography that converts data into a fixed-size hash. 
                                Unlike encryption, hashing is one-way and cannot be reversed. 
                                Examples include SHA-256. It's commonly used for password storage and data integrity checks.
                    </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}></Grid>
                </Grid>
            </>

export default Blog;