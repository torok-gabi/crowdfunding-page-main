import React, {useState} from 'react';
import Bookmark from "./icon-bookmark.svg";
import mastercraft from "./logo-mastercraft.svg";
import "./bamboo.scss";
import Project from '../Project/Project';

const Bamboo = ({sidebar, clickHandler, select, clickSelect}) => {

    const [bookmark, setBookmark] = useState(false);
    const clickBookmark = () => {
        setBookmark(!bookmark);
        clickHandler();
    }
    
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
                    <button onClick={clickSelect} className="bamboo-btn">Back this project</button>
                    <div className="bookmark-btn" onClick={clickBookmark} >
                        <img src={Bookmark} className="bookmark-img" alt="bookmark img"/>
                        <span className={bookmark ? "black-bookmark active" : "black-bookmark"}>Bookmark</span>
                        <span className={sidebar ? "bookmark active" : "bookmark"}>Bookmarked</span>
                    </div>
                </div>
            </section>
            <section className="amount-container">
                <div>
                    <h2>$89,914</h2>
                    <p>of $100,000 backed</p>
                </div>
                <div>
                    <h2>5,007</h2>
                    <p>total backers</p>
                </div>
                <div className="border-none">
                    <h2>56</h2>
                    <p className="border-none">days left</p>
                </div>
            </section>
            <span className="sideBar"></span>
            <Project select={select} clickSelect={clickSelect} sidebar={sidebar}/>
        </main>
    )
}

export default Bamboo;
