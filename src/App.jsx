import React from 'react';
import './styles/App.css'
import InputOption from './InputOption';
import Input from './Input';
import Footer from './Footer';
import { useEffect,useState} from 'react';

const App = ({ theme }) => {
    const [canvasTheme, setCanvasTheme] = useState({ backgroundColor: 'snow' })
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

    window.onresize = () => {
        if (window.innerWidth <= 768) {
            setIsMobile(true)
            

        } else {
            setIsMobile(false)
            

        }
    }
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
                <canvas style={{ ...canvasTheme }}>
                </canvas>
                <canvas id="about" style={{...canvasTheme}}>
                </canvas>
                <canvas id="experience" style={{ ...canvasTheme }}>
                </canvas>
                <canvas id="projects" style={{ ...canvasTheme }}>
                </canvas>
                <canvas id="contact" style={{...canvasTheme }}>
                </canvas>
                <canvas id="resume" style={{ ...canvasTheme }}>
                </canvas>
            </div>
            <Footer theme={theme} />
        </>
    );
}

export default App;
