import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { getAllRecipeAction, filterRecipeAction } from "../../redux/actions/Recipe/recipe.action"
import { getAllTopicAction } from "../../redux/actions/Topic/topic.action"
import Checkbox from '@mui/material/Checkbox';
import Header from '../components/Header';
import { NavLink } from "react-router-dom";
import { FaPlusCircle, FaPlayCircle } from "react-icons/fa";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconChef from '../img/iconcheff.png'
import { Card, Box, CardHeader, CardMedia, CardContent, CardActions, Grid, Divider } from '@mui/material';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../css/main.css';
import { getStatusAction, addFavoriteAction, getFavoriteAction } from "../../redux/actions/RecipeSave/recipeSaveAction"
import toastNotify from "../Toastify/toastNotify";



const Main = (props) => {
    const dispatch = useDispatch();

    const isLogin = useSelector((state) => state.auth.isLogin)
    const ADDREC = () => {
        if (isLogin)
            return (
                <div className='btnadd'>
                    <NavLink className="addrec" to="/addrecipes" value="addrecipe"><FaPlusCircle /> ADD RECIPE</NavLink>
                </div>
            );
        return (
            <></>
        );
    }

    const [checked, setChecked] = useState([1]);
    const filter = async (id) => {
        await dispatch(filterRecipeAction(id))
    }
    const handleToggle = (value) => () => {

        const currentIndex = checked.indexOf(value);

        const newChecked = [...checked];


        const idList = { id: [value] }
        if (currentIndex === -1) {
            newChecked.push(value);
            newChecked.shift(value);
            filter(idList);
        } else {
            newChecked.splice(currentIndex, 1);
            newChecked.push(currentIndex);
            filter();
        }

        setChecked(newChecked);
    };

    const menus = useSelector((state) => state.recipe.listRecipe) || []
    const [status, setStatus] = useState();

    useEffect(() => {
        dispatch(getAllRecipeAction({ status: 0 }))
        console.log("log at ==> Main.js => status: ", status);
    }, [status])
    useEffect(() => {

        console.log("log at ==> Main.js => menus: ", menus);
    }, [menus])

    const user = useSelector((state) => state.auth.user);
    useEffect(() => {
        console.log("log at => Main ==> faPost: ", user)
        if (user._id) {
            const fetchFaList = async () => {
                await dispatch(getFavoriteAction(user._id))
            }
            fetchFaList();
        }
    }, [user])
    useEffect(() => {
        //find by id
    }, [])

    const topics = useSelector((state) => state.topic.listTopic) || []

    useEffect(() => {
        dispatch(getAllTopicAction())
    }, [])
    useEffect(() => {
        console.log("log at ==> Main.js => topics: ", topics);
    }, [topics])

    const userID = useSelector((state) => state.auth.user._id) || []

    const faPost = useSelector((state) => state.recipesave.listRecipeSave) || []

    useEffect(() => {

        console.log("log at ==> FavoritePost.js => faPost: ", faPost);
    }, [])


    console.log("userID: ", userID);

    const recipeID = (value) => {
        console.log("recipeID: ", value)
        return value;
    }
    let stt;
    const handleSaveRecipe = async (value) => {
        if (!userID.length) {
            toastNotify("Please Sign In before");
            return;
        }
        stt = await dispatch(getStatusAction(recipeID(value), userID))
        console.log("log at ==> Main ==> get status: ", stt)
        if (stt === 0 || stt === 1) await saveRecipe(value, stt);
        console.log("log at => Main => getStatus => value: ", recipeID(value), userID);
    }

    const saveRecipe = async (value, stt) => {
        const res = await dispatch(addFavoriteAction(recipeID(value), userID, { status: stt }))
        if (res) await dispatch(getAllRecipeAction());
        await dispatch(getFavoriteAction(userID))

    };



    return (
        <div className="main">
            <Header />
            <div className="row">
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={3} sx={{ display: 'flex' }}>
                            <h2 className='h2repices'>Repices</h2>
                            <img style={{ width: '20%', height: '70%' }} src={IconChef} />
                        </Grid>
                        <Grid item xs={6}>
                            <form class="example" action="/action_page.php">
                                <input type="text" placeholder="Search repeipes and more..." name="search" />
                                <button type="submit"><i class="fa fa-search"></i></button>
                            </form>
                        </Grid>
                        <Grid item xs={3}>
                            <ADDREC />
                        </Grid>
                    </Grid>
                </Box>
                <div className="col-3">
                    <strong >Filter by:                              </strong>
                    <Divider variant="middle" />
                    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', position: 'unset' }}>
                        {topics.map((vl, idx) => {
                            const labelId = `checkbox-list-secondary-label-${vl.name}`;
                            return (
                                <ListItem
                                    key={idx}
                                    secondaryAction={
                                        <Checkbox
                                            edge="end"
                                            onChange={handleToggle(vl._id)}
                                            checked={checked.indexOf(vl._id) != -1}
                                            inputProps={{ 'aria-labelledby': labelId }}

                                        />
                                    }
                                    disablePadding
                                >
                                    <ListItemButton>
                                        <ListItemText id={labelId} primary={`${vl.name}`} />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>
                </div>

                <div className="col-9">

                    <Grid container>
                        {menus.map((value, index) => {
                            return (

                                <>
                                    <Grid key={index} item xs={4} sm={6} md={3} margin={"30px"}>

                                        <Card className="cardRec" sx={{ minWidth: 240, minHeight: 400, position: "relative" }} >
                                            <CardHeader
                                                className="customHeader"
                                                avatar={
                                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                        R
                                                    </Avatar>
                                                }
                                                action={
                                                    <IconButton aria-label="settings">
                                                        <MoreVertIcon />
                                                    </IconButton>
                                                }
                                                title={value.name}
                                                subheader={value.createdAt}
                                            />
                                            <CardMedia
                                                component="img"
                                                height="194"
                                                width="80%"
                                                image={value.image}
                                                alt={value.name}
                                            />
                                            <CardContent>
                                                <Typography variant="body2" color="text.secondary">
                                                    {value.title}
                                                </Typography>
                                            </CardContent>
                                            <CardActions disableSpacing sx={{ position: "absolute", bottom: 0, right: 0 }}>

                                                <IconButton onClick={() => handleSaveRecipe(recipeID(value._id))}>
                                                    <FavoriteBorderIcon />

                                                </IconButton>
                                                <IconButton>
                                                    <NavLink
                                                        to={`/pagepost/${value._id}`}>
                                                        <FaPlayCircle />
                                                    </NavLink>
                                                </IconButton>
                                            </CardActions>
                                        </Card>


                                    </Grid >

                                </>


                            )
                        })}

                    </Grid>

                </div>
            </div>

            <div className="footer">
                <p>Resize the browser window to see how the content respond to the resizing.</p>
            </div>

        </div>
    );






}

export default Main;