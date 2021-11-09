import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import myImage from "../../img/egg.png";

import './LoRe.css';
import { validateRegister } from "./validate";
import { registerAction } from "../../../redux/actions/Auth/authActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const theme = createTheme();

export function Register() {
  const [value, setValue] = React.useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const register = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value
    const firstName = e.target.firstName.value
    const lastName = e.target.lastName.value
    const isValid = validateRegister({ email, password, firstName, lastName })
    if (!isValid) return;
    const res = await dispatch(registerAction({ username: firstName + " " + lastName, password, email }));
    if (res) {
      //history.push("/main")
      return;
    }
  };
  const [sex, setSex] = React.useState('');

  const handleChange = (event) => {
    setSex(event.target.value);
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
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Sex</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={sex}
                          label="Sex"
                          onChange={handleChange}
                        >
                          <MenuItem value={1}>Male</MenuItem>
                          <MenuItem value={2}>Female</MenuItem>
                        </Select>
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
                  sx={{ mt: 3, mb: 2 }}
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