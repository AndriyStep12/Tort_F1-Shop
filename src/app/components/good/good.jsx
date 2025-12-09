"use client"
import React from "react";
import './good.scss'; 

const Good = ({name, stars, commemnts, price, id, salePrice, imgUrl}) => {
    const isSale = price - salePrice > 0;

    const renderStars = () => {
        let result = [];
        for (let i = 1; i <= 5; i++) {
            if (stars >= i) {
                result.push("★");
            } else {
                result.push("☆");
            }
        }
        return result.join('');
    };

    return (
        <div className="good">
            <div 
                className="blockImage" 
                style={{ backgroundImage: `url(${imgUrl})` }}
            ></div>
            <div className="blockInfo">
                <div className="row">
                    <div className="name">{name}</div>
                    <h2 className="current-price">{price}$</h2>
                    <button className="addCartBtn">🛒</button>
                </div>        
            </div>
        </div>
    )
}

export default Good;