import React from "react"
import logo from "../../assents/imagenlogo.png"
import Icono from "../Icono"
import "./Navbar.css"

const Navbar = () => {
    return(
        <header>
        <img src={logo} alt="logo" />
        <h1>Tu banco</h1>
        <nav>
            <a href="../../app.js">Home</a>
            <a href="#">Empresas</a>
            <a href="#">Solicita tu tarjeta</a>
            <a href="#">Home Banking</a>
        </nav>
        <img src={Icono} alt="" />
        </header>
    )
}


export default Navbar