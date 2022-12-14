import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import RegistrationPage from './FrontPage/RegistrationPage';
// import Front_page from './FrontPage/Front_page';
// import Cart from "./FrontPage/Cart";
// import Login from "./FrontPage/login_page"
import reportWebVitals from './reportWebVitals';
import Routers from './Routers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
