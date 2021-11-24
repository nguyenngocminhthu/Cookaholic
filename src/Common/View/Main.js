import React, { useState, useEffect } from 'react';
import Modal from 'react-awesome-modal';
import { useSelector, useDispatch } from "react-redux";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { getAllRecipeAction } from "../../redux/actions/Recipe/recipe.action"
import Checkbox from '@mui/material/Checkbox';


import '../css/main.css';
import phoDel from '../img/pho-detail.png';
import pho from '../img/Food/pho.png';
import RatingShow from './Detail/Rating';
import RecipesDetail from '../View/Detail/RecipesDetail';

const Main = (props) => {
    const dispatch = useDispatch();
    const [checked, setChecked] = React.useState([1]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const [visible, setVisible] = useState(false);
    const openModal = () => {
        setVisible(!visible)
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
                <div className="card" value="Open" onClick={openModal}>
                    <img className="imgnor" src={value.image} alt={value.name} />
                    <div className="container">
                        <h4><b>{value.name}</b></h4>
                        <p>{value.title}</p>
                    </div>
                </div>
                <Modal
                    visible={visible}
                    width="80%"
                    height="90%"
                    effect="fadeInUp"
                    onClickAway={closeModal}
                >
                    <div key={index}>
                        <div className="close-detail">
                            <button className="close" onClick={closeModal}><i className="fa fa-times" aria-hidden="true"></i></button>
                        </div>

                        <div className="detail">
                            <div className="row">
                                <div className="col-6 ">
                                    <div className="img-del">
                                        <img className="imgdetail" src={value.image} alt={value.name} />
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


                                    {showDetail && <RecipesDetail />}

                                    {showRatingShow && <RatingShow />}


                                </div>
                            </div>

                        </div>

                    </div>

                </Modal>
            </div>

        )
    })


    return (
        <div className="main">
            <div className="row">
                <div className="col-3">
                    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', position: 'unset' }}>
                        {["Trứng", "Bún", "Phở", "Pizza", "Mì", "Món nước", "Món khô", "Miền Trung", "Miền Bắc", "Miền Nam"].map((value) => {
                            const labelId = `checkbox-list-secondary-label-${value}`;
                            return (
                                <ListItem
                                    key={value}
                                    secondaryAction={
                                        <Checkbox
                                            edge="end"
                                            onChange={handleToggle(value)}
                                            checked={checked.indexOf(value) !== -1}
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    }
                                    disablePadding
                                >
                                    <ListItemButton>
                                        <ListItemText id={labelId} primary={`${value}`} />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>
                </div>
                <div className="col-9 card-deck">

                    {renderListCook}




                </div>
            </div>

            <div className="footer">
                <p>Resize the browser window to see how the content respond to the resizing.</p>
            </div>

        </div>
    );






}

export default Main;