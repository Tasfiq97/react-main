import React from 'react'
import logo from "../images/logo.png"
import About from '../Pages/About'
import {Link} from "react-scroll"

function Navbar() {
    return (
        <>
       <div className="navbar">
       
          <nav className="logo">
              

             
          <a href="">
          <img src={logo} alt="no image"/>
          </a>

          </nav>
        <div className="nav-brand">
            <ul className="nav-link">
            <li className="nav-item">

            

                <Link smooth={true} duration={1000} to="home"  activeclassName="nav-items">
                Home
                </Link>
                
               
                </li>
                <li className="nav-item">
                  

                <Link smooth={true} duration={1000} to="ab"  activeclassName="nav-items">
                About me
                </Link>
    
                </li>
                <li className="nav-item">
                    

                 <Link smooth={true} duration={1000} to="ser"  activeclassName="nav-items">
                Services
                </Link>
                    
                </li>
                <li className="nav-item">
             

                <Link  smooth={true} duration={1000} to="por" activeclassName="nav-items">
                Portfolio
                </Link>
              
                </li>
                <li className="nav-item">
              

                < Link smooth={true} duration={1000} to="con" activeclassName="nav-items">
                Contact
                </Link>
                
                </li>
            </ul>
        </div>
       </div>
        </>
    )
}

export default Navbar
