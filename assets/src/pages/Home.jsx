import React, { useEffect, useState } from "react";
import NavButton from "../components/NavButton";

function Home (){
    const [height, setHeight] = useState("2rem");
    const [indexID, setIndexID] = useState(0);
    useEffect(()=>{
        // test();
        console.log(indexID)
    },[indexID])


    function test(index){
        // if (bool){
            //console.log(indexID)
            setIndexID(index);
            const element = document.getElementById(indexID);
            const computedStyle = window.getComputedStyle(element);
            const width = computedStyle.width;
            setHeight(width);
            console.log(height, typeof height)
            return height
        // }
    }

    const NavBtnArray = [
        ["About", "About"],
        ["Projects", "Projects"],
        ["Contact", "Contact"],
        ["CV", "CV"],
    ]
    
    return (<>
        HOME
        World icon with nav buttons around
        <NavButton 
        key={0}
        id={0}
        nav={"/"}
        text={"Home"}
        height={height}
        onLoad={test()}
        />
        {/* console.log(height) */}
        {"true" && 
        NavBtnArray.map((btn, index)=>{
            // setIndexID(index)
            // test(index, true)
            // console.log(index+1)
            return (<NavButton
            key={index+1}
            id={index+1}
            nav={btn[0]}
            text={btn[1]}
            height={indexID < index ? ()=>{test(index)} : height}
            />
        )})}
        {/* <NavButton
        id="1"
        nav="About"
        text="About"
        height={height||"2rem"}
        />
        <NavButton
        id="2"
        nav="Projects"
        text="Projects"
        height={height||"2rem"}
        />
        <NavButton
        id="3"
        nav="Contact"
        text="Contact"
        height={height||"2rem"}
        />
        <NavButton
        id="4"
        nav="CV"
        text="CV"
        height={height||"2rem"}
        /> */}
        
    </>)
}

export default Home