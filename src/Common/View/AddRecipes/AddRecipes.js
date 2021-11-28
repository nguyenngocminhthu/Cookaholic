import React, { useState, useEffect, forwardRef } from 'react'
import { useSelector, useDispatch } from "react-redux";
import ImageUploading from 'react-images-uploading';
import imgUpload from '../../img/imgUpload.png'

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

import Grid from '@mui/material/Grid';

import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';

import { getAllTopicAction } from "../../../redux/actions/Topic/topic.action"
import './AddRecipes.css';
import NotFound from '../../components/404';

import { uploadImagesToFirebase } from "../../utils/imgFirebase";
import {
    addRecipeAction,
} from "../../../redux/actions/Recipe/recipe.action";


const AddRecipes = (props) => {

    const dispatch = useDispatch();

    const theme = createTheme();

    const topics = useSelector((state) => state.topic.listTopic) || []

    useEffect(() => {
        dispatch(getAllTopicAction())
    }, [])
    useEffect(() => {
        console.log("log at ==> AddRecipes.js => topics: ", topics);
    }, [topics])


    const [topic, setTopic] = useState('Asian');

    const handleChange = (event) => {
        setTopic(event.target.value);
    };

    const [images, setImages] = useState([]);
    const maxNumber = 1;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    const ButtonRoot = forwardRef(function ButtonRoot(props, ref) {
        const { children, ...other } = props;

        return (
            <svg width="150" height="50" {...other} ref={ref}>
                <polygon points="0,50 0,0 150,0 150,50" className="bg" />
                <polygon points="0,50 0,0 150,0 150,50" className="borderEffect" />
                <foreignObject x="0" y="0" width="150" height="50">
                    <div className="content">{children}</div>
                </foreignObject>
            </svg>
        );
    });

    ButtonRoot.propTypes = {
        children: PropTypes.node,
    };

    const addRecipe = async (e) => {
        e.preventDefault();
        const data = {
            name: e.target.recipename.value,
            title: e.target.title.value,
            topic: e.target.topic.value,
            ingre: [e.target.ingredients.value],
            directions: [e.target.direction.value],
        }
        const url = await dispatch(uploadImagesToFirebase([images[0].file], "Recipe"));
        console.log("log at ==> add recipe ==> url: ", url);
        if (url) {
            await dispatch(addRecipeAction({ ...data, image: url }))
        }
    };
    const roles = useSelector((state) => state.auth.user.roles) || []
    console.log("log at ==> Header.js ==> roles: ", roles)
    return roles.find((role) => role === "ROLE_GUEST") ?


        (
            <NotFound />
        ) : (<>
            <div className="addRec">

                <Grid component="form" onSubmit={addRecipe} container height="100%">
                    <Grid className="addLeft" item xs={5}>
                        <ImageUploading
                            images={images}
                            multiple={false}
                            value={images}
                            onChange={onChange}
                            maxNumber={maxNumber}
                            dataURLKey="data_url"
                        >
                            {
                                ({
                                    imageList,
                                    onImageUpload,
                                    onImageUpdate,
                                    onImageRemove,
                                    isDragging,
                                    dragProps,
                                }) => (
                                    // write your building UI
                                    <div className="upload_image-wrapper">
                                        <button
                                            type="button"
                                            className="imgUpload"
                                            style={isDragging ? { color: 'red' } : undefined
                                            }
                                            onClick={onImageUpload}
                                            {...dragProps}
                                        >
                                            <img className="imgUp" src={imgUpload}></img>
                                        </button >

                                        <h4 style={{ margin: "10px" }}>Click or Drag and Drop Image here</h4>

                                        {
                                            imageList.map((image, index) => (
                                                <div key={index} className="image-item">
                                                    <img src={image['data_url']} alt="" width="100" />
                                                    <div className="image-item__btn-wrapper">
                                                        <button type="button" onClick={() => onImageUpdate(index)}>Update</button>
                                                        <button type="button" onClick={() => onImageRemove(index)}>Remove</button>
                                                    </div>
                                                </div>
                                            ))
                                        }

                                        {
                                            ({ imageList, dragProps, isDragging }) => (
                                                <div {...dragProps}>
                                                    {isDragging ? "Drop here please" : "Upload space"}
                                                    {imageList.map((image, index) => (
                                                        <img key={index} src={image.data_url} />
                                                    ))}
                                                </div>
                                            )
                                        }
                                    </div >
                                )}
                        </ImageUploading >
                    </Grid >
                    <Grid item xs={7}>
                        <ThemeProvider theme={theme}>
                            <Container component="main" maxWidth="xs">
                                <CssBaseline />
                                <Box
                                    sx={{
                                        marginTop: 3,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',

                                    }}
                                >

                                    <Typography component="h1" variant="h5">
                                        UPLOAD RECIPE
                                    </Typography>
                                    <Box sx={{ mt: 3 }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    id={"recipename"}
                                                    label={"Recipe's Name"}
                                                    name={"recipename"}

                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    id={"title"}
                                                    label={"Title"}
                                                    multiline
                                                    rows={4}
                                                    name={"title"}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    name={"topic"}
                                                    fullWidth
                                                    id={"topic"}
                                                    select
                                                    label={"Topic"}
                                                    value={topic}
                                                    onChange={handleChange}
                                                    helperText="Please select your topic"
                                                >
                                                    {topics.map((vl, idx) => (
                                                        <MenuItem key={idx} value={vl._id}>
                                                            {vl.name}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    id={"ingredients"}
                                                    label={"Ingredients"}
                                                    multiline
                                                    rows={4}
                                                    name={"ingredients"}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    id={"direction"}
                                                    label={"Direction"}
                                                    multiline
                                                    rows={4}
                                                    name={"direction"}
                                                />
                                            </Grid>

                                        </Grid>

                                        <Button className="btn-grad"
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 1, mb: 4 }}
                                        >
                                            Upload
                                        </Button>{" "}

                                    </Box>
                                </Box>
                            </Container>
                        </ThemeProvider>
                    </Grid>
                </Grid >

            </div >
        </>);
}

export default AddRecipes;