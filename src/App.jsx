import React from 'react';
import './styles/App.css'
import InputOption from './InputOption';
import Input from './Input';
import Footer from './Footer';
import { useEffect,useState} from 'react';

const App = ({ theme }) => {
    const [divTheme, setdivTheme] = useState({ backgroundColor: 'snow' })
    const [divStyle, setDivStyle] = useState({  width: '60rem', height: '40rem'})
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
    const [textStyle, setTextStyle] = useState({ color:'#3076f3'})
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
            setdivTheme({ backgroundColor: 'snow' });
        } else {
            document.body.style.backgroundColor = "black";
            setdivTheme({ backgroundColor:'#1f2434'});
        }
    }, [theme])


    return (
        <>

            <div class="canvaContainer">
                <div style={{ ...divTheme, ...divStyle }}>
                    <div>
                        <p>Hi there, welcome to my website!</p>

                    </div>
                </div>
                <div id="about" style={{ ...divTheme, ...divStyle }}>
                </div>
                <div id="experience" style={{ ...divTheme, ...divStyle }}>
                </div>
                <div id="projects" style={{ ...divTheme, ...divStyle }}>
                </div>
                <div id="contact" style={{ ...divTheme, ...divStyle }}>
                </div>
                <div id="resume" style={{ ...divTheme ,...divStyle}}>
                </div>
            </div>
            <Footer theme={theme} />
        </>
    );
}

export default App;
