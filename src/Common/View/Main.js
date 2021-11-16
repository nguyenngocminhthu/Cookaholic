import React, { useState } from 'react';
import Modal from 'react-awesome-modal';
import { useSelector } from "react-redux";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';

import '../css/main.css';
import phoDel from '../img/pho-detail.png';
import pho from '../img/Food/pho.png';
import RatingShow from './Detail/Rating';
import RecipesDetail from '../View/Detail/RecipesDetail';

const Main = () => {
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

    const menus = useSelector((state) => state.food.listFood) || [
        {
            // name: "Món nước",
            list: [
                {
                    image: "require('../img/Food/pho.png')",
                    name: "Phở Bò",
                    desc: "Ẩm thực Việt Nam"
                },
                {
                    image: "bunbo",
                    name: "Bún Bò",
                    desc: "Ẩm thực Việt Nam"
                },
                {
                    image: "pho",
                    name: "Mỳ Quảng",
                    desc: "Ẩm thực Việt Nam"
                },
                {
                    image: "pho",
                    name: "Hủ Tiếu",
                    desc: "Ẩm thực Việt Nam"
                },
                {
                    image: "pho",
                    name: "Bún Riêu Cua",
                    desc: "Ẩm thực Việt Nam"
                },
                {
                    image: "pho",
                    name: "Bánh Canh Cua",
                    desc: "Ẩm thực Việt Nam"
                },
            ]
        },
        {
            //name: "Món chiên",
            list: [
                {
                    image: "pho",
                    name: "Khoai Tây Chiên",
                    desc: "Ẩm thực Việt Nam"
                },
                {
                    image: "pho",
                    name: "Nem Chua Rán",
                    desc: "Ẩm thực Việt Nam"
                },
                {
                    image: "pho",
                    name: "Cánh Gà Chiên Nước Mắm",
                    desc: "Ẩm thực Việt Nam"
                },
                {
                    image: "pho",
                    name: "Cơm Chiên Hải Sản",
                    desc: "Ẩm thực Việt Nam"
                },
                {
                    image: "pho",
                    name: "Bánh Bao Chiên",
                    desc: "Ẩm thực Việt Nam"
                },
                {
                    image: "pho",
                    name: "Hoành Thánh Chiên",
                    desc: "Ẩm thực Việt Nam"
                },
            ]
        },
    ]

    const renderListCook = menus.map((value, index) => {
        return (
            <div key={index}>
                    <h3>
                        {value.name}
                    </h3>
                <div className="card-deck" value="Open" onClick={openModal} >

                    {value.list.map((vl, idx) => {
                        return (<div className="card" key={idx}>
                            <img className="imgnor" src={pho} alt="pho" />
                            <div className="container">
                                <h4><b>{vl.name}</b></h4>
                                <p>{vl.desc}</p>
                            </div>
                        </div>)
                    })}

                </div>
                <Modal
                    visible={visible}
                    width="80%"
                    height="90%"
                    effect="fadeInUp"
                    onClickAway={closeModal}
                >
                    <div>
                        <div className="close-detail">
                            <button className="close" onClick={closeModal}><i className="fa fa-times" aria-hidden="true"></i></button>
                        </div>

                        <div className="detail">
                            <div className="row">
                                <div className="col-6 ">
                                    <div className="img-del">
                                        <img className="imgdetail" src={phoDel} alt="pho" />
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
        <>
            <div className="row">
                <div className="col-3">
                    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
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
                <div className="col-9">
                    {renderListCook}
                </div>
            </div>

            <div className="footer">
                <p>Resize the browser window to see how the content respond to the resizing.</p>
            </div>

        </>
    );






}

export default Main;