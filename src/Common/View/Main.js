import React, { useState, useEffect } from 'react';
import Modal from 'react-awesome-modal';
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

import '../css/main.css';
import RatingShow from './Detail/Rating';
import RecipesDetail from '../View/Detail/RecipesDetail';


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
        console.log("log at Main js => value: ", value)
        const currentIndex = checked.indexOf(value);
        console.log("log at Main js => Current index: ", currentIndex);
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
    const [visible, setVisible] = useState();
    const openModal = (index) => {
        setCurrentRecipe(menus[index]);
        setVisible(!visible);
        setShowDetail(true);
        setShowRatingShow(false);

    };


    const closeModal = () => setVisible(false);

    const [showDetail, setShowDetail] = useState(true);
    const [showRatingShow, setShowRatingShow] = useState(false);
    const showComp = (element) => {
        if (element === "detail") {
            setShowDetail(true);
            setShowRatingShow(false);
        } else {
            setShowDetail(false);
            setShowRatingShow(true);
        }

    }

    const menus = useSelector((state) => state.recipe.listRecipe) || []


    useEffect(() => {
        dispatch(getAllRecipeAction())
    }, [])
    useEffect(() => {
        console.log("log at ==> Main.js => menus: ", menus);
    }, [menus])

    const renderListCook = menus.map((value, index) => {
        return (
            <div key={index}>
                <div className="card" value="Open" onClick={() => openModal(index)}>
                    <img className="imgnor" src={value.image} alt={value.name} />
                    <div className="container">
                        <h4><b>{value.name}</b></h4>
                        <p>{value.title}</p>
                    </div>
                </div>

            </div>

        )
    })

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
                    <div className="card-deck">

                        {renderListCook}
                    </div>





                </div>
            </div>

            <div className="footer">
                <p>Resize the browser window to see how the content respond to the resizing.</p>
            </div>
            <Modal
                visible={visible}
                width="80%"
                height="90%"
                effect="fadeInUp"
                onClickAway={closeModal}

            >
                <div key={currentRecipe}>
                    <div className="close-detail">
                        <button className="close" onClick={closeModal}><i className="fa fa-times" aria-hidden="true"></i></button>
                    </div>

                    <div className="detail">
                        <div className="row">
                            <div className="col-6 ">
                                <div className="img-del">
                                    <img className="imgdetail" src={currentRecipe.image} alt={currentRecipe.name} />
                                </div>

                            </div>
                            <div className="col-6">
                                <div className="title">
                                    <button className="detailrating" onClick={() => showComp("detail")}>
                                        Detail
                                    </button>
                                    <button className="detailrating" onClick={() => showComp()}>
                                        Rating
                                    </button>
                                </div>


                                {showDetail && <RecipesDetail recipe={currentRecipe} />}

                                {showRatingShow && <RatingShow recipe={currentRecipe} />}


                            </div>
                        </div>

                    </div>

                </div>

            </Modal>
        </div>
    );






}

export default Main;