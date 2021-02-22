import React from 'react';
import "./stand.scss";

const Stand = () => {
    return (
        <div className="stand-container">
            <section className="stand-content">
                <div>
                    <h4>Bamboo Stand</h4>
                    <p className="pledge">Pledge $25 or more</p>
                </div>
                <div>
                    <p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
                        you’ll be added to a special Backer member list.</p>
                </div>
                <div>
                    <p><span className="stock">101</span> left</p>
                    <button className="stand-btn">Select Reward</button>
                </div>
            </section>
            <section className="stand-content">
                <div>
                    <h4>Black Edition Stand</h4>
                    <p className="pledge">Pledge $75 or more</p>
                </div>
                <div>
                    <p>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
                        member list. Shipping is included.</p>
                </div>
                <div>
                    <p><span className="stock">64</span> left</p>
                    <button className="stand-btn">Select Reward</button>
                </div>
            </section>
            <section className="stand-content">
                <div>
                    <h4>Mahogany Special Edition</h4>
                    <p className="pledge">Pledge $200 or more</p>
                </div>
                <div>
                    <p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
                        to our Backer member list. Shipping is included.</p>
                </div>
                <div>
                    <p><span className="stock">0</span> left</p>
                    <button className="stand-btn">Out of Stock</button>
                </div>
            </section>
        </div>
        
    )
}

export default Stand;
