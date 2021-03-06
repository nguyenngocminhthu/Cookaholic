import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Box, Paper, Grid, Tabs, Tab, Card, CardActionArea, CardMedia, Typography, Rating, Divider, Stack } from '@mui/material';
import PropTypes from 'prop-types';
import Comments from './Comments'
import './PagePost.css'
import Clock from '../../img/clock.gif'
import {
  findRecipeByIdAction,
} from "../../../redux/actions/Recipe/recipe.action";
import { findFaByIdAction } from '../../../redux/actions/RecipeSave/recipeSaveAction';
import { styled } from '@mui/material/styles';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/core/ButtonUnstyled';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ScrollArea from 'react-scrollbar';

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

  const dispatch = useDispatch();
  const history = useHistory();
  const [value, setValue] = useState(0);

  const recipe = useSelector((state) => state.recipe.recipeDetail);

  useEffect(() => {
    const fetchRecipe = async () => {

      await dispatch(findRecipeByIdAction(props.match.params.idRecipe));
      console.log("param: ", props.match.params.idRecipe)
    };

    fetchRecipe();

  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleGoBack = () => {
    history.goBack();
    return;
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
            <Stack sx={{ marginTop: ' 20px' }} direction="row" spacing={2}>
              <div className="timeclock">
                <WatchLaterIcon sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '12px' }} />
              </div>
              <p style={{ marginTop: '10px' }}>COOK: {recipe.time} ph??t</p>

              <div className="timeclock">
                <RestaurantMenuIcon sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '12px' }} />
              </div>
              <p style={{ marginTop: '10px' }}>SERVE: {recipe.serving} ng?????i</p>

            </Stack>
            <p className='Decitext'>{recipe.title}</p>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ marginTop: '20px' }}>
          <Grid item xs={6} md={5}>
            <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }} variant="h5" component="h4">
              Ingredients
            </Typography>
            <b className="hr anim"></b>
            <div className="ingredients">
              <h2>Nguy??n li???u</h2>
              <ul>
                {(recipe._id) ? (
                  recipe.ingre.map((vl, idx) => {
                    return (
                      <div key={idx}>
                        <li>{vl}</li>
                      </div>
                    )
                  })
                )

                  : (<></>)

                }

              </ul>

            </div>
          </Grid>
          <Grid item xs={6} md={7}>

            <Typography sx={{ fontWeight: 'bold', textAlign: 'left' }} variant="h5" component="h4">
              Method
            </Typography>
            <b className="hr anim"></b>
            <div style={{ textAlign: 'left' }}>
              <h2>V??o b???p n??o!!!</h2>
              <ol>
                {(recipe._id) ? (
                  recipe.directions.map((vl, idx) => {
                    return (
                      <div key={idx}>
                        <li>{vl}</li>
                      </div>
                    )
                  })
                )

                  : (<></>)

                }

              </ol>
            </div>
          </Grid>
        </Grid>
      </Box>
      <ScrollArea className="area2" smoothScrolling >
        <Comments className="items" recipe={recipe} />
      </ScrollArea>

    </div>
  );
}

export default PagePost;