import React from 'react';

import InputOption from './InputOption';
import Input from './Input';

const App = ({theme}) => {
    return (
    <>
            <InputOption theme={theme} style={{ position: 'relative', display: 'flex', flexDirection: 'column', width: '8rem', top: '10rem' }} />
            <Input theme={theme} />
           
        </>
    );
}

export default App;
