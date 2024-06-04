import React from "react";
import { NavbarMenu, NavConatiner } from "./style";

const Navbar = () => { 
    return (
        <NavConatiner>
            <NavbarMenu>Home</NavbarMenu>
            <NavbarMenu>About</NavbarMenu>
            <NavbarMenu>Contact</NavbarMenu>
            <NavbarMenu>Services</NavbarMenu>
            <NavbarMenu $selected>Get A Quote</NavbarMenu>
        </NavConatiner>
    );
};

export default Navbar;
