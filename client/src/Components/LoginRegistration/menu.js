import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from '../../logo.svg';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>

  
      <Nav>
        <Bars />
        
        <NavMenu>
        <img src={logo} className="App-logo" alt="logo" />
          <NavLink  to='/Aboutus' activeStyle>
          Aboutus
          </NavLink>
          <NavLink to='/Login' activeStyle>
          Login
          </NavLink>
          <NavLink to='/Registration' activeStyle>
          Registration
          </NavLink>
          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
      
    </>
  );
};
  
export default Navbar;