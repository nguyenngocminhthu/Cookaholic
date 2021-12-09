import React, { useState, useEffect, forwardRef } from 'react'
import { useSelector, useDispatch } from "react-redux";
import ImageUploading from 'react-images-uploading';
import imgUpload from '../../img/imgUpload.png'
import { useHistory } from "react-router";

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

import Grid from '@mui/material/Grid';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

import { getAllTopicAction } from "../../../redux/actions/Topic/topic.action"
import './AddRecipes.css';
import NotFound from '../../components/404';

import { uploadImagesToFirebase } from "../../utils/imgFirebase";

import {
    addRecipeAction,
} from "../../../redux/actions/Recipe/recipe.action";
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/core/ButtonUnstyled';


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

    const history = useHistory();
    const handleGoBack = () => {
        history.goBack();
        return;
    };


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
    const CustomButtonRoot = styled(ButtonRoot)(
        ({ theme }) => `
  overflow: visible;
  cursor: pointer;
  --main-color: ${theme.palette.mode === 'light' ? 'rgb(25,118,210)' : 'rgb(144,202,249)'
            };
  --hover-color: ${theme.palette.mode === 'light'
                ? 'rgba(25,118,210,0.04)'
                : 'rgba(144,202,249,0.08)'
            };
  --active-color: ${theme.palette.mode === 'light'
                ? 'rgba(25,118,210,0.12)'
                : 'rgba(144,202,249,0.24)'
            };

  & polygon {
    fill: transparent;
    transition: all 800ms ease;
    pointer-events: none;
  }
  
  & .bg {
    stroke: var(--main-color);
    stroke-width: 0.5;
    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));
    fill: transparent;
  }

  & .borderEffect {
    stroke: var(--main-color);
    stroke-width: 2;
    stroke-dasharray: 150 600;
    stroke-dashoffset: 150;
    fill: transparent;
  }

  &:hover,
  &.${buttonUnstyledClasses.focusVisible} {
    .borderEffect {
      stroke-dashoffset: -600;
    }

    .bg {
      fill: var(--hover-color);
    }
  }

  &:focus,
  &.${buttonUnstyledClasses.focusVisible} {
    outline: none;
  }

  &.${buttonUnstyledClasses.active} { 
    & .bg {
      fill: var(--active-color);
      transition: fill 300ms ease-out;
    }
  }

  & foreignObject {
    pointer-events: none;

    & .content {
      font-family: Helvetica, Inter, Arial, sans-serif;
      font-size: 14px;
      font-weight: 200;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--main-color);
      text-transform: uppercase;
    }

    & svg {
      margin: 0 5px;
    }
  }`,
    );

    const SvgButton = React.forwardRef(function SvgButton(props, ref) {
        return <ButtonUnstyled {...props} component={CustomButtonRoot} ref={ref} />;
    });

    const userId = useSelector((state) => state.auth.user._id) || []
    console.log("log at ==> Header.js ==> user: ", userId)

    const addRecipe = async (e) => {
        e.preventDefault();
        const data = {
            name: e.target.recipename.value,
            title: e.target.title.value,
            topic: e.target.topic.value,
            time: e.target.time.value,
            serving: e.target.serving.value,
            ingre: e.target.ingredients.value,
            directions: e.target.direction.value,
            user: e.target.user.value,
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
            <div className="btnGoBack">
                <SvgButton onClick={() => { handleGoBack() }}>Go Back</SvgButton>
            </div>
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
                                                    id={"time"}
                                                    label={"Time"}
                                                    name={"time"}

                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    id={"serving"}
                                                    label={"Serving"}
                                                    name={"serving"}

                                                />
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
                                            <Grid item xs={12} visibility={"hidden"}>
                                                <TextField
                                                    fullWidth
                                                    height={"0px"}
                                                    id={"user"}
                                                    label={"Authors"}
                                                    rows={4}
                                                    name={"user"}
                                                    value={userId}
                                                />
                                            </Grid>
                                        </Grid>

                                        <Button className="btn-grad"
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 1, mb: 4, color: 'black' }}
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