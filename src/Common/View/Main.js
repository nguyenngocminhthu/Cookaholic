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

import Footer from '../components/Footer'
import '../css/main.css';
import { getStatusAction, addFavoriteAction, getFavoriteAction } from "../../redux/actions/RecipeSave/recipeSaveAction"
import toastNotify from "../Toastify/toastNotify";



const Main = (props) => {

    let stt;
    const dispatch = useDispatch();

    const [checked, setChecked] = useState([1]);
    const [status, setStatus] = useState();
    const [clickFaPost, setClickFaPost] = useState(false)
    const [searchText, setSearchText] = useState("")
    const [newMenus, setNewMenus] = useState([])
    const isLogin = useSelector((state) => state.auth.isLogin)
    const menus = useSelector((state) => state.recipe.listRecipe) || []
    const user = useSelector((state) => state.auth.user);
    const topics = useSelector((state) => state.topic.listTopic) || []
    const userID = useSelector((state) => state.auth.user._id) || []
    const faPost = useSelector((state) => state.recipesave.listRecipeSave) || []


    useEffect(() => {
        dispatch(getAllRecipeAction({ status: 0 }))
        console.log("log at ==> Main.js => status: ", status);
    }, [status])
    useEffect(() => {

        console.log("log at ==> Main.js => menus: ", menus);
    }, [menus])


    useEffect(() => {
        console.log("log at => Main ==> faPost: ", user)
        if (user._id) {
            const fetchFaList = async () => {
                await dispatch(getFavoriteAction(user._id))
            }
            fetchFaList();
        }
    }, [user, clickFaPost])
    useEffect(() => {
        //find by id
    }, [])

    useEffect(() => {
        dispatch(getAllTopicAction())
    }, [])
    useEffect(() => {
        console.log("log at ==> Main.js => topics: ", topics);
    }, [topics])

    useEffect(() => {
        console.log("log at ==> Main.js => faPost: ", faPost);
    }, [])

    useEffect(() => {

        const MenuSearch = menus.filter(x => {
            return x.name.toLowerCase().includes(searchText.toLowerCase())
        })

        setNewMenus(MenuSearch)

        // if (MenuSearch.length )
        console.log(newMenus)
    }, [searchText])


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

    const handleSearch = (e) => {
        setSearchText(e.target.value)
    }

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

    const recipeID = (value) => {
        console.log("recipeID: ", value)
        return value;
    }

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

    const checkFa = (userID, recipeID) => {
        if (faPost.length > 0) {
            const faPostArray = faPost.filter(x => {

                return x.recipe._id === recipeID && x.user._id === userID
            })

            if (faPostArray.length > 0) {
                return true
            } else { return false }
        }

    }

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
                                <input onChange={handleSearch} value={searchText} type="text" placeholder="Search repeipes and more..." name="search" />
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
                        {(searchText === "") ? (menus.map((value, index) => {
                            return (

                                <>
                                    <Grid key={index} item xs={4} sm={6} md={3} margin={"30px"}>

                                        <Card className="cardRec" sx={{ minWidth: 240, height: 400, position: "relative" }} >
                                            <CardHeader
                                                className="customHeader"
                                                avatar={
                                                    <Avatar alt={value.user.avt} src={value.user.avt} sx={{ bgcolor: red[500] }} aria-label="recipe" />
                                                }
                                                action={
                                                    checkFa(userID, value._id) ? (

                                                        <IconButton onClick={() => { handleSaveRecipe(recipeID(value._id)); setClickFaPost(!clickFaPost) }}>

                                                            <FavoriteIcon style={{ color: 'red' }} />
                                                        </IconButton>
                                                    )
                                                        :
                                                        (
                                                            <IconButton onClick={() => { handleSaveRecipe(recipeID(value._id)); setClickFaPost(!clickFaPost) }}>
                                                                <FavoriteBorderIcon style={{ color: 'red' }} />
                                                            </IconButton>

                                                        )

                                                }
                                                title={value.name}
                                                subheader={value.createAt}
                                            />
                                            <CardMedia
                                                component="img"
                                                height="194"
                                                width="80%"
                                                image={value.image}
                                                alt={value.name}
                                            />
                                            <CardContent >
                                                <Typography variant="body2" color="text.secondary" sx={{ maxHeight: '100px' }}>
                                                    {value.title}
                                                </Typography>
                                            </CardContent>
                                            <CardActions disableSpacing sx={{ position: "absolute", bottom: 0, right: 0 }}>

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
                        })) : (newMenus.map((value, index) => {
                            return (

                                <>
                                    <Grid key={index} item xs={4} sm={6} md={3} margin={"30px"}>

                                        <Card className="cardRec" sx={{ minWidth: 240, maxHeight: 400, position: "relative" }} >
                                            <CardHeader
                                                className="customHeader"
                                                avatar={
                                                    <Avatar alt={value.user.avt} src={value.user.avt} sx={{ bgcolor: red[500] }} aria-label="recipe" />
                                                }
                                                action={
                                                    checkFa(userID, value._id) ? (

                                                        <IconButton onClick={() => { handleSaveRecipe(recipeID(value._id)); setClickFaPost(!clickFaPost) }}>

                                                            <FavoriteIcon style={{ color: 'red' }} />
                                                        </IconButton>
                                                    )
                                                        :
                                                        (
                                                            <IconButton onClick={() => { handleSaveRecipe(recipeID(value._id)); setClickFaPost(!clickFaPost) }}>
                                                                <FavoriteBorderIcon style={{ color: 'red' }} />
                                                            </IconButton>

                                                        )

                                                }
                                                title={value.name}
                                                subheader={value.createAt}
                                            />
                                            <CardMedia
                                                component="img"
                                                height="194"
                                                width="80%"
                                                image={value.image}
                                                alt={value.name}
                                            />
                                            <CardContent >
                                                <Typography variant="body2" color="text.secondary" sx={{ maxHeight: '100px' }}>
                                                    {value.title}
                                                </Typography>
                                            </CardContent>
                                            <CardActions disableSpacing sx={{ position: "absolute", bottom: 0, right: 0 }}>

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
                        }))}


                    </Grid>

                </div>
            </div>
            <Footer />
        </div>
    );






}

export default Main;