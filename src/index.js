import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import InputOption from './InputOption';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <InputOption style={{ display: 'flex', flexDirection: 'column', width: '10rem',marginTop:'10rem' }} />
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
