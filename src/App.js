import React, { useEffect, useState } from 'react'
import "./App.css"
import Home from './components/Home'
import About from './Pages/About'
import Navbar from './components/Navbar'
import Service from './Pages/Service'
import Portfolio from './Pages/Portfolio'
import Contact from './Pages/Contact'


import "./styles/Navbar.css";
import "./styles/home.css";
import "./styles/About.css";
import "./styles/skill.css"
import "./styles/service.css";
import "./styles/portfolio.css";
import "./styles/contact.css";

import Aos from "aos";
import "../node_modules/aos/dist/aos.css"
import { Switch,Route, Router } from 'react-router-dom';

function App() {
  useEffect (()=>{
    Aos.init ({duration:3000,
      offset: 250});
  }, [])


  const [navToggle,setNavToggle]= useState(false)

  const navClick =()=>{
    setNavToggle(!navToggle)

  }
  return (
    <>
    <div smooth={true} duration={1000} className="app">
      <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
      <div className="sidebar-full">
      
        <Navbar/>
      </div>

      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className="main-content">
        
        <div id="home">

      <div className="main">
        
        <Home/>
        </div>
          </div>

      </div>
      <div className="about-me">
      <div id="ab">
          <div className="about">
          <About/>
        </div>
        </div>
      </div>
      <div className="service">
        <div id="ser">

        
        <div className="service-sec">
          <Service></Service>
        </div>
        </div>
      </div>
      <div className="portfolio">
        <div id="por">

        
        <div className="port">
          <Portfolio/>
        </div>
        </div>
      </div>
      <div className="contact-full">
        <div id="con">

     
        <div className="contact">
          <Contact/>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App

