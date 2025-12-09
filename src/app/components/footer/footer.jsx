import React from "react";
import './footer.scss'

export default function Footer(){
    return(
        <div className="footer">
            <div className="col">
                <div className="logo">
                    <div className="logoImg"></div>
                    <h3>Monaco</h3>
                </div>
            </div>
            <div className="col">
                <h5>Company information</h5>
                <div className="info">
                    <p>About us</p>
                    <p>Terms of use of the site</p>
                </div>
            </div>
            <div className="col">
                <h5>Help</h5>
                <div className="info">
                    <p>Delivery and payment</p>
                    <p>Warranty</p>
                    <p>Return of goods</p>
                </div>
            </div>
            <div className="col">
                <h5>For partners</h5>
                <div className="info">
                    <p>Sell on our website</p>
                    <p>Work with us</p>
                </div>
            </div>
            <div className="col">
                <h5>Contacts</h5>
                <div className="info">
                    <p>YouTube</p>
                    <p>Facebook</p>
                    <p>Telegram</p>
                </div>
            </div>
        </div>
    )
}