import React from "react";
import { useNavigate } from 'react-router-dom';


function NavButton(props){
    
    const navigate = useNavigate();
    const buttonStyle = {
        borderRadius: "50%",
        width: "fit-content",
        height: props.height,
        textAlign: "center",
        margin: "1rem",
    }
    const buttonText = {
        position: "relative",
        top: "-1%",
    }

    return (<>
    <button id={props.id} className="nav-button" style={buttonStyle} onClick={()=>navigate(`/${props.nav}`)}><span className="buttonText" style={buttonText}>{props.text}</span></button>
</>)}

export default NavButton