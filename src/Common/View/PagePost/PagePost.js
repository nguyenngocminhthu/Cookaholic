import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Box, Paper, Grid, Tabs, Tab, Card, CardActionArea, CardMedia, Typography, Rating, Divider, Stack  } from '@mui/material';
import PropTypes from 'prop-types';
import Comments from './Comments'
import './PagePost.css'
import Clock from '../../img/clock.gif'
import {
  findRecipeByIdAction,
} from "../../../redux/actions/Recipe/recipe.action";
import { styled } from '@mui/material/styles';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/core/ButtonUnstyled';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
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

const SvgButton = React.forwardRef(function SvgButton(props, ref) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} ref={ref} />;
});


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const PagePost = (props) => {

  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
    return;
  };

  const dispatch = useDispatch();

  const recipe = useSelector((state) => state.recipe.recipeDetail);
  console.log("log at => pagepost => recipe: ", recipe)


  useEffect(() => {
    const fetchRecipe = async () => {
      await dispatch(findRecipeByIdAction(props.match.params.idRecipe));
      console.log("param: ", props.match.params.idRecipe)
    };

    fetchRecipe();
  }, []);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="Center">
      <Box sx={{ flexGrow: 1, marginTop: 5 }}>
          <Box className="btnBack">
            <SvgButton onClick={() => { handleGoBack() }}>Go Back</SvgButton>
          </Box>
        <Grid container spacing={2}>
          <Grid item xs={6} md={5}>
            <Card sx={{ maxWidth: 1000 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={recipe.image}
                  alt="green iguana"
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6} md={7}>
          <img className='Clock' src={Clock} align="right" />  
              <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }} variant="h4" component="h3">
                {recipe.name}
              </Typography>  
              <Box sx={{ display: 'flex' }} spacing={1}>
                <Rating sx={{ color: '#d54215', marginRight: '10px' }} name="half-rating" value={recipe.rate} precision={0.5} readOnly />
                <span>{recipe.rating}</span>
                <Divider orientation="vertical" sx={{ paddingLeft: '10px', marginRight: '10px' }} flexItem />
                <span>1 Review</span>
              </Box>
              <Stack sx={{ marginTop: ' 20px'}}direction="row" spacing={2}>
                <div className="timeclock">
                  <WatchLaterIcon sx={{position:'absolute', left: '50%', transform: 'translateX(-50%)', top: '12px'}}/>
                </div>
                <p style={{ marginTop: '10px'}}>COOK: {recipe.time} phút</p>

                <div className="timeclock">
                  <RestaurantMenuIcon sx={{position:'absolute', left: '50%', transform: 'translateX(-50%)', top: '12px'}}/>
                </div>
                <p style={{ marginTop: '10px'}}>SERVER: {recipe.serving} người</p>

              </Stack>
              <p className='Decitext'>{recipe.title}</p>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{marginTop: '20px'}}>
          <Grid item xs={6} md={5}>
              <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }} variant="h5" component="h4">
                Ingredients
              </Typography>  
              <b className="hr anim"></b>
              <div className="ingredients">
                    <h2>Nguyên liệu</h2>
                    <ul>
                      <li>1/2 chén (115g) bơ không muối,làm mềm đến nhiệt độ phòng</li>
                      <li>1/2 chén (100g) đường hạt</li>
                      <li>1/4 chén (50g)đóng gói đường nhạt hoặc nâu sẫm</li>
                      <li>2 quả trứnglớn, ở nhiệt độ phòng</li>
                      <li>1/2 chén (120g) sữa chua*</li>
                      <li>2 muỗng cà phê chiết xuất vani nguyên chất</li>
                      <li>Vỏ của 2 quả cam</li>
                      <li>1 và 3/4 chén (219g) bột đa năng (thìa và san lấp mặt bằng)</li>
                      <li>1 muỗng cà phê baking soda</li>
                      <li>1 muỗng cà phê bột nở</li>
                      <li>1/2 muỗng cà phê quế xay</li>
                      <li>1/2 muỗng cà phê muối</li>
                      <li>2 muỗng canh (30ml) nước cam</li>
                      <li>2 Muỗng canh (30ml) sữa (bất kỳ loại nào)</li>
                      <li>1 và 1/2 chén(185g) quả nam việt quất tươi hoặc đông lạnh (không tan băng)</li>
                    </ul>
                    <h2>Men cam</h2>
                    <ul>
                      <li>1 chén (120g) đường bánh kẹo</li>
                      <li>3 Muỗng canh (45ml) nước cam</li>
                    </ul>

                  </div>
          </Grid>
          <Grid item xs={6} md={7}>
         
              <Typography sx={{ fontWeight: 'bold', textAlign: 'left'}} variant="h5" component="h4">
                Method   
              </Typography>  
              <b className="hr anim"></b>
              <div style={{ textAlign: 'left'}}>
                    <h2>Vào bếp nào!!!</h2>
                    <ol>
                      <li>Làm nóng lò nướng đến 425 ° F (218 ° C). Phun một chảo muffin 12 đếm bằng bình xịt chống dính hoặc lót bằng lớp lót cupcake.
                        Đặt sang một bên.</li>
                      <li>Trong một bát trung bình sử dụng máy trộn cầm tay hoặc đứng được trang bị một phần đính kèm mái chèo,
                        đánh bơ ở tốc độ cao cho đến khi mịn và kem, khoảng 1 phút. Thêm đường hạt và nâu và đánh lên cao cho đến khi kem, khoảng 2 phút đầy đủ.
                        Cạo xuống hai bên và đáy bát khi cần thiết. Thêm trứng, sữa chua và chiết xuất vani. Đánh ở tốc độ trung bình trong 1 phút,
                        sau đó tăng tốc độ cao cho đến khi hỗn hợp được kết hợp và đồng nhất trong kết cấu.
                        Cạo xuống hai bên và đáy bát khi cần thiết. Sau đó, đánh trong vỏ cam cho đến khi kết hợ</li>
                      <li>Trong một cái bát lớn, ném bột mì, baking soda, bột nở, quế và muối.
                        Đổ các thành phần ướt vào các thành phần khô và từ từ trộn với máy đánh trứng.
                        Thêm nước cam và sữa, nhẹ nhàng đánh cho đến khi kết hợp và khối u nhỏ vẫn còn.
                        Gấp trong quả nam việt quất bằng thìa gỗ hoặc thìa cao su.</li>
                      <li>Thìa bột vào chảo muffin đã chuẩn bị, lấp đầy chúng đến đầu.
                        Đầu bột với một hoặc hai quả nam việt quất bổ sung, để có vẻ ngoài nếu muốn. (Tôi thích màu sắc trên đầu bánh nướng xốp khi làm điều này.)
                        Nướng trong 5 phút ở 425 ° F (218 ° C), sau đó giữ bánh nướng xốp trong lò, hạ nhiệt độ lò xuống 350 ° F (177 ° C) và nướng
                        thêm 18-20 phút hoặc cho đến khi một cây tăm được đưa vào trung tâm trở nên sạch sẽ.
                        Tổng thời gian những chiếc bánh nướng xốp này lấy trong lò nướng là khoảng 23-25 phút.</li>
                      <li>Trong khi bánh nướng xốp đang nguội trong vài phút, hãy làm men bằng cách đánh các thành phần men lại với nhau.
                        Rưới lên bánh nướng xốp ấm áp. Để nguội một thời gian ngắn trước khi phục vụ.</li>
                    </ol>
                  </div>
          </Grid>
        </Grid>
      </Box>
      <Comments recipe={recipe} />
    </div>
  );
}

export default PagePost;