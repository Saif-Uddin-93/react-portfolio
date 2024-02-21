import React from "react";
import NavButton from "../components/NavButton";

function Home (){

    const NavBtnArray = [
        ["About", "About"],
        ["Projects", "Projects"],
        ["Contact", "Contact"],
        ["CV", "CV"],
    ]
    
    return (<>
        HOME
        World icon with nav buttons around icon image
        {
        NavBtnArray.map((btn, index)=>{
            return (<NavButton
            key={index+1}
            id={index+1}
            nav={btn[0]}
            text={btn[1]}
            />
        )})}
        
    </>)
}

export default Home