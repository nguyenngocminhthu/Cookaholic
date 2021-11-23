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
import FLeft from '../img/About1.jpg'
import FCenter from '../img/About2.jpg'
import FRight from '../img/About3.jpg'
import DC from '../img/About4.png'
import DC1 from '../img/About5.jpg'
import DC2 from '../img/FlowerDraw.png'

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
            <div ClassName="Content">

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={1}>
                        <Grid item xs={4}>
                            <Item>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={FLeft}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Bún bò HUẾ
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Tại Huế, món này được gọi đơn giản là “bún bò”. Các địa phương khác gọi là “bún bò Huế” để chỉ xuất xứ của món ăn này.
                                                Món ăn có nguyên liệu chính là bún, thịt bắp bò, giò heo, cùng nước dùng có màu đỏ đặc trưng.
                                                Đôi khi tô bún còn được thêm vào thịt bò tái, chả bò và các loại nguyên liệu khác tùy theo sở thích của người nấu.
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
                                            height="140"
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
                                            height="140"
                                            image={FRight}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Cơm gia đình
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Trong cuộc đời mỗi con người, ai ai cũng được sinh ra và lớn lên trong một gia đình chan chứa yêu thương.
                                                Ở nơi ấy, sự che chở, nuôi dưỡng của cha mẹ, sự đùm bọc của tình thân đã chắp cánh cho mỗi người lớn lên và vững bước trên những nẻo đường của cuộc đời.
                                                Gia đình, điểm tựa thiêng liêng trong cuộc đời mỗi người, nơi mà tuổi thơ ta lớn lên...!!!
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
                        <h1>Dinner Winner</h1>
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