import React from 'react'
import Logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <div className="navbar" >
            <div className="contact-nav">
                <ul>
                    <li> <i className="fa-solid fa-envelope"></i> hello@homely.com</li>
                    <li> <i className="fa-solid fa-phone"></i> 123-456-5675</li>
                </ul>
                <ul>
                    <li> <i class="fa-solid fa-right-to-bracket"></i> Login</li>
                    <li> <i class="fa-solid fa-users-medical"></i> Register</li>
                    <li> <i class="fa-brands fa-facebook-f"></i></li>
                    <li> <i class="fa-brands fa-twitter"></i></li>
                    <li> <i class="fa-brands fa-google-plus-g"></i></li>
                </ul>
            </div>
            <div className="main-navbar">
                <img src={Logo} alt="logo" />
                <ul className="nav-links">
                    <li>Home</li>
                    <li>properties</li>
                    <li>Agents</li>
                    <li>Pages</li>
                    <li>Contact</li>
                    <button className='btn'><i className="fa-solid fa-plus"></i> Submit Property</button>
                </ul>
            </div>
        </div>
    )
}

export default Navbar