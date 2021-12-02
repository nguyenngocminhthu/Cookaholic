import React, { useState, useEffect, forwardRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Modal from 'react-awesome-modal';
import ImageUploading from 'react-images-uploading';
import imgUpload from '../../img/imgUpload.png'
import {
    Box,
    Container,
    Typography,
    Stack,
    Grid,
    Button,
    CssBaseline,
    TextField,

} from '@mui/material';
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import plusFill from '@mui/icons-material/Add';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import { getAllTopicAction, addTopicAction } from "../../../redux/actions/Topic/topic.action";
import { uploadImagesToFirebase } from "../../utils/imgFirebase";


const Topic = () => {

    const dispatch = useDispatch();

    const topics = useSelector((state) => state.topic.listTopic) || []

    useEffect(() => {
        dispatch(getAllTopicAction())
    }, [])
    useEffect(() => {
        console.log("log at ==> Topic.js => topics: ", topics);
    }, [topics])



    const [visible, setVisible] = useState();
    const openModal = () => {
        setVisible(!visible);

    };

    const closeModal = () => setVisible(false);

    const theme = createTheme();

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

    const addTopic = async (e) => {
        e.preventDefault();
        const data = {
            name: e.target.topicname.value,
        }
        const url = await dispatch(uploadImagesToFirebase([images[0].file], "Topic"));
        console.log("log at ==> add topic ==> url: ", url);
        if (url) {
            await dispatch(addTopicAction({ ...data, image: url }))
        }
    };



    return (
        <>
            <Container maxWidth="xl">
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom style={{ color: '#F07D16' }}>
                        Topic Manager
                    </Typography>
                    <Button
                        variant="contained"
                        startIcon={<Box component={plusFill} sx={{ color: 'white' }} />}
                        onClick={() => openModal()}
                    >
                        New Topic
                    </Button>
                </Stack>
                <Box sx={{ overflowY: 'scroll' }}>
                    <ImageList variant="masonry" cols={4} gap={8}>
                        {topics.map((value, index) => (
                            <ImageListItem key={index}>
                                <img
                                    src={`${value.image}?w=248&fit=crop&auto=format`}
                                    srcSet={`${value.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={value.name}
                                    loading="lazy"
                                />
                                <ImageListItemBar position="below" title={value.name} />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            </Container>
            <Modal
                visible={visible}
                width="40%"
                height="90%"
                effect="fadeInUp"
                onClickAway={closeModal}

            >
                <div>
                    <div className="close-detail">
                        <button className="close" onClick={closeModal}><i className="fa fa-times" aria-hidden="true"></i></button>
                    </div>

                    <Grid component="form" onSubmit={addTopic} container height="100%">
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
                                    UPLOAD TOPIC
                                </Typography>
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
                                                    className="imgUploadTopic"
                                                    style={isDragging ? { color: 'red' } : undefined
                                                    }
                                                    onClick={onImageUpload}
                                                    {...dragProps}
                                                >
                                                    <img className="imgUpTopic" src={imgUpload}></img>
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
                                <Box sx={{ mt: 3 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                id={"topicname"}
                                                label={"Topic's Name"}
                                                name={"topicname"}

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
                    </Grid >


                </div>

            </Modal>
        </>);
}

export default Topic;