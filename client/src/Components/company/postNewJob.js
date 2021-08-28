import React, { useState } from 'react';
import Axios from 'axios';
  


const PostNewJob = () => {
  
    const [jobtitle, setTitle]=useState("");
    const [skills, setSkill]=useState("");
    const [degree, setDegree]=useState("");
    const [location, setLocation]=useState("");
    const [experience, setExperience]=useState("");
    const [details, setDetails]=useState("");
    const addJob =() =>{
      const skillArr= skills.split(",");
      Axios.post('http://localhost:3001/postJob',{
        jobtitle: jobtitle, 
        company: "this Company",
        skills: skillArr,
        degree: degree,
        location: location,
        experience:experience,
        details:details
      })
      .then(()=>{
        alert("Saved");
      })
      .catch(()=>{
        alert("Not Saved");
      })
    }
  
  return (
    <div className="jobList">
      <div className="jobContent">
      <table >
        <tr>
          <td>Job title:</td>
          <td>
            <input
              type='text'
              name='jobtitle'
              onChange={(event)=> {setTitle(event.target.value);}}
            />
          </td>
        </tr>
        <tr>
          <td>Degree:</td>
          <td>
            <input
              type='text'
              name='degree'
              onChange={(event)=> {setDegree(event.target.value);}}
            />
          </td>
        </tr>
        <tr>
          <td> Location:</td>
          <td>
          <input
            type='text'
            name='Location'
            onChange={(event)=> {setLocation(event.target.value);}}
          />
          </td>
        </tr>
        <tr>
          <td> Skills:</td>
          <td>
          <input
            type='text'
            name='skills'
            onChange={(event)=> {setSkill(event.target.value);}}
          />
          </td>
        </tr>
        <tr>
          <td> Experience: </td>
          <td>
          <input
            type='text'
            name='experience'
            onChange={(event)=> {setExperience(event.target.value);}}
          />
          </td>
        </tr>
        <tr>
          <td> Details:</td>
          <td>
          <textarea
            rows="4"
            name='details'
            onChange={(event)=> {setDetails(event.target.value);}}
          />
          </td>
        </tr>

      <button  onClick={addJob}>Submit</button>
      </table>
      </div>
    </div>
  );
};
  
export default PostNewJob;