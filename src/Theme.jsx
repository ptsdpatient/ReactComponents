import './styles/Theme.css';
import './styles/App.css';
import React from 'react';
import discordIcon from './icon/webp/discord.webp';
import linkedinIcon from './icon/webp/linkedin.webp';
import instagramIcon from './icon/webp/instagram.webp';
import whatsappIcon from './icon/webp/whatsapp.webp';
import youtubeIcon from './icon/webp/youtube.webp';
import githubIcon from './icon/webp/github.webp';
import { useState, useEffect } from 'react';
import App from './App';
const Theme = (props) => {
    const [theme, setTheme] = useState("white");
    const [sliderStyle, setSliderStyle] = useState({ backgroundColor: '#dedede' })
    const [dotPosition, setDotPosition] = useState({ left: '1.3rem', backgroundColor: '#3076f3' });
    const [headerStyle, setHeaderStyle] = useState({ color: '#dedede', backgroundColor: 'snow'})
    const [isSticky, setSticky] = useState(false);
    const [themeIcon, setThemeIcon] = useState("🌞");
    const [mobileMenu, setMobileMenu] = useState("≢");
    const [pointerList, setPointerList] = useState(["about","experience","projects","contact","resume"]);
    const [mobileMenuStyle, setmobileMenuStyle] = useState({display:'none'})
    const [isMobile,setIsMobile]=useState(window.innerWidth<=768)
    
    
    const changeTheme = () => {
        if (theme == "black") {
            console.log("black")
            setTheme("white");
            setThemeIcon("🌞");
            setDotPosition({ ...dotPosition, left: '1.3rem' });
            setHeaderStyle({ ...headerStyle, color: '#dedede', backgroundColor:'snow'})
            setSliderStyle({ backgroundColor: '#dedede' });
            
        } else {
            setTheme("black");
            setThemeIcon("🌜");
            setDotPosition({ ...dotPosition, left: '0rem' });
            setHeaderStyle({ ...headerStyle, color: 'black', backgroundColor: '#1f2434' })
            setSliderStyle({ backgroundColor: 'black'});
        }            
    }

    const jumpPage = (key) => {
        const canva = document.getElementById(key);
        canva.scrollIntoView({behavior:"smooth"})
    }
    const updateIsMobile = () => {
        setIsMobile(window.innerWidth <= 768)
    }
    useEffect(() => {
        updateIsMobile()
        window.addEventListener('resize', updateIsMobile)
        return () => {           
            window.removeEventListener('resize',updateIsMobile)
        }
    }, [])

    window.onscroll = () => {
        if (window.pageYOffset > 120 && !isSticky) {
            setSticky(true);           
        } else if (isSticky && window.pageYOffset < 120) {
            setSticky(false);
        }
    }
    const handleMobileMenu = () => {
        if (mobileMenu === "≘") {
            setMobileMenu("≢");
            setmobileMenuStyle({ display: 'none'})
        } else {
            setMobileMenu("≘");
            setmobileMenuStyle({ display: 'flex' })

        }
        
    }

    if (isMobile) {        
        return (<>
            <div id="header" style={{ ...headerStyle, height: '4.3rem', width: '100%', position:'fixed'}} >
                <div style={{height:'4.3rem',width:'100%',display:'flex',justifyContent:'space-between'} }>
                    <div class="headTitle" style={{marginLeft:'1rem',marginTop:'0.5rem'} }>T4NISHQ</div>
                <div>
                <div class="slider" style={{ ...sliderStyle, position: 'relative', top: '1.3rem' }} onClick={changeTheme}><div class="dot" style={dotPosition} ></div></div>
                <p class="themeicon" style={{ position:'relative',margin:'auto',marginLeft:'3rem',marginTop:'-0.8rem'}}>{themeIcon}</p>
                </div>
                <p class="mobileMenuIcon" onClick={handleMobileMenu} style={{ fontSize: '3rem', color: '#3076f3', cursor: 'pointer', fontWeight: 'normal', position: 'relative', top: '-3.4rem', userSelect: 'none',marginRight:'2rem' }}>{mobileMenu}</p>

                </div>
            </div>

            <div style={{ ...mobileMenuStyle, position: 'fixed', top: '4.3rem', left: '0rem', width: '100%' }} onClick={() => {handleMobileMenu() } }>
                <div style={{ width: '100%', height: '50rem', backgroundColor: theme === 'white' ? 'snow' : '#1f2434' } }>
                    <div class="iconList" style={{margin:'auto',marginTop:'1.7rem',width:'80%',justifyContent:'space-between'} }><img src={githubIcon}></img><img src={linkedinIcon}></img><img src={instagramIcon}></img><img src={whatsappIcon}></img><img src={youtubeIcon}></img><img src={discordIcon}></img></div>
                    <div class="container" style={{ flexDirection: 'column', margin: 'auto', marginTop: '2.5rem' }}>{pointerList.map((textname, key) => (<p class="underline-paragraph" key={key} onClick={() => { jumpPage(textname);handleMobileMenu() }}>{textname}/</p>))}</div>
                
                </div>
            </div>


            <App theme={theme} />

        </>);
    } else {
        return (<>
            <div id="header" style={{ ...headerStyle, height: '4.3rem', width: '100rem', position: 'fixed' }} >
                <div style={{height:'4.3rem',width:'100rem',position:'fixed',display:'flex'} }>
                    <div class="headTitle" style={{marginLeft:'1.5rem',marginTop:'0.5rem'} }>T4NISHQ</div>
                    <div class="iconList" style={{position:'absolute',left:'11rem',marginTop:'0.8rem'} }><img src={githubIcon}></img><img src={linkedinIcon}></img><img src={instagramIcon}></img><img src={whatsappIcon}></img><img src={youtubeIcon}></img><img src={discordIcon}></img></div>
                    <div class="container" style={{position:'absolute',left:'31.5rem',marginTop:'0.4rem'} }>{pointerList.map((textname, key) => (<p class="underline-paragraph" key={key} onClick={() => { jumpPage(textname) }}>{textname}/</p>))}</div>
                    <div style={{position:'absolute',left:'65rem'} }>
                      <div class="slider" style={{ ...sliderStyle ,position: 'relative', top: '1.3rem' }} onClick={changeTheme}><div class="dot" style={dotPosition} ></div></div>
                      <p class="themeicon" style={{ margin: 'auto', marginLeft: '3rem', marginTop: '-0.8rem' }}>{themeIcon}</p>
                </div>
                </div>
            </div>
            <App theme={theme} />

        </>)
    }
}
export default Theme;

