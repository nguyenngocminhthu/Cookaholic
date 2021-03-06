import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, DialogContent } from '@mui/material';
import FLeft from '../img/TaiwanFood.jpg'
import FCenter from '../img/About2.jpg'
import FRight from '../img/ParisFood.jpg'
import DC from '../img/About4.png'
import DC1 from '../img/About5.jpg'
import DC2 from '../img/FlowerDraw.png'
import Header from '../components/Header';

import '../css/about.css'
import { height } from '@mui/system';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    height: 515,
    color: theme.palette.text.secondary,
    background: '#dcdcdc',
}));
const About = () => {
    return (
        <div className="ab">
            <Header />
            <div ClassName="Content">

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={1}>
                        <Grid item xs={4}>
                            <Item>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="265px"
                                            image={FLeft}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Taiwan Food
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                            Th???c ph???m ????i Loan l?? s??? pha tr???n gi???a h????ng v??? v?? s??? ?????i m???i. 
                                            Do l???ch s??? c???a ????i Loan v???i m???t v??i ???nh h?????ng n?????c ngo??i kh??c nhau chi???m h??n ?????o v?? lu??n th???c thi c?? truy???n th???ng tr??n ?????o.
                                            Ng?????i ????i Loan y??u th??ch th???c ??n c???a h???, l???i ch??o ph??? bi???n ??? ????i Loan kh??ng ph???i l?? "B???n kh???e kh??ng?" thay v??o ????, "B???n ???? no ch??a?" (??????????)
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="345px"
                                            image={FCenter}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                ???m th???c VI???T NAM!
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                V??n h??a ???m th???c l?? n??t v??n h??a t??? nhi??n h??nh th??nh trong cu???c s???ng. ?????i v???i nhi???u d??n t???c,
                                                qu???c gia, ???m th???c kh??ng ch??? l?? n??t v??n h??a v??? v???t ch???t m?? c??n l?? v??n h??a v??? tinh th???n.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image={FRight}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div" sx={{marginTop: '8px'}}>
                                                France Food!!!
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
                <Grid
                    marginTop="10px"
                    container spacing={2}>
                    <Grid item xs={8}>
                        <p className="noidung">Cookaholic l?? n??i chia s??? c??c c??ng th???c n???u ??n ????? gi??p b???n n???u c??c b???a ??n ngon v???i ??t c??ng th???ng v?? nhi???u ni???m vui h??n.
                            Ch??ng t??i cung c???p c??ng th???c n???u ??n v?? t?? v???n n???u ??n cho ?????u b???p t???i nh??, b???ng ?????u b???p t???i nh??.
                            Gi??p t???o ra "Th???c ??n ngon" cho m???i gia ????nh.</p>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <img width="40%" src={DC2} />
                                <p className="noidung">Nh??m sinh vi??n th???c hi???n ?????n t??? tr?????ng ?????i h???c S?? Ph???m K?? Thu???t Tp.HCM</p>
                            </Grid>
                            <Grid item xs={6}>
                                <a className="titleQ">
                                    Kitchen
                                </a><br />
                                <a className="quote">
                                    A gathering place for friends and family. A place where memories are homemade and seasoned with love.
                                </a>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <h1 className="Decorh1">Dinner Winner</h1>
                        <img width="80%" src={DC} />
                        <h1>Happy to Cook!!!</h1>
                        <p className="noidung">Ready to cook?</p>
                        <p className="noidung"></p>
                        <img src={DC1} />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default About;