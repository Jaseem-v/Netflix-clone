import React from 'react'
import "./Banner.css"
import logo from "../assets/netflix_PNG15.png"


function Banner() {
    return (
        <div>
            <div className="banner">
                <div className="left-shadow">
                    <div className="content">
                        <div className="logo-title">
                            <img src={logo} alt="" />
                            <h1>Series </h1>
                        </div>
                        <div className="title">
                            <h1>money <br /> <span> Heist </span> </h1>
                        </div>
                        <div className="discription">
                            <p>A criminal mastermind who goes by "The Professor" has a plan to pull off the biggest heist in recorded history
                            -- to print billions of euros in the Royal Mint of Spain. To help him carry out the ambitious plan,
                                he recruits eight people with certain abilities and who have nothing to lose. The group o…......</p>
                        </div>
                        <div className="cta">
                            <button className="btn play"><i className="fas fa-play"></i>Play</button>
                            <button className="btn mylist"><i className="fas fa-plus"></i>Mylist</button>
                        </div>
                    </div>
                </div>
            <div className="fade"></div>
            </div>
        </div>
    )
}

export default Banner
