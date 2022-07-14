import React from "react"
import { Link } from "react-router-dom"

import "./LoginModal.css"
const LoginModal =(props)=>{
    return(<>
        <div className="LoginModal__bgdiv" onClick={props.onClose}>
            <div className="LoginModal__maindiv" >
            <div className="LoginModal__maindiv__upperdiv">
               <h1>Welcome back to</h1>
               <h2>ANIMALSLIFEMATTERS</h2>
               <p>Take An Adventure Of Our Website By Cliciking</p>
               <div className="LoginModal__maindiv__upperdiv__homeBtnDiv" >
               <Link to="/homes" >
                   <button className="LoginModal__maindiv__upperdiv__homeBtn">
                    Home
                   </button>
               </Link>
               </div>
            </div>
            </div>
        </div>
    </>)
}
export default LoginModal;