import React from 'react'
import "./Navbar.css"
import logo from "../assets/logo.png"

function Navbar() {
    return (
        <div>
            <div className="header">
                <div className="Navbar-left">
                    <img src={logo} alt="" />
                    <ul>
                        <li>TVShows</li>
                        <li>Movies</li>
                        <li>Recently added</li>
                        <li>My list</li>
                    </ul>
                </div>
                <div className="search">
                    <div className="searchBox">
                        <input className="searchInput" type="text" name="" placeholder="Search" />
                        <button className="searchButton" href="#">
                            <i className="fa fa-search"> </i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
