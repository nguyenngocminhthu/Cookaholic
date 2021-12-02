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
import { FaPlusCircle } from "react-icons/fa";


import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Grid } from '@mui/material';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

import { FaPlayCircle } from 'react-icons/fa'

import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../css/main.css';


const Main = (props) => {
    const dispatch = useDispatch();

    const isLogin = useSelector((state) => state.auth.isLogin)
    const ADDREC = () => {
        if (isLogin)
            return (
                <>
                    <div style={{ textAlign: "right", marginBottom: "40px" }}>
                        <NavLink className="addrec" to="/addrecipes" value="addrecipe"><FaPlusCircle /> ADD RECIPE</NavLink>
                    </div>
                </>
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
    const [currentRecipe, setCurrentRecipe] = useState({});

    const handleDetail = (index) => {
        setCurrentRecipe(menus[index]);
    }

    const menus = useSelector((state) => state.recipe.listRecipe) || []
    const [status, setStatus] = useState(0);

    useEffect(() => {
        dispatch(getAllRecipeAction({ status: 0 }))
        console.log("log at ==> Main.js => status: ", status);
    }, [])
    useEffect(() => {

        console.log("log at ==> Main.js => menus: ", menus);
    }, [])



    const topics = useSelector((state) => state.topic.listTopic) || []

    useEffect(() => {
        dispatch(getAllTopicAction())
    }, [])
    useEffect(() => {
        console.log("log at ==> Main.js => topics: ", topics);
    }, [topics])



    return (
        <div className="main">
            <Header />
            <div className="row">
                <div className="col-3">
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
                    <ADDREC />
                    <Grid container>
                        {menus.map((value, index) => {
                            return (

                                <>
                                    <Grid key={index} item xs={4} sm={6} md={3} margin={"30px"}>

                                        <Card className="cardRec" sx={{ width: 240, minHeight: 400, position: "relative" }} >
                                            <CardHeader
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