import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// eslint-disable-next-line 
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Main from './Main';
// import Practice from './components/html_part/Practice';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  
  <Main />
  {/* <Practice/> */}

  </BrowserRouter>
);



reportWebVitals();
