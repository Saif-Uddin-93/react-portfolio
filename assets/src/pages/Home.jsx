import React from "react";
import NavButton from "../components/NavButton";

function Home (){

    const NavBtnArray = [
        ["About", "About"],
        ["Projects", "Projects"],
        ["Contact", "Contact"],
        ["CV", "CV"],
    ]

    const logoStyle = {
        position: 'absolute',
        border: '1px black solid',
        display: 'inline-block ',
        textAlign: 'center',
        top:'45%',
        left: '45%',
        color: 'black',
    }

    const testStyle = (index) => {
        const {x} = btnPosX(index), {y} = btnPosY(index);
        console.log(`${y} ${x}`)
        return {
            position: 'absolute',
            inset: `${y}rem ${x}rem`,
            textAlign: 'center',
            width: '100%',
    }}

    function calcAngle(arr, index){
        return (360/(arr.length))*index
    }

    const btnPosX = (index, radius=10)=>{
        const x = radius * Math.cos(calcAngle(NavBtnArray, index))
        return {x}
    }

    const btnPosY = (index, radius=10)=>{
        const y = radius * Math.sin(calcAngle(NavBtnArray, index))
        return {y}
    }
    
    return (<>
        HOME
        World icon with nav buttons around
        {
            NavBtnArray.map((btn)=>(
                <NavButton
                    key={`${btn[0]}-link`}
                    id={`${btn[0]}-link`}
                    text={btn[0]}
                    nav={btn[1]}
                />
            ))
        }
        <h3 style={logoStyle}>
            LOGO
            {
                NavBtnArray.map((btn, index)=>(
                    <div
                        key={index}
                        style={
                            testStyle(index)
                        }
                    >
                        {btn[0]}
                    </div>
                ))
            }
            {/* <div
            style={testStyle({y:'-4rem', x:'0rem'})}>
                1
            </div>
            <div
            style={testStyle({y:'0rem', x:'4rem'})}>
                3
            </div>
            <div
            style={testStyle({y:'4rem', x:'0rem'})}>
                6
            </div>
            <div
            style={testStyle({y:'0rem', x:'-4rem'})}>
                9
            </div> */}
        </h3>
    </>)
}

export default Home