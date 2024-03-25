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
        position: 'relative',
        border: '1px black solid',
        display: 'inline-block ',
        textAlign: 'center',
        top:'40%',
        left: '40%',
        margin: 0,
        color: 'black',
    }

    const testStyle = (index) => {
        const x = btnPosX(index), y = btnPosY(index);
        return {
            position: 'absolute',
            inset: `${y}rem ${x}rem`,
            textAlign: 'center',
            width: '100%',
    }}

    function calcAngle(arr, index){
        // return (360/(arr.length))*index
        return (Math.PI*2/arr.length)*index
    }

    const btnPosX = (index, radius=10)=>{
        return radius * Math.cos(calcAngle(NavBtnArray, index))
    }

    const btnPosY = (index, radius=10)=>{
        return radius * Math.sin(calcAngle(NavBtnArray, index))
    }
    
    return (<>
        HOME
        World icon with nav buttons around
        {
            /* NavBtnArray.map((btn)=>(
                <NavButton
                    key={`${btn[0]}-link`}
                    id={`${btn[0]}-link`}
                    text={btn[0]}
                    nav={btn[1]}
                />
            )) */
        }
        <div style={{inset: '5px'}}>
            <h3 style={logoStyle}>
                LOGO
                {
                    NavBtnArray.map((btn, index)=>(
                        <NavButton
                            key={`${btn[0]}-link`}
                            id={`${btn[0]}-link`}
                            text={btn[0]}
                            nav={btn[1]}
                            style={
                                testStyle(index)
                            }
                        />
                            /* {btn[0]}
                        </div> */
                    ))
                }
            </h3>
        </div>
    </>)
}

export default Home