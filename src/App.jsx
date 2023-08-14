import React from 'react';

import InputOption from './InputOption';
import Input from './Input';
import { useEffect } from 'react';

const App = ({ theme }) => {
    useEffect(() => {
        if (theme == "white") {
            document.body.style.backgroundColor = "#dedede";
        } else {
            document.body.style.backgroundColor = "black";
        }
    }, [theme])
    return (
        <>

            <InputOption theme={theme} style={{ position: 'relative', display: 'flex', flexDirection: 'column', width: '8rem', top: '10rem' }} />
            <Input theme={theme} />
           
        </>
    );
}

export default App;
