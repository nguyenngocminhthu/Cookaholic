import React, { useState, useEffect } from 'react';
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

import { CgMoreO } from 'react-icons/cg'

import MoreVertIcon from '@mui/icons-material/MoreVert';

import RatingShow from '../Detail/Rating';
import RecipesDetail from '../Detail/RecipesDetail';
import Modal from 'react-awesome-modal';
import './CardPost.css';
import { acceptPostAction, deletePostAction } from "../../../redux/actions/Recipe/recipe.action";
import { useSelector, useDispatch } from "react-redux";

export default function CardPost(props) {

  const dispatch = useDispatch();

  const { list } = props;
  const [currentPost, setCurrentPost] = useState({});
  const [visible, setVisible] = useState();
  const openModal = (index) => {
    setCurrentPost(list[index]);
    setVisible(!visible);
    setShowDetail(true);
    setShowRatingShow(false);

  };


  const closeModal = () => setVisible(false);

  const [showDetail, setShowDetail] = useState(true);
  const [showRatingShow, setShowRatingShow] = useState(false);
  const showComp = (element) => {
    if (element === "detail") {
      setShowDetail(true);
      setShowRatingShow(false);
    } else {
      setShowDetail(false);
      setShowRatingShow(true);
    }

  }




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
        <Grid key={index} item xs={4} sm={6} md={3} mr={3}>

          <Card sx={{ maxWidth: 345, minHeight: 500, position: "relative" }}>
            <CardHeader
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
              <IconButton aria-label="more" onClick={() => openModal(index)}>
                <CgMoreO />
              </IconButton>
            </CardActions>
          </Card>


        </Grid >
        <Modal
          visible={visible}
          width="80%"
          height="90%"
          effect="fadeInUp"
          onClickAway={closeModal}

        >
          <div key={currentPost}>
            <div className="close-detail">
              <button className="close" onClick={closeModal}><i className="fa fa-times" aria-hidden="true"></i></button>
            </div>

            <div className="detail">
              <div className="row">
                <div className="col-6 ">
                  <div className="img-del">
                    <img className="imgdetail" src={currentPost.image} alt={currentPost.name} />
                  </div>

                </div>
                <div className="col-6">
                  <div className="title">
                    <button className="detailrating" onClick={() => showComp("detail")}>
                      Detail
                    </button>
                    <button className="detailrating" onClick={() => showComp()}>
                      Rating
                    </button>
                  </div>


                  {showDetail && <RecipesDetail recipe={currentPost} />}

                  {showRatingShow && <RatingShow recipe={currentPost} />}


                </div>
              </div>

            </div>

          </div>

        </Modal>
      </>
    );
  })
}