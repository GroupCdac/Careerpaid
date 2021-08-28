import React, { useState } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {history} from './mainPage';
import JobSeekerPage from '../jobseeker/dashBoard';
import CompanyPage from '../company/dashBoard';  
import {Redirect} from 'react-router';
import { useHistory } from 'react-router-dom';
const LoginPage=() =>{
    let history= useHistory();
    const [uid, setUid]= useState("");
    const [password, setPassword]= useState("");
    const [isError,setIsError]=useState(false);
    const login= () => {
        Axios.post('http://localhost:3001/login',{
            userid: uid,
            password: password
        }).then((result)=> {
            setIsError(false);
            if(result.data.length!=0)
            {
                
                
                if(result.data.type==="company")
                {
                console.log('comapany');
                history.push('/company');
                //User =result.data;
                //window.open(`/company:${result.data._id}`,"_self");
                
                }
                else{
                <Route>
                <Redirect to='/jobSeeker'/>;
                </Route>
                }
            }
            else
                setIsError(true);
        });
    }
    return(
    <div className="jobList">
      <div className="jobContent">
      { isError ? 
        <div className='alert'>Invalid username or password</div>
        : null } 
  <table >
        <tr>
          <td>User Name:</td>
          <td>
            <input
              type='text'
              name='uid'
              onChange={(event)=> {setUid(event.target.value);}}
            />
          </td>
        </tr>
        <tr>
          <td>Degree:</td>
          <td>
            <input
                type='password'
                name='password'
                onChange={(event)=> {setPassword(event.target.value);}}
            />
          </td>
        </tr>
        <button  onClick={login}>Submit</button>
      </table>
     
      </div>
      {/* <Router>
        <Switch>
        
        <Route path='/company' component={CompanyPage} />
        <Route path='/jobSeeker' component={JobSeekerPage} />
    
        </Switch>
    </Router> */}
    </div>
    
    );

}
export default LoginPage;