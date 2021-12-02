import React from "react";

import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function View() {
  const { id } = useParams();
  console.log(id);
  const [student, setStudent] = useState([]);
  const navigate= useNavigate();
   useEffect(() => {
    async function getstudent() {
      try {
        const student = await axios.get(`http://localhost:1111/students/${id}`);
        console.log(student.data);
        setStudent(student.data);
      } catch (error) {
        console.log(" data nhi mila Something is wrong");
      }
    }
    getstudent();
  }, [id]);
 
  function handleClick(){
    navigate("/")
  }
  return (
    
    <div className="container card border border-secondary  my-5"  style={{width: 1000}}>
      <div className="card-header text-center text-white bg-info  my-3">STUDENT LIST</div>
      <table className="container table table-bordered  border border-secondary  my-5">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col"> Name</th>
            <th scope="col">Email</th>

         
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{student.id}</th>
            <td>{student.stuname}</td>
            <td>{student.email}</td>

          
          </tr>
        </tbody>
      </table>
     
        <button type="button" className="  btn btn-success  my-3" onClick={handleClick}> 
          back to Home<i className="far fa-trash-alt"></i>
        </button>
    
    </div>
  );
}
