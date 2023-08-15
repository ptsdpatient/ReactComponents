import React from 'react';
import './styles/App.css'
import InputOption from './InputOption';
import Input from './Input';
import { useEffect,useState} from 'react';

const App = ({ theme }) => {
    const [canvasTheme, setCanvasTheme] = useState({ backgroundColor: 'snow' });
    useEffect(() => {
        if (theme == "white") {
            document.body.style.backgroundColor = "#dedede";
            setCanvasTheme({ backgroundColor: 'snow' });
        } else {
            document.body.style.backgroundColor = "black";
            setCanvasTheme({ backgroundColor:'#1f2434'});
        }
    }, [theme])


    return (
        <>
            <div class="canvaContainer">
                <canvas style={{...canvasTheme}}>
                </canvas>
                <canvas style={{ ...canvasTheme }}>
                </canvas>
                <canvas style={{ ...canvasTheme }}>
                </canvas>
                <canvas style={{...canvasTheme }}>
                </canvas>
                <canvas style={{ ...canvasTheme }}>
                </canvas>
            </div>
        </>
    );
}

export default App;
