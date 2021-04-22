import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from "./App"
import Home from './components/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Service from './Pages/Service';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <App />
  
  </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);


