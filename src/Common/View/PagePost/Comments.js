/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react'
import './custom.css'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ReplyIcon from '@mui/icons-material/Reply';

import { addCommentAction, getCommentAction, replyCommentAction } from '../../../redux/actions/Comment/comment.action'
import Grid from '@mui/material/Grid';
import toastNotify from "../../Toastify/toastNotify";



const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});


const Comments = (props) => {
  const recipe = useSelector((state) => state.recipe.recipeDetail);
  const [commentInput, setCommentInput] = useState("")
  const [replyInput, setReplyInput] = useState("")
  const onChangeState = (e, type) => {
    switch (type) {
      case "comment":
        setCommentInput(e.target.value)
        break;
      case "reply":
        setReplyInput(e.target.value)
        break;
      default:
        break;
    }
  }


  useEffect(() => {
    console.log("log at => Comment ==> recipe: ", recipe)
    if (recipe._id) {
      const fetchComment = async () => {
        await dispatch(getCommentAction(recipe._id))
      }
      fetchComment();
    }
  }, [recipe])
  useEffect(() => {
    //find by id
  }, [])

  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth.user._id) || []
  const recipeId = recipe._id;

  const cmt = useSelector((state) => state.comment.listComment) || []
  useEffect(() => {
    console.log("log at ==> Comment.js => cmt: ", cmt);
  }, [])

  const isLogin = useSelector((state) => state.auth.isLogin)

  const avt = useSelector((state) => state.auth.user.avt) || []

  let count = 0

  const addComment = async (e) => {
    e.preventDefault();
    const rate = e.target.rate.value
    console.log("rate: ", rate)
    if (isLogin) {
      const res = await dispatch(addCommentAction({ content: commentInput, user: userId, recipe: recipeId, rate: rate }))
      if (res) await dispatch(getCommentAction(recipe._id))
      setCommentInput("")
      return;
    }
    toastNotify("Please Sign In before");
  };



  const addReply = async (cmtId) => {

    console.log("cmtId: ", cmtId)
    if (isLogin) {
      const res = await dispatch(replyCommentAction({ id: cmtId, content: replyInput, user: userId, recipe: recipeId }))
      if (res) await dispatch(getCommentAction(recipe._id))
      setReplyInput("")
      return;
    }

    toastNotify("Please Sign In before");

  };


  const [showReply, setShowReply] = useState(null)
  const handleClick = (event, index) => {
    if (showReply === null) {
      setShowReply(event.currentTarget)
    }
    else
      setShowReply(null)
  };



  return (
    <>
      <Box
        sx={{
          '& > legend': { mt: 5 },
          marginBottom: "50px"
        }}
      >
        <Grid container spacing={2} mt={3} component="form" onSubmit={addComment}>
          <Grid item xs={12}>

            <Typography component="legend">Rating</Typography>
            <StyledRating
              name="rate"
              id="rate"
              defaultValue={recipe.rate}
              getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
              precision={0.5}
              icon={<FavoriteIcon fontSize="inherit" />}
              emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            />

          </Grid>


          <Grid item xs={1} sx={{ marginTop: 'auto', marginBottom: 'auto' }}>

            <Avatar sx={{ marginLeft: 'auto' }} src={avt} />

          </Grid>
          <Grid item xs={10}>

            <TextField value={commentInput} onChange={(e) => onChangeState(e, "comment")} fullWidth label="Your Comment" id="content" name="content" />

          </Grid>
          <Grid item xs={1} sx={{ marginTop: 'auto', marginBottom: 'auto' }}>

            <Button type="submit" variant="outlined">Post</Button>

          </Grid>
        </Grid>
        {cmt.map((value, index) => {
          return (
            <Box mt={5} key={index}>
              <Grid container spacing={2}>
                <Grid item xs={1} sx={{ marginTop: 'auto', marginBottom: 'auto' }}>

                  <Avatar sx={{ marginLeft: 'auto' }} src={value.user.avt} />

                </Grid>
                <Grid item xs={9} sx={{ textAlign: 'left' }}>
                  <Typography><b>{value.user.username}</b></Typography>
                  <Typography>{value.content}</Typography>

                </Grid>
                <Grid item xs={2} sx={{ marginTop: 'auto', marginBottom: 'auto', textAlign: 'right' }}>

                  <Typography sx={{ color: 'gray' }}>{value.createdAt}</Typography>

                </Grid>
                <Box sx={{ textAlign: 'right', paddingTop: "0px", width: "100%" }}>

                  <Button variant="text" onClick={(e) => handleClick(e, value._id)}><ReplyIcon /> Reply</Button>
                  {showReply ? (
                    <>
                      <Grid container spacing={2} mt={1}>
                        <Grid item xs={1} sx={{ marginTop: 'auto', marginBottom: 'auto' }}>

                        </Grid>
                        <Grid item xs={1} sx={{ marginTop: 'auto', marginBottom: 'auto' }}>

                          <Avatar sx={{ marginLeft: 'auto' }} src={avt} />

                        </Grid>
                        <Grid item xs={9}>

                          <TextField value={replyInput} onChange={(e) => onChangeState(e, "reply")} fullWidth label="Your Reply" id="reply" name="reply" />

                        </Grid>
                        <Grid item xs={1} sx={{ marginTop: 'auto', marginBottom: 'auto' }}>

                          <Button type="button" onClick={() => addReply(value._id)} variant="outlined">Post</Button>

                        </Grid>
                      </Grid>
                    </>
                  ) : null}
                </Box>

                {value.replies.map((vl, idx) => {
                  return (
                    <Grid item xs={12} key={idx} className="listReply" sx={{ textAlign: 'right' }}>

                      <Grid container spacing={2}>
                        <Grid item xs={1} sx={{ marginTop: 'auto', marginBottom: 'auto' }}>
                        </Grid>
                        <Grid item xs={1} sx={{ marginTop: 'auto', marginBottom: 'auto' }}>

                          <Avatar sx={{ marginLeft: 'auto' }} src={vl.user.avt} />

                        </Grid>
                        <Grid item xs={8} sx={{ textAlign: 'left' }}>
                          <Typography><b>{vl.user.username}</b></Typography>
                          <Typography>{vl.content}</Typography>

                        </Grid>
                        <Grid item xs={2} sx={{ marginTop: 'auto', marginBottom: 'auto', textAlign: 'right' }}>

                          <Typography sx={{ color: 'gray' }}>15:34 12/07/2021</Typography>

                        </Grid>

                      </Grid>

                    </Grid>
                  )
                })}
              </Grid>
            </Box>
          )
        })}
      </Box>
    </>
  )
}

export default Comments;