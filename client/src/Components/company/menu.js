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
        <img src={logo} className="App-logo" alt="logo" />
        <NavMenu>
          <NavLink  to='/My profile' activeStyle>
          My profile
          </NavLink>
          <NavLink to='/postNewJob' activeStyle>
          New Job
          </NavLink>
          <NavLink to='/Candidates' activeStyle>
          Candidates
          </NavLink>
          <NavLink to='/postedJobs' activeStyle>
          Posted Jobs
          </NavLink>
          <NavLink to='/Logout' activeStyle>
            Logout
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
      
    </>
  );
};
  
export default Navbar;