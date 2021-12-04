import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Divider, CardContent, CardActions, Card, Button, Avatar, TextField, CardHeader } from '@mui/material';
import AVT from '../../img/Avt.jpg';
const states = [
    {
      value: 'HCM',
      label: 'Hồ Chí Minh'
    },
    {
      value: 'HN',
      label: 'Hà Nội'
    },
    {
      value: 'BT-VT',
      label: 'Bà Rịa - Vũng Tàu'
    }
  ];
const user = {
    avatar: AVT,
    city: 'Hồ Chí Minh',
    country: 'Việt Nam',
    jobTitle: 'Senior Developer',
    name: 'Thieu hoang',
    timezone: 'GTM-7'
  };
export const Information = (props) => {
    const [values, setValues] = useState({
        firstName: 'hoang',
        lastName: 'Thieu',
        email: 'thieuhoang@gmail.com',
        phone: '0967355370',
        state: 'Hồ Chí Minh',
        country: 'Việt Nam'
      });
    
      const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value
        });
      };
    return (
        <Box
        component="main"
        sx={{
            flexGrow: 1,
        }}
        >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <Card>
                <CardContent>
                <Box
                    sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column'
                    }}
                >
                    <Avatar
                    src={user.avatar}
                    sx={{
                        height: 64,
                        mb: 2,
                        width: 64
                    }}
                    />
                    <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="h5"
                    >
                    {user.name}
                    </Typography>
                    <Typography
                    color="textSecondary"
                    variant="body2"
                    >
                    {`${user.city} ${user.country}`}
                    </Typography>
                    <Typography
                    color="textSecondary"
                    variant="body2"
                    >
                    {user.timezone}
                    </Typography>
                </Box>
                </CardContent>
                <Divider />
                <CardActions>
                <Button
                    color="primary"
                    fullWidth
                    variant="text"
                >
                    Upload picture
                </Button>
                </CardActions>
            </Card>
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
          sx={{backgroundColor: '#e6e8ea'}}
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
                required
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
                label="Country"
                name="country"
                onChange={handleChange}
                required
                value={values.country}
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
                label="Select State"
                name="state"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined"
              >
                {states.map((option) => (
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
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
          >
            Save
          </Button>
        </Box>
      </Card>
    </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
    )
}


export default Information;