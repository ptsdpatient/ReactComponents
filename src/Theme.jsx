import './styles/Theme.css';
import React from 'react';
import { useState, createContext, useContext } from 'react';
import App from './App';
const Theme = (props) => {

    const { top, left } = props.style;
    const [position, setPosition] = useState({ top, left });
    const [theme, setTheme] = useState("white");
    const [sliderStyle, setSliderStyle] = useState({ backgroundColor:'#111111'})
    const [dotPosition, setDotPosition] = useState({ left: '0rem', backgroundColor:'#3b8cff'});
    const changeTheme = () => {
        if (theme == "black") {
            setTheme("white")
            setDotPosition({...dotPosition, left: '1rem' });
            setSliderStyle({ backgroundColor: 'snow' });
            
        } else {
            setTheme("black");
            setDotPosition({ ...dotPosition, left: '0rem' });
            setSliderStyle({ backgroundColor: '#111111'});
        }            
    }
    return (
        <>
            <App theme={theme} />
            <div class="slider" style={{ ...position, ...sliderStyle }} onClick={changeTheme}>
                <div class="dot" style={dotPosition} >
                    </div></div>
        </>
        )
}
export default Theme;

