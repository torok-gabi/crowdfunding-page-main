import React, {useState} from 'react';
import Check from "./icon-check.svg";
import "./support.scss";

const Support = ({support, setSupport}) => {

    const [close, setClose] = useState(true);

    const closeButton = () => {
        setClose(!close)
        setSupport(!support);
    }
    
    
    return (
        <div className={ support ? "support-container active" : "support-container"}>
            <div className={close ? "gotIt" : "gotIt active"}>
                <img className="check" src={Check} alt="check icon"/>
                <h3>Thanks for your support!</h3>
                <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
                    an email once our campaign is completed.</p>
                <button onClick={closeButton} className="support-btn">Got it!</button>
            </div>
        </div>
    )
}

export default Support;
