import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/core/ButtonUnstyled';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from 'react-awesome-modal';

import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { loginAction, sendLinkAction } from "../../../redux/actions/Auth/authActions";
import myImage from "../../img/egg.png";
import "./LoRe.css";
import { validateSendLink } from "./Validate";
import { width } from '@mui/system';

const theme = createTheme();

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const preventDefault = (event) => event.preventDefault();

const ButtonRoot = React.forwardRef(function ButtonRoot(props, ref) {
    const { children, ...other } = props;

    return (
        <svg width="150" height="50" {...other} ref={ref}>
            <polygon points="0,50 0,0 150,0 150,50" className="bg" />
            <polygon points="0,50 0,0 150,0 150,50" className="borderEffect" />
            <foreignObject x="0" y="0" width="150" height="50">
                <div className="content">{children}</div>
            </foreignObject>
        </svg>
    );
});

ButtonRoot.propTypes = {
    children: PropTypes.node,
};

const CustomButtonRoot = styled(ButtonRoot)(
    ({ theme }) => `
    overflow: visible;
    cursor: pointer;
    --main-color: ${theme.palette.mode === 'light' ? 'rgb(25,118,210)' : 'rgb(144,202,249)'
        };
    --hover-color: ${theme.palette.mode === 'light'
            ? 'rgba(25,118,210,0.04)'
            : 'rgba(144,202,249,0.08)'
        };
    --active-color: ${theme.palette.mode === 'light'
            ? 'rgba(25,118,210,0.12)'
            : 'rgba(144,202,249,0.24)'
        };
  
    & polygon {
      fill: transparent;
      transition: all 800ms ease;
      pointer-events: none;
    }
    
    & .bg {
      stroke: var(--main-color);
      stroke-width: 0.5;
      filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));
      fill: transparent;
    }
  
    & .borderEffect {
      stroke: var(--main-color);
      stroke-width: 2;
      stroke-dasharray: 150 600;
      stroke-dashoffset: 150;
      fill: transparent;
    }
  
    &:hover,
    &.${buttonUnstyledClasses.focusVisible} {
      .borderEffect {
        stroke-dashoffset: -600;
      }
  
      .bg {
        fill: var(--hover-color);
      }
    }
  
    &:focus,
    &.${buttonUnstyledClasses.focusVisible} {
      outline: none;
    }
  
    &.${buttonUnstyledClasses.active} { 
      & .bg {
        fill: var(--active-color);
        transition: fill 300ms ease-out;
      }
    }
  
    & foreignObject {
      pointer-events: none;
  
      & .content {
        font-family: Helvetica, Inter, Arial, sans-serif;
        font-size: 14px;
        font-weight: 200;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--main-color);
        text-transform: uppercase;
      }
  
      & svg {
        margin: 0 5px;
      }
    }`,
);


const SendLink = () => {

    const [value, setValue] = React.useState(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
        });
    };
    const dispatch = useDispatch();
    const history = useHistory();   
    
    const sendLink = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const isValidData = validateSendLink(email);
        console.log(isValidData)
        if (!isValidData) return;
        const res = await dispatch(sendLinkAction({ email: email }));
        console.log("res: ", res);
        
        // if (res) {
        //   if (res.roles.includes("ROLE_ADMIN")) {
        //     history.push("/admin");  
        //     return;
        //   }
        //   if (history.location.pathname === "/") {
        //     history.push("/main");
        //     return;
        //   }  
        //   history.goBack()
        //   return;
        // }
    
      }

    const [forgot, setForgot] = useState(false);
    const openForgot = () => setForgot(!forgot);
    const closeForgot = () => setForgot(false);

    const [reset, setReset] = useState(false);
    const openReset = () => setReset(!reset);
    const closeReset = () => setReset(false);

    const handleReset = () => {
        closeForgot();
        openReset();
    }

    return (
        <>
            <Grid container height="100%">
                <Grid className="photologin" item xs={5}>

                </Grid>
                <Grid item xs={7}>
                    <ThemeProvider theme={theme}>
                        <Container component="main" maxWidth="xs">
                            <CssBaseline />
                            <Box
                                sx={{
                                    marginTop: 5,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',

                                }}
                            >
                                <Avatar
                                    src={myImage}
                                    sx={{ width: 128, height: 128 }}
                                />
                                <Typography component="h1" variant="h5" sx={{mt:3}}>
                                    Please commit your Email
                                </Typography>
                                <Box component="form" noValidate onSubmit={sendLink} sx={{ mt: 3 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                id="email"
                                                label="Email Address"
                                                name="email"
                                                autoComplete="email"
                                            />
                                        </Grid>

                                    </Grid>

                                    <Button className="btn-grad"
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 1, mb: 4, color: 'black' }}
                                    >
                                        SEND
                                    </Button>

                                </Box>
                            </Box>
                        </Container>
                    </ThemeProvider>
                </Grid>
            </Grid>
            {/* <Modal visible={forgot} width="40%" height="50%" effect="fadeInUp" onClickAway={closeForgot}>
                <Box component="form" noValidate onSubmit={sendLink} autoComplete="off" mt={5}>
                    <p className="commit">Please commit your Email</p>
                    <TextField
                        sx={{ width: '80%', flexWrap: 'wrap', mb: 2 }}
                        id="email"
                        label="Email"
                        variant="outlined" />
                    <Button variant="contained" >Submit</Button>
                </Box>
            </Modal>
            <Modal
                visible={reset}
                width="40%"
                height="50%"
                effect="fadeInUp"
                onClickAway={closeReset}
            >
                <Box component="form" noValidate autoComplete="off" mt={5}>
                    <p className="commit">Reset your Password</p>
                    <TextField
                        sx={{ width: '80%', flexWrap: 'wrap', mb: 2 }}
                        id="newPass"
                        label="New Password"
                        variant="outlined" />
                    <TextField
                        sx={{ width: '80%', flexWrap: 'wrap', mb: 2 }}
                        id="confirm"
                        label="Confirm"
                        variant="outlined" />
                    <Button variant="contained">Submit</Button>
                </Box>
            </Modal> */}
        </>
    );
}

export default SendLink;