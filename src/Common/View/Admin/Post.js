import React from 'react';
import CardPost from '../PostManager/CardPost'
import {
    Box,
    Container,
    Typography,
    Grid
} from '@mui/material';
import { acceptPostAction } from "../../../redux/actions/Recipe/recipe.action";
import { useSelector, useDispatch } from "react-redux";
const Post = () => {
    const dispatch = useDispatch();
    /*
        const post = useSelector((state) => state.recipe.listRecipe) || []
    
        useEffect(() => {
            dispatch(getWaitingRecipeAction())
        }, [])
        useEffect(() => {
            console.log("log at ==> cardpost.js => cardpost: ", post);
        }, [post])
    */

    return (
        <>
            <Container maxWidth="xl">
                <Box sx={{ pb: 5 }}>
                    <Typography variant="h4">Post Manager</Typography>
                </Box>
                <Grid container >
                    <Grid item xs={4} sm={6} md={3}>
                        <CardPost />
                    </Grid>

                </Grid>
            </Container>
        </>
    );
}

export default Post;