/* eslint-disable react-hooks/rules-of-hooks */
import React, { PureComponent, useState, useEffect } from 'react'
import { CommentSection } from 'react-comments-section'
import 'react-comments-section/dist/index.css'
import data from "./data.json"
import CustomInput from "./customInput"
import { useDispatch } from 'react-redux'
import { Rating, Typography, Box, Divider, TextField } from '@mui/material';

const Comments = (props) => {

  const { recipe } = props;
  useEffect(() => {
    console.log("log at => Comment ==> recipe: ", recipe)
  }, [recipe])
  useEffect(() => {
    console.log("log at => Comment ==> recipe: ", recipe)
  }, [])

  const dispatch = useDispatch();

  const [comment, setComment] = useState(data)
  const userId = "01a"
  const avatarUrl = "https://ui-avatars.com/api/name=Riya&background=random"
  const name = "xyz"
  const signinUrl = "/signin"
  const signupUrl = "/signup"
  let count = 0
  comment.map(i => { count += 1; i.replies && i.replies.map(i => count += 1) })

  const customInputFunc = (props) => {

    return <CustomInput parentId={props.parentId}
      cancellor={props.cancellor}
      value={props.value} edit={props.edit}
      submit={props.submit} handleCancel={props.handleCancel} />
  }

  return (
    <div className="commentSection">
      <Box
        sx={{
          width: '100%',
          marginBottom: '10px'
        }}
      >
        <h1>RATTING</h1>
        <Box sx={{ display: 'flex', marginBottom: '15px' }} spacing={1}>
          <Typography component="legend">Ratting: </Typography>
          <Rating sx={{ color: '#d54215', marginRight: '10px' }} name="half-rating" defaultValue={recipe.rate} precision={0.5} />
          <Divider orientation="vertical" sx={{ paddingLeft: '10px', marginRight: '10px' }} flexItem />
          <Typography component="legend">{count} Comments</Typography>
        </Box>

      </Box>
      <CommentSection currentUser={userId && { userId: userId, avatarUrl: avatarUrl, name: name }} commentsArray={comment}
        setComment={setComment} signinUrl={signinUrl} signupUrl={signupUrl} customInput={customInputFunc} />
    </div>)
}

export default Comments;