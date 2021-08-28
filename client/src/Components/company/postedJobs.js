import React, { useState , useEffect} from 'react';
import Axios from 'axios';
import {User} from '../LoginRegistration/login';  


const PostedJob = () => {
    const [listOfJobs, setListOfJobs]=useState([]);
   
  
    useEffect(()=>{
      Axios.get('http://localhost:3001/postedJobs')
      .then((reponse)=>{
        
        setListOfJobs( reponse.data);
      })
      .catch(()=>{
        alert("Not Saved");
      })
    },[]);

    const deleteJob =(id) =>{
      console.log("deleting")
      Axios.put(`http://localhost:3001/deleteJob/${id}`).then(()=>{
        setListOfJobs(
          listOfJobs.filter((val)=>{
            return val._id!=id;
          })
        );
      });
    };


  return (
    
   <div className="jobList">
      {listOfJobs.map((val)=>{
        return <div>
          {"  "}
          <div className="jobContent">
          <b>{val.title}</b> <br/>
          {val.location}, {val.createdAt}
          <p>Skills: {val.skills}<br/>
          Experience: {val. experience}<br/>
          {val.details} </p>
          <button 
            id="deleteBtn"
            onClick={() => { 
            deleteJob(val._id);
            }}
            >
            Delete
            </button>
          <button >Apllicants</button>


          </div>
        </div>
      })}
  </div>
  );
  
};
  
export default PostedJob;