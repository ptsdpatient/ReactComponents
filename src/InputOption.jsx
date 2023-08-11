import React from 'react';
import { useState } from "react";
import './styles/InputOption.css'
const InputOption=(props)=> {
    const [activeOption, setactiveOption] = useState("Menu");
    const [active, setActive] = useState(true);
    const [buttonList, setbuttonList] = useState([]);
    const showOptions = () => {
        if (active) { setActive(false); setbuttonList(["Idli", "Dosa", "samosa", "friedRice"]); } else { setActive(true); setbuttonList([]); }
    }
    return (
        <div style={props.style}>
            <button class="optionBar" onClick={showOptions}>{activeOption}</button>
            {buttonList.map((buttonName, index) => (
                <button class="optionBar" key={index} onClick={() => { setactiveOption(buttonName); setbuttonList([]); setActive(true) }}>{buttonName}</button>
            ))
            }
        </div>
    );
}
export default InputOption;