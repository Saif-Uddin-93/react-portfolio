import React from "react";
import NavButton from "../components/NavButton";

function Home (){

    const logoStyle = {
        position: 'absolute',
        border: '1px black solid',
        display: 'inline-block ',
        textAlign: 'center',
        top:'45%',
        left: '45%',
        color: 'black',
    }

    const testStyle = (posArray) => {

        return {
            position: 'absolute',
            top: posArray.top,
            right: posArray.right,
            bottom: posArray.bottom,
            left: posArray.left,
            inset: `${posArray.yAxis} ${posArray.xAxis}`,
            textAlign: 'center',
            width: '100%',
    }}

    const NavBtnArray = [
        ["About", "About"],
        ["Projects", "Projects"],
        ["Contact", "Contact"],
        ["CV", "CV"],
    ]
    
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
            <div
            style={testStyle({yAxis:'-4rem', xAxis:'0'})}>
                1
            </div>
            <div
            style={testStyle({yAxis:'0', xAxis:'4rem'})}>
                3
            </div>
            <div
            style={testStyle({yAxis:'4rem', xAxis:'0'})}>
                6
            </div>
            <div
            style={testStyle({yAxis:'0', xAxis:'-4rem'})}>
                9
            </div>
        </h3>
    </>)
}

export default Home