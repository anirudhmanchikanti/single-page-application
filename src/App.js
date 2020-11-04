import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import RouterConfig from './routerConfig/RouterConfig';
import {HashRouter} from 'react-router-dom';

function App() {
  return (
    <div>
         <HashRouter> 
          <Navbar/>
          <RouterConfig/>
          </HashRouter>
    </div>
  );
}

export default App;
