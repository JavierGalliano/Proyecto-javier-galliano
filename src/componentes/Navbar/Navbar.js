import React from "react"
import logo from "../../assents/imagenlogo.png"
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
        </header>
    )
}


export default Navbar