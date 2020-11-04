import React from 'react';
import {NavLink} from 'react-router-dom';

export class Navbar extends React.Component{

    render(){
        return(
            <div>

<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
 
  <NavLink className="navbar-brand" to="/login">E-Commerce</NavLink>
  
 
  <ul className="navbar-nav">
    <li className="nav-item">
      <NavLink className="nav-link" to="/login">Login</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/register">Register</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/contact">Contact</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/inventory">Inventory</NavLink>
    </li>
  </ul>
</nav>

            </div>
        )
    }

}

export default Navbar;