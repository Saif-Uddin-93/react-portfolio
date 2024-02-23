import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


function NavButton(props){
    const [height, setHeight] = useState('')

    useEffect(()=>{
        makeCircleNavBtn();
    }, [])

    function makeCircleNavBtn(){
        const e = document.getElementById(props.id)
        const computedStyle = window.getComputedStyle(e);
        const width = computedStyle.width;
        setHeight(width)
    }
    
    const navigate = useNavigate();
    const buttonStyle = {
        position: props.style.position,
        inset: props.style.inset,
        borderRadius: "50%",
        width: "fit-content",
        height: height,
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