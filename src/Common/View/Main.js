import React, { useState } from 'react';
import Modal from 'react-awesome-modal';
import { useSelector } from "react-redux";
import '../css/main.css';
import phoDel from '../img/pho-detail.png';
import pho from '../img/Food/pho.png';
import bunbo from '../img/Food/bunbo.png';
import RatingShow from './Detail/Rating';
import RecipesDetail from '../View/Detail/RecipesDetail';
const Main = () => {

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
            name: "Món nước",
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
            name: "Món chiên",
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

                <div className="sub">
                    <h3>
                        {value.name}
                    </h3>
                </div>
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
                            <a href="javascript:void(0);" onClick={closeModal}><i className="fa fa-times" aria-hidden="true"></i></a>
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
                <div className="col-9">
                    {renderListCook}
                </div>

                <div className="col-3 right">
                    <div className="aside">
                        <h2>What is Cookaholic?</h2>
                        <p>We are the Web that allow you to find and share cooking recipes.</p>
                        <h2>How can I share my recipes?</h2>
                        <p>First, you should Login. If you don't have an account, please register.</p>
                        <h2>Why haven't my Post published?</h2>
                        <p>Any Posts need to be accepted by the Admin, please wait for a shortime.</p>
                    </div>
                </div>
            </div>

            <div className="footer">
                <p>Resize the browser window to see how the content respond to the resizing.</p>
            </div>

        </>
    );






}

export default Main;