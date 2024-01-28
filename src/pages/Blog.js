// Blog.js
import React from 'react';
import { Typography, Grid} from '@mui/material';

const Blog = () => 
            <>
                    <Typography variant="h2" align="center"><u>Fundamentals</u></Typography>
                <Grid container spacing={2} align="center" justify="center" alignItems="center">
                    <Grid item xs={12} sm={6} md={4}></Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Typography variant="h6" align="left">Category 1: Fundamentals of Hashing</Typography>
                    <Typography><u>What is Hashing?</u></Typography>
                    <Typography align="left">
                        Hashing is a form of cryptography that converts data into a fixed-size hash. 
                        The output, known as the hash value or hash code, is unique to the input data. 
                        Examples include SHA-256. It's commonly used for password storage and data integrity checks.
                                
                    </Typography>
                    <Typography><u>How Hashing Works</u></Typography>
                    <Typography align="left">
                        Hashing works by taking input data and processing it through a hash function to generate a fixed-size string of characters, known as a hash code. 
                        The hash code is unique to the input, meaning that even a small change in the input produces a significantly different hash. 
                        Importantly, hashing is a one-way process, making it computationally infeasible to reverse the hash and obtain the original input, which enhances security in applications
                    </Typography>
                    <Typography variant="h6" align="left">Category 2: Types of Hashing</Typography>
                    <Typography><u>MD5 (Message Digest Algorithm 5)</u></Typography>
                    <Typography align="left">
                        MD5 was widely used for checksums and data integrity verification. 
                        It produces a 128-bit (16-byte) hash value and was once considered secure for non-cryptographic purposes. 
                        However, vulnerabilities have been discovered over time, making it unsuitable for security-sensitive applications.
                    </Typography>
                    <Typography><u>SHA-256 (Secure Hash Algorithm 256-bit)</u></Typography>
                    <Typography align="left">
                        Part of the SHA-2 family, SHA-256 is a widely used cryptographic hash function. 
                        It produces a 256-bit (32-byte) hash value and is known for its resistance to collision attacks. 
                        SHA-256 is commonly employed in securing passwords, ensuring data integrity, and creating digital signatures.
                    </Typography>
                    
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}></Grid>
                </Grid>
            </>

export default Blog;