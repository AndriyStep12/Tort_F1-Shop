import React from "react";
import './header.scss'

export default function Header()
{
    return(
        <header>
            <div className="logo_name">
                <div className="logo" style={{backgroundImage: `url(/Logo.png)`}}></div>
                <h3>TORT F1 SHOP</h3>
            </div>
            <div className="search_bar">
                <input type="text" />
                <button className="search">S</button>
            </div>
            <div className="photo_options">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </header>
    )
}