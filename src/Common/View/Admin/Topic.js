import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
    Box,
    Container,
    Typography,
    Grid
} from '@mui/material';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import { getAllTopicAction } from "../../../redux/actions/Topic/topic.action";

const Topic = () => {

    const dispatch = useDispatch();

    const topics = useSelector((state) => state.topic.listTopic) || []

    useEffect(() => {
        dispatch(getAllTopicAction())
    }, [])
    useEffect(() => {
        console.log("log at ==> Topic.js => topics: ", topics);
    }, [topics])


    return (
        <>
            <Container maxWidth="xl">
                <Box sx={{ pb: 5 }}>
                    <Typography variant="h4">Topic Manager</Typography>
                </Box>
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

        </>);
}

export default Topic;