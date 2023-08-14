import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import Theme from './Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Theme style={{ top: '10rem', left: '20rem' }} />
 
   </>
);
reportWebVitals();
