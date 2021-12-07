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
                                            Thực phẩm Đài Loan là sự pha trộn giữa hương vị và sự đổi mới. 
                                            Do lịch sử của Đài Loan với một vài ảnh hưởng nước ngoài khác nhau chiếm hòn đảo và luôn thực thi có truyền thống trên đảo.
                                            Người Đài Loan yêu thích thức ăn của họ, lời chào phổ biến ở Đài Loan không phải là "Bạn khỏe không?" thay vào đó, "Bạn đã no chưa?" (呷飽未?)
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
                                                Ẩm thực VIỆT NAM!
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Văn hóa ẩm thực là nét văn hóa tự nhiên hình thành trong cuộc sống. Đối với nhiều dân tộc,
                                                quốc gia, ẩm thực không chỉ là nét văn hóa về vật chất mà còn là văn hóa về tinh thần.
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
                        <p className="noidung">Cookaholic là nơi chia sẻ các công thức nấu ăn để giúp bạn nấu các bữa ăn ngon với ít căng thẳng và nhiều niềm vui hơn.
                            Chúng tôi cung cấp công thức nấu ăn và tư vấn nấu ăn cho đầu bếp tại nhà, bằng đầu bếp tại nhà.
                            Giúp tạo ra "Thức ăn ngon" cho mọi gia đình.</p>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <img width="40%" src={DC2} />
                                <p className="noidung">Nhóm sinh viên thực hiện đến từ trường Đại học Sư Phạm Kĩ Thuật Tp.HCM</p>
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