import { React, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import myImage from "../../img/egg.png";

import './LoRe.css';
import { validateRegister } from "./Validate";
import { registerAction } from "../../../redux/actions/Auth/authActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const theme = createTheme();

export function Register() {

  const dispatch = useDispatch();
  const history = useHistory();

  const [value, setValue] = useState('Female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const register = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value
    const firstName = e.target.firstName.value
    const lastName = e.target.lastName.value
    const gender = e.target.gender.value
    const isValid = validateRegister({ email, password, firstName, lastName })
    if (!isValid) return;
    const res = await dispatch(registerAction({ username: firstName + lastName, firstName, lastName, password, email, gender }));
    if (res) {
      //history.push("/main")
      return;
    }
  };

  return (
    <Grid container height="100%">
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
              <Avatar
                src={myImage}
                sx={{ width: 128, height: 128 }}
              />
              <Typography component="h1" variant="h5">
                Welcome
              </Typography>
              <Box component="form" noValidate onSubmit={register} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box sx={{ minWidth: 120 }} className="gender">
                      <FormControl component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup
                          row
                          aria-label="gender"
                          name="gender"
                          id="gender"
                          value={value}
                          onChange={handleChange}
                        >
                          <FormControlLabel value="Female" control={<Radio />} label="Female" />
                          <FormControlLabel value="Male" control={<Radio />} label="Male" />
                          <FormControlLabel value="Other" control={<Radio />} label="Other" />
                        </RadioGroup>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      helperText="Password must have at least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 symbol"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox value="allowExtraEmails" color="primary" />}
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>
                </Grid>
                <Button className="btn-grud"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, color: 'black' }}
                >
                  Sign Up
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </Grid>
      <Grid className="imgRe" item xs={5}>

      </Grid>
    </Grid>
  );
}

export default Register;