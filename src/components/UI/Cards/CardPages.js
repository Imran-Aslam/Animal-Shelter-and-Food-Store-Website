import React from "react"
import "./CardPages.css"
import { Link } from "react-router-dom"
const CardPages = (props)=>{
    return (<>
         <div className="aboutus__upperDiv">
            {/* about me pic wala */}
           <div className="aboutus__upperDiv__flex"> <h1 className="aboutus__mainh1">{props.name}</h1>
           <div className="aboutus__homelinkdiv" ><span  className="aboutus__span"><Link to="/homes" className="aboutus__link">Home</Link></span><span className="aboutus__span">/{props.name}</span></div>
           </div>
           </div>
    </>)
}
export default CardPages;