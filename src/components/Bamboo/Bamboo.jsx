import React from 'react';
import bookmark from "./icon-bookmark.svg";
import bookmarkBlue from "./icon-bookmark2.svg";
import mastercraft from "./logo-mastercraft.svg";
import "./bamboo.scss";

const Bamboo = ({sidebar, clickHandler}) => {
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
                    <button className="btn" onClick={clickHandler}>Back this project</button>
                    <img className={sidebar ? "black-bookmark active" : "black-bookmark"} src={bookmark} alt="bookmark img"/>
                    <div className={sidebar ? "bookmark active" : "bookmark"}>
                        <img src={bookmarkBlue} alt="bookmark img"/>
                        <span>Bookmarked</span>
                    </div>
                </div>
            </section>
            <section className="amount-container">
                <h2>$89,914</h2>
                <p>of $100,000 backed</p>
                <h2>5,007</h2>
                <p>total backers</p>
                <h2>56</h2>
                <p className="border-none">days left</p>
                <span className="sideBar"></span>
            </section>
        </main>
    )
}

export default Bamboo;
