import React, { useState, useEffect } from 'react'
import { Box, Grid, Button, Card, CardContent, CardHeader, Divider, TextField, Container } from '@mui/material';
import SecurityIMG from '../../img/changepass.jpg';
import './Profile.css'
import { useDispatch } from "react-redux";
import { changePassAction } from "../../../redux/actions/User/user.action";
import toastNotify from "../../Toastify/toastNotify";

export const Security = (props) => {
  const dispatch = useDispatch();

  const { user } = props;
  useEffect(() => {
    console.log("log at => Information ==> user: ", user)
  }, [user])
  useEffect(() => {
    console.log("log at => Information ==> user: ", user)
  }, [])

  const [values, setValues] = useState({
    oldPass: '',
    newPass: '',
    confirm: '',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  function strCompare(str1, str2) {
    return str1 === str2;
  }
  console.log(strCompare(values.newPass, values.confirm));
  const changePass = async (e) => {
    e.preventDefault();
    if (strCompare(values.newPass, values.confirm) === true) {
      await dispatch(
        changePassAction(user._id, { oldPass: values.oldPass, newPass: values.newPass })
      );
    }
    else {
      toastNotify("Please check your confirm Password");
    }

  };

  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ pt: 2 }}>
          <form onSubmit={changePass}>
            <Card sx={{ width: '780px' }}>
              <CardHeader
                subheader="Update password"
                title="Password"
                sx={{ backgroundColor: '#FFF8F1' }}
              />
              <Divider />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={5}>
                    <h4>Password must contain:</h4>
                    <li>At least 6 characters</li>
                    <img src={SecurityIMG} width='40%' />
                  </Grid>
                  <Grid item xs={7}>
                    <TextField
                      fullWidth
                      label="Old Password"
                      margin="normal"
                      name="oldPass"
                      onChange={handleChange}
                      type="password"
                      value={values.oldPass}
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      label="New Password"
                      margin="normal"
                      name="newPass"
                      onChange={handleChange}
                      type="password"
                      value={values.newPass}
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      label="Confirm password"
                      margin="normal"
                      name="confirm"
                      onChange={handleChange}
                      type="password"
                      value={values.confirm}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </CardContent>
              <Divider />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  p: 2
                }}
              >
                <button className="button-74" role="button" type="submit">Change My Password</button>
              </Box>
            </Card>
          </form>
        </Box>
      </Container>
    </>
  )
}
export default Security;