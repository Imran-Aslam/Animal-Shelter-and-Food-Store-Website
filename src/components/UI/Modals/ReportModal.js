import React from "react";
import { Link } from "react-router-dom";
import "./ReportModal.css"
const ReportModal = (props)=>{
    return (<>
        <div className="ReportModal__bgdiv">
            <div className="ReportModal__maindiv">
            <h1>Your Report Has Been Submitted</h1>
            <p>Are You Viewing Pets for Adoption??</p>
            <div className="ReportModal__btndiv" >
            
            <button onClick={props.onClose}>Close</button>
            <Link to="./pets">
                <button >Adopt Pets</button>
            </Link>
            </div>
            </div>
        </div>
    </>)
}
export default ReportModal