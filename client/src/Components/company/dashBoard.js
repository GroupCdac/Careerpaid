

import React from 'react';

import Navbar from './menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PostedJob from './postedJobs';
import PostNewJob from './postNewJob';
  
function CompanyPage() {
  return (
    <Router>
      <Navbar />
      <Switch>
       
        <Route path='/postNewJob' component={PostNewJob} />
        <Route path='/postedJobs' component={PostedJob} />
       
      </Switch>
    </Router>
  );
}
  
export default CompanyPage;