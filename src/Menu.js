import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
    return(

        <div>

        <br/>
        &nbsp;&nbsp;
        <NavLink exact to="/">Home</NavLink>&nbsp;&nbsp;
        <NavLink exact to="/demo">Demo</NavLink>&nbsp;&nbsp;
        <NavLink exact to="/info">Info</NavLink>&nbsp;&nbsp;
        <NavLink exact to="/services">Services</NavLink>&nbsp;&nbsp;
        <NavLink exact to="/features">Features</NavLink>&nbsp;&nbsp;
        <NavLink exact to="/policies">Policies</NavLink>&nbsp;&nbsp;
        <NavLink exact to="/blogs">Blogs</NavLink>&nbsp;&nbsp;
        <NavLink exact to="/login">Login</NavLink>&nbsp;&nbsp;
        <NavLink exact to="/about">About</NavLink>&nbsp;&nbsp;
        <NavLink exact to="/contact">Contact</NavLink>
        </div>

    );
}

export default Menu;