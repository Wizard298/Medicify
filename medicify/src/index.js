import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Main from './Main';
import Cart from './components/html_part/Cart';
// import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Cart>
        <Main />
        {/* <App/> */}
      </Cart>
    </BrowserRouter>
  </React.StrictMode>
);



reportWebVitals();
