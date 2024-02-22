import React from "react";
import NavButton from "../components/NavButton";
import Hero from "../components/Hero";

function Home (){

    const NavBtnArray = [
        ["About", "About"],
        ["Projects", "Projects"],
        ["Contact", "Contact"],
        ["CV", "CV"],
    ]

    const logoStyle = {
        position: 'relative',
        border: '1px black solid',
        display: 'inline-block ',
        textAlign: 'center',
        top:'30vh',
        left: '10vw',
        color: 'black',
    }

    const testStyle = (posArray) => {
        
        return {
            position: 'absolute',
            top: posArray.top,
            right: posArray.right,
            bottom: posArray.bottom,
            left: posArray.left,
            textAlign: 'center',
            width: '100%',
    }}
    
    return (<>
        <Hero /> 
        HOME
        World icon with nav buttons around icon image
        
        { 
        NavBtnArray.map((btn)=>{
            return (<NavButton
            key={`${btn[1]}-link`}
            id={`${btn[1]}-link`}
            nav={btn[0]}
            text={btn[1]}
            />
        )})}
        <h3 style={logoStyle}>
            LOGO
            <div
            style={testStyle({top:'-4rem',right:'',bottom:'',left:''})}>
                1
            </div>
        </h3>
    </>)
}

export default Home