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
            key={`${btn[1]}-link`}
            id={`${btn[1]}-link`}
            nav={btn[0]}
            text={btn[1]}
            />
        )})}
        
    </>)
}

export default Home