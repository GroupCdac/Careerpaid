// import React, { Component } from 'react'
// import Axios from 'axios';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import {history} from './mainPage';
// import JobSeekerPage from '../jobseeker/dashBoard';
// import CompanyPage from '../company/dashBoard';  
// import {Redirect} from 'react-router';
// export default class loginES extends Component {
    
//     state = {
//         isError: false,
//         username: '',
//         password: ''
//     }
//     handleOnChange = (e) => {
//         console.log(e.target.name);
//         this.setState({ [e.target.name] : e.target.value})
//     }
//      login= () => {
//         Axios.post('http://localhost:3001/login',{
//             userid: this.userid,
//             password: this.password
//         }).then((result)=> {
            
//             if(result.data.length!=0)
//             {
                
//                 this.setState({isError: false});
//                 if(result.data.type==="company")
//                 {
//                 console.log('comapany');
//                 history.push('/company');
//                 //User =result.data;
//                 window.open(`/company:${result.data._id}`,"_self");
                
//                 }
//                 else{
//                 <Route>
//                 <Redirect to='/jobSeeker'/>;
//                 </Route>
//                 }
//             }
//             else
//             this.setState({isError: true});
//         });
//     }
//     render() {
//         return (
//             <div className="jobList">
//                 <div className="jobContent">
//                     {this.isError ?
//                         <div className='alert'>Invalid username or password</div>
//                         : null}
//                     <table >
//                         <tr>
//                             <td>User Name:</td>
//                             <td>
//                                 <input
//                                     type='text'
//                                     name='uid'
//                                     onChange={this.handleOnChange} 
//                                 />
//                             </td>
//                         </tr>
//                         <tr>
//                             <td>Degree:</td>
//                             <td>
//                                 <input
//                                     type='password'
//                                     name='password'
//                                     onChange={this.handleOnChange }
//                                 />
//                             </td>
//                         </tr>
//                         <button onClick={this.login}>Submit</button>
//                     </table>

//                 </div>
//             </div>
//         )
//     }
// }
