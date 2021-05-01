import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes';
import { BrowserRouter } from 'react-router-dom';
import './Resources/css/app.css';
import reportWebVitals from './reportWebVitals';
import {firebase} from './firebase'

firebase.auth().onAuthStateChanged((user)=>{
  ReactDOM.render(
  
    <BrowserRouter>
      <App user={user}/>
    </BrowserRouter>
    ,
    
    document.getElementById('root')
  );
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
