import React from "react";
import { BrowserRouter, Router, Link, Routes, Route } from "react-router-dom";
import Login from "./FrontPage/login_page";
import Register from "./FrontPage/RegistrationPage";
import Front_page from "./FrontPage/Front_page";
import Cart from "./FrontPage/Cart";

const Routers = () => {

    return (
        <div>
        <BrowserRouter>
        <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="Frontpage" element={<Front_page/>} />
        <Route path="cart" element={<Cart/>} />
        </Routes>
        </BrowserRouter>
        </div>)
}

export default Router;