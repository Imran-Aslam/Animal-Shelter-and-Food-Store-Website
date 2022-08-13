import React from "react";
import "./IconHr.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
const IconHr = (props)=>{
     const color__class=props.orange?"icon__hr2":"icon__hr"
    return(
        <>
   <div className="icon__hr__div"> <FontAwesomeIcon icon={faPaw} className={color__class}></FontAwesomeIcon>
   <FontAwesomeIcon icon={faPaw} className={color__class}></FontAwesomeIcon>
   <FontAwesomeIcon icon={faPaw} className={color__class}></FontAwesomeIcon>
   <FontAwesomeIcon icon={faPaw} className={color__class}></FontAwesomeIcon>
   <p className="icon__hr__p">because we love pets</p>
   </div>
        </>
    )
}
export default IconHr;