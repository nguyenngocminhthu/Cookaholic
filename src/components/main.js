import React from 'react';
import '../css/main.css';
import pho from '../img/pho.png';
import { useSelector } from "react-redux";

const Main = () => {
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
                <div className="card-deck">
                    {value.list.map((vl, idx) => {
                        return (<div className="card" key={idx}>
                            <img src={pho} alt="pho" />
                            <div className="container">
                                <h4><b>{vl.name}</b></h4>
                                <p>{vl.desc}</p>
                            </div>
                        </div>)
                    })}
                </div>
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
                        <h2>What?</h2>
                        <p>Chania is a city on the island of Crete.</p>
                        <h2>Where?</h2>
                        <p>Crete is a Greek island in the Mediterranean Sea.</p>
                        <h2>How?</h2>
                        <p>You can reach Chania airport from all over Europe.</p>
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