import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Grid } from '@mui/material';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

import { BsCheckCircle } from 'react-icons/bs'
import { ImCancelCircle } from 'react-icons/im'

import { FaPlayCircle } from 'react-icons/fa'

import MoreVertIcon from '@mui/icons-material/MoreVert';


import './CardPost.css';
import { acceptPostAction, deletePostAction } from "../../../redux/actions/Recipe/recipe.action";
import { useSelector, useDispatch } from "react-redux";

export default function CardPost(props) {

  const dispatch = useDispatch();

  const { list } = props;


  const accept = async (value) => {

    await dispatch(acceptPostAction(value))
    console.log("log at => CardPost => accept => value: ", value);

  }

  const handleAccept = (data) => {
    accept(data);

    props.setAcceptSuccess(props.acceptSuccess ? false : true)

  }

  const deletePost = async (value) => {

    await dispatch(deletePostAction(value))
    console.log("log at => CardPost => delete => value: ", value);

  }

  const handleDelete = (data) => {
    deletePost(data);

    props.setDeleteSuccess(props.deleteSuccess ? false : true)

  }

  return list.map((value, index) => {
    console.log("log at => CardPost => value.id:  ", value._id);
    return (
      <>
        <Grid key={index} item xs={3} sm={6} md={3} mb={3}>

          <Card className="cardRec" sx={{ maxWidth: 240, minHeight: 400, position: "relative" }}>
            <CardHeader
              className="customHeader"
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={value.name}
              subheader={value.createdAt}
            />
            <CardMedia
              component="img"
              height="194"
              image={value.image}
              alt={value.name}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {value.title}
              </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{ position: "absolute", bottom: 0, right: 0 }}>
              <IconButton aria-label="accept" onClick={() => handleAccept(value._id)}>
                <BsCheckCircle />
              </IconButton>
              <IconButton aria-label="deny" onClick={() => handleDelete(value._id)}>
                <ImCancelCircle />
              </IconButton>
              <IconButton aria-label="more">
                <NavLink
                  to={`/pagepost/${value._id}`}>
                  <FaPlayCircle />
                </NavLink>
              </IconButton>
            </CardActions>
          </Card>


        </Grid >

      </>
    );
  })
}