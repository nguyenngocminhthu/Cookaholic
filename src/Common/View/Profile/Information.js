import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography, Divider, CardContent, CardActions, Card, Button, Avatar, TextField, CardHeader } from '@mui/material';
import { updateUserAction } from "../../../redux/actions/User/user.action"
import { uploadImagesToFirebase } from "../../utils/imgFirebase"
import { useDispatch } from "react-redux";
import ImageUploading from 'react-images-uploading';
import EditIcon from '@mui/icons-material/Edit';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import './Profile.css';
const gender = [
  {
    value: 'Male',
    label: 'Male'
  },
  {
    value: 'Female',
    label: 'Female'
  },
  {
    value: 'Other',
    label: 'Other'
  }
];

export const Information = (props) => {

  const { user } = props;
  useEffect(() => {
    console.log("log at => Information ==> user: ", user)
  }, [user])
  useEffect(() => {
    console.log("log at => Information ==> user: ", user)
  }, [])

  const dispatch = useDispatch();
  const [images, setImages] = useState([]);

  const [values, setValues] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
    description: user.description,
    gender: user.gender,
    avt: user.avt,
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const onChangeImg = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const updateProfile = async (e) => {
    e.preventDefault();
    console.log("images.length: ", images.length)
    if (images.length > 0) {

      const url = await dispatch(uploadImagesToFirebase([images[0].file], "Avatar"));
      console.log("url: ", url)
      console.log("log at ==> Information ==> url: ", url);
      if (url) {
        await dispatch(
          updateUserAction(user._id, { username: values.firstName + values.lastName, firstName: values.firstName, lastName: values.lastName, avt: url, description: values.description, email: values.email, phone: values.phone, gender: values.gender })

        );
      }


    }
    else {
      await dispatch(
        updateUserAction(user._id, { username: values.firstName + values.lastName, firstName: values.firstName, lastName: values.lastName, description: values.description, email: values.email, phone: values.phone, gender: values.gender })
      );

    }


  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
      }}
    >
      <Container maxWidth="lg">
        <form
          onSubmit={updateProfile}
          autoComplete="off"
          noValidate
          {...props}
        >
          <Grid
            container
            spacing={3}
          >

            <Grid
              height="100%"
              item
              lg={4}
              md={6}
              xs={12}
            >

              <Card>
                <CardContent className="cardInfo">
                  <Box

                    sx={{
                      alignItems: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Avatar
                      className="avt"
                      src={user.avt}
                      sx={{
                        height: 100,
                        mb: 3,
                        width: 100
                      }}
                    />
                    <ImageUploading
                      images={images}
                      multiple={false}
                      value={images}
                      onChange={onChangeImg}
                      dataURLKey="data_url"
                      maxNumber="1"
                    >
                      {
                        ({
                          imageList,
                          onImageUpload,
                          onImageRemove,
                        }) => (
                          // write your building UI
                          <div className="upload_image-wrapper">
                            <button
                              type="button"
                              onClick={onImageUpload}
                              className="editAvt"
                            >
                              <EditIcon />
                            </button >

                            {
                              imageList.map((image, index) => (
                                <div key={index} className="image-item">
                                  <img src={image['data_url']} alt="" width="100" />
                                  <div className="image-item__btn-wrapper">
                                    <button className="removeImg" type="button" onClick={() => onImageRemove(index)}><RemoveCircleOutlineIcon /></button>
                                  </div>
                                </div>
                              ))
                            }


                          </div >
                        )}
                    </ImageUploading >
                    <Typography
                      color="textPrimary"
                      gutterBottom
                      variant="h5"
                    >
                      {`${user.firstName} ${user.lastName}`}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="body2"
                    >
                      {values.description}
                    </Typography>
                    <Typography
                      color="textPrimary"
                      gutterBottom
                      variant="p"
                    >
                      <span className="infor-left">Email:  </span>{values.email}
                    </Typography>
                    <Typography
                      color="textPrimary"
                      gutterBottom
                      variant="p"
                    >
                      <span className="infor-left">Phone number:  </span>{values.phone}
                    </Typography>
                    <Typography
                      color="textPrimary"
                      gutterBottom
                      variant="p"
                    >
                      <span className="infor-left">Gender:  </span>{values.gender}
                    </Typography>


                  </Box>
                </CardContent>


              </Card>
            </Grid>
            <Grid
              item
              lg={8}
              md={6}
              xs={12}
            >

              <Card>
                <CardHeader
                  subheader="The information can be edited"
                  title="Profile"
                  sx={{ backgroundColor: '#FFF8F1' }}
                />
                <Divider />
                <CardContent>
                  <Grid
                    container
                    spacing={3}
                  >
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        helperText="Please specify the first name"
                        label="First name"
                        name="firstName"
                        onChange={handleChange}
                        required
                        value={values.firstName}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        label="Last name"
                        name="lastName"
                        onChange={handleChange}
                        required
                        value={values.lastName}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        onChange={handleChange}
                        disabled
                        value={values.email}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        onChange={handleChange}
                        type="number"
                        value={values.phone}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        label="Description"
                        name="description"
                        onChange={handleChange}
                        required
                        value={values.description}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        label="Select Gender"
                        name="gender"
                        onChange={handleChange}
                        required
                        select
                        SelectProps={{ native: true }}
                        value={values.gender}
                        variant="outlined"
                      >
                        {gender.map((option) => (
                          <option
                            key={option.value}
                            value={option.value}
                          >
                            {option.label}
                          </option>
                        ))}
                      </TextField>
                    </Grid>
                  </Grid>
                </CardContent>


              </Card>

            </Grid>

          </Grid>
          <div style={{ marginTop: "20px" }}>
            <button style={{ float: 'right' }} className="button-74" role="button" type="submit">Save</button>
          </div>
        </form>
      </Container>
    </Box >
  )
}


export default Information;