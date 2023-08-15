import './styles/Theme.css';
import React from 'react';
import { useState, useEffect } from 'react';
import App from './App';
const Theme = (props) => {
    const [theme, setTheme] = useState("white");
    const [sliderStyle, setSliderStyle] = useState({ backgroundColor: '#dedede' })
    const [dotPosition, setDotPosition] = useState({ left: '1rem', backgroundColor: '#3b8cff' });
    const [headerStyle, setHeaderStyle] = useState({ color: '#dedede', backgroundColor: 'snow'})
    const [isSticky, setSticky] = useState(false);
    const changeTheme = () => {
        if (theme == "black") {
            setTheme("white")
            setDotPosition({ ...dotPosition, left: '1rem' });
            setHeaderStyle({ ...headerStyle, color: '#dedede', backgroundColor:'snow'})
            setSliderStyle({ backgroundColor: '#dedede' });
            
        } else {
            setTheme("black");
            setDotPosition({ ...dotPosition, left: '0rem' });
            setHeaderStyle({ ...headerStyle, color: 'black', backgroundColor: '#1f2434' })
            setSliderStyle({ backgroundColor: 'black'});
        }            
    }
    window.onscroll = () => {
    
        if (window.pageYOffset > 150 && !isSticky) {
            setSticky(true);
           
        } else if (isSticky && window.pageYOffset < 150) {
            setSticky(false);
        }
    }
    return (
        <>
            
            <div id="header" style={{ ...headerStyle, height: '3rem', width: '100%',position:isSticky?'fixed':'static'}} >
             <div class="headTitle">Tanishq</div>
            <div class="slider" style={{ ...sliderStyle, top: '1rem', left: '65rem' }} onClick={changeTheme}><div class="dot" style={dotPosition} ></div></div>
            </div>
            <App theme={theme} />

           </>
        )
}
export default Theme;

