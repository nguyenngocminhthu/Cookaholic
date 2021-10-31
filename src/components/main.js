import React from 'react';
import '../css/main.css';
import { useState } from 'react';
import Modal from 'react-awesome-modal';
import pho from '../img/pho.png';
import { useSelector } from "react-redux";

const Main = () => {

    const [visible, setVisible] = useState(false);
    const openModal = () => setVisible(!visible);
    const closeModal = () => setVisible(false);



    const menus = useSelector((state) => state.food.listFood) || [
        {
            name: "Món nước",
            list: [
                {
                    image: ".png",
                    name: "Phở Bò",
                    desc: "Ẩm thực Việt Nam"
                },
                {
                    image: ".png",
                    name: "Phở Bò",
                    desc: "Ẩm thực Việt Nam"
                },
                {
                    image: ".png",
                    name: "Phở Bò",
                    desc: "Ẩm thực Việt Nam"
                },
                {
                    image: ".png",
                    name: "Phở Bò",
                    desc: "Ẩm thực Việt Nam"
                },
                {
                    image: ".png",
                    name: "Phở Bò",
                    desc: "Ẩm thực Việt Nam"
                },
                {
                    image: ".png",
                    name: "Phở Bò",
                    desc: "Ẩm thực Việt Nam"
                },
            ]
        },
        {
            name: "Món chiên",
            list: [
                {
                    image: ".png",
                    name: "Phở Bò",
                    desc: "Ẩm thực Việt Nam"
                },
                {
                    image: ".png",
                    name: "Phở Bò",
                    desc: "Ẩm thực Việt Nam"
                },
                {
                    image: ".png",
                    name: "Phở Bò",
                    desc: "Ẩm thực Việt Nam"
                },
                {
                    image: ".png",
                    name: "Phở Bò",
                    desc: "Ẩm thực Việt Nam"
                },
                {
                    image: ".png",
                    name: "Phở Bò",
                    desc: "Ẩm thực Việt Nam"
                },
                {
                    image: ".png",
                    name: "Phở Bò",
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
                    width="90%"
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
                                <div className="col-6">
                                    <img className="imgdetail" src={pho} alt="pho" />
                                </div>
                                <div className="col-6">
                                    <h4><b>Phở bò</b></h4>
                                    <p>Ẩm thực Việt Nam</p>
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