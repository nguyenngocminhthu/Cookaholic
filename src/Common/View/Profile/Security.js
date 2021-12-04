import React,{ useState } from 'react'
import { Box, Grid, Button, Card, CardContent, CardHeader, Divider,TextField, Container } from '@mui/material';
import SecurityIMG from '../../img/changepass.jpg';
import './Profile.css'

export const Security = (props) => {
    const [values, setValues] = useState({
        password: '',
        confirm: ''
      });
    
      const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value
        });
      };
    return (
        <>
        <Container maxWidth="lg">
          <Box sx={{ pt: 2 }}>
          <form>
            <Card sx={{width: '780px'}}>
                <CardHeader
                subheader="Update password"
                title="Password"
                sx={{backgroundColor: '#FFF8F1'}}
                />
                <Divider />
                <CardContent>
                <Grid container spacing={2}>
                <Grid item xs={5}>
                    <h4>Password must contain:</h4>
                    <li>At least 6 characters</li>
                    <img src={SecurityIMG} width='40%'/>
                </Grid>
                <Grid item xs={7}>
                <TextField
                    fullWidth
                    label="Old Password"
                    margin="normal"
                    name="password"
                    onChange={handleChange}
                    type="password"
                    value={values.password}
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    label="New Password"
                    margin="normal"
                    name="password"
                    onChange={handleChange}
                    type="password"
                    value={values.password}
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