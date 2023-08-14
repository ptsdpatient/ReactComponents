import './styles/Input.css'
import React from 'react';
import { useState,useEffect} from 'react';
const Input = (props) => {
    const [theme, setTheme] = useState({ backgroundColor: 'snow', color: '#3076f3' });
    
    useEffect(() => {
        if (props.theme == "white") {
            setTheme({ backgroundColor: 'snow', color: '#3076f3' });
        } else {
            setTheme({ backgroundColor: '#0f1321', color: '#3076f3' });
        }
    }, [props.theme]);

    return (<>
        <input class="inputClass" style={props.style, theme}></input>
       </>);
}
export default Input;