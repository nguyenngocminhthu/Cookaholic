import React from 'react';
import CardPost from '../PostManager/CardPost'
import {
    Box,
    Container,
    Typography,
    Grid
  } from '@mui/material';
const Post = () => {
    return (
        <>
            <Container maxWidth="xl">
                <Box sx={{ pb: 5 }}>
                <Typography variant="h4">Post Manager</Typography>
                </Box>
                <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    <CardPost />
                </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                < CardPost />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CardPost />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CardPost />
                </Grid> 
                </Grid>
            </Container>
        </>
    );
}

export default Post;