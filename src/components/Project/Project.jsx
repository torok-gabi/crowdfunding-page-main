import React, {useState} from 'react';
import Support from '../Support/Support';
import Close from "./icon-close-modal.svg";
import "./project.scss";

const Project = ({select, clickSelect, sidebar}) => {

    const [support, setSupport] = useState(false);
    const [bamboo, setBamboo] = useState(false);
    const [blackEdition, setBlackEdition] = useState(false);

    const clickSupport = () => {
        clickSelect(!select);
        setSupport(!support);
    }
    
    const clickBamboo = () => {
        setBamboo(!bamboo);
    }

    const clickBlackEdition = () => {
        setBlackEdition(!blackEdition);
    }


    return (
        <>
            <div className={select ? "project-container active" : "project-container"}>
                <div className={sidebar ? "close active" : "close"}>
                    <h2>Back this project</h2>
                    <span onClick={clickSelect}><img src={Close} alt="close icon"/></span>
                </div>
                <p className="subtitle">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                <div className="stand-content">
                    <div className="title-content">
                        <form className="radio-btn">
                            <input type="radio" id="no-reward" name="no-reward" value="no reward"/>
                            <label htmlFor="no-reward"></label>
                        </form>
                        <h4>Pledge with no reward</h4>
                    </div>
                    <div className="description">
                        <p>Choose to support us without a reward if you simply believe in our project. As a backer, 
                            you will be signed up to receive product updates via email.</p>
                    </div>
                </div>
                <section className="stand-content">
                    <div className="title-content">
                        <form className="radio-btn">
                            <input onClick={clickBamboo} id="bamboo stand" name="bamboo stand" type="radio" value="bamboo stand"/>
                            <label htmlFor="bamboo stand"></label>
                        </form>                       
                        <h4>Bamboo Stand</h4>
                        <p className="pledge">Pledge $25 or more</p>
                    </div>
                    <div className="description">
                        <p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                            you’ll be added to a special Backer member list.</p>
                    </div>
                    <div className="description">
                        <p><span className="stock">101</span> left</p>
                    </div>
                    <p className="enter-pledge">Enter your pledge</p>
                    <div className={bamboo ? "btn-description active" : "btn-description"}>
                        <button className="pledge-btn">$25</button>
                        <button onClick={clickSupport} className="stand-btn">Continue</button>
                    </div>
                </section>
                <section className="stand-content">
                    <div className="title-content">
                        <form className="radio-btn">
                            <input onClick={clickBlackEdition} type="radio" id="black edition stand" name="black edition stand" value="black edition stand"/>
                            <label htmlFor="black edition stand"></label>
                        </form>                       
                        <h4>Black Edition Stand</h4>
                        <p className="pledge">Pledge $75 or more</p>
                    </div>
                    <div className="description">
                        <p>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                            member list. Shipping is included.</p>
                    </div>
                    <div className="description">
                        <p><span className="stock">64</span> left</p>
                    </div>
                    <p className="enter-pledge">Enter your pledge</p>
                    <div className={blackEdition ? "btn-description active" : "btn-description"}>
                        <button className="pledge-btn">$75</button>
                        <button onClick={clickSupport} className="stand-btn">Continue</button>
                    </div>
                </section>
                <section className="stand-content mahogany">
                    <div className="title-content">
                        <h4>Mahogany Special Edition</h4>
                        <p className="pledge">Pledge $200 or more</p>
                    </div>
                    <div className="description">
                        <p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
                            to our Backer member list. Shipping is included.</p>
                    </div>
                    <div className="description">
                        <p><span className="stock">0</span> left</p>
                    </div>
                </section>
            </div>
            <Support  support={support} setSupport={setSupport}/>
        </>
    )
}

export default Project;
