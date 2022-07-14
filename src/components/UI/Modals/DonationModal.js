import React from "react";
import "./DonationModal.css"
const DonationModal= (props)=>{
    return(
        <>
            <div className="DonationModalbgdiv">
                <div className="DonationModalmaindiv">
                <h1>Thank You</h1>
                <h2>Your amount has been submitted to ANIMALSLIFEMATTERS.COM</h2>
                <div className="DonationModalbtndiv"> <button onClick={props.onClose}>
                 Close   
                </button>
                </div>
                </div>
            </div>
        </>
    )
}
export default DonationModal;