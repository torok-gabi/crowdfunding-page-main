import React from 'react';
import bookmark from "./icon-bookmark.svg";
import mastercraft from "./logo-mastercraft.svg";
import "./bamboo.scss";

const Bamboo = () => {
    return (
        <main className="main-container">
            <section className="bamboo-container">
                <img className="bamboo-img" src={mastercraft} alt="mastercraft icon"/>
                <div className="text-content">
                    <h1>Mastercraft Bamboo Monitor Riser</h1>
                </div>
                <div className="text-content">
                    <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
                </div>
                <div className="button-container">
                    <button className="btn">Back this project</button>
                    <img src={bookmark} alt=""/>
                </div>
            </section>
        </main>
    )
}

export default Bamboo;
