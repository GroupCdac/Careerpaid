

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './menu';
import JobSeekerPage from '../jobseeker/dashBoard';
import CompanyPage from '../company/dashBoard';  
import LoginPage from './login';
import { createBrowserHistory } from "history";
//export default createBrowserHistory(); 
//import createBrowserHistory from 'history/createBrowserHistory';
export const history = createBrowserHistory();
function MainPage() {
  return (
    
    <Router history={history}>
      
      <Switch>
        
        <Route path='/company/' component={CompanyPage} />
        <Route path='/jobSeeker/:userId' component={JobSeekerPage} />
        //<Route path='/' component={LoginPage} />
       
      </Switch>
    </Router>
   
  );
}
  
export default MainPage;