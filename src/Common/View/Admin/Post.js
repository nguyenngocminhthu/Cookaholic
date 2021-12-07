import React, { useState, useEffect } from 'react';
import CardPost from '../PostManager/CardPost'
import {
    Box,
    Container,
    Typography,
    Grid
} from '@mui/material';
import { getAllRecipeAction } from "../../../redux/actions/Recipe/recipe.action";
import { useSelector, useDispatch } from "react-redux";
const Post = (props) => {

    const [acceptSuccess, setAcceptSuccess] = useState(false);
    const [deleteSuccess, setDeleteSuccess] = useState(false);

    const dispatch = useDispatch();
    const posts = useSelector((state) => state.recipe.listRecipe) || []
    const [status, setStatus] = useState(1.5);


    useEffect(() => {
        dispatch(getAllRecipeAction({ status: 1.5 }))
        console.log("log at ==> Main.js => status: ", status);
    }, [acceptSuccess, deleteSuccess])
    useEffect(() => {

        console.log("log at ==> Main.js => posts: ", posts);
    }, [acceptSuccess, deleteSuccess])


    return (
        <>
            <Container maxWidth="xl">
                <Box sx={{ pb: 5 }}>
                    <Typography variant="h4">Post Manager</Typography>
                </Box>
                <Grid container >

                    <CardPost list={posts} setAcceptSuccess={setAcceptSuccess} acceptSuccess={acceptSuccess} setDeleteSuccess={setDeleteSuccess} deleteSuccess={deleteSuccess} />


                </Grid>
            </Container>
        </>
    );
}

export default Post;