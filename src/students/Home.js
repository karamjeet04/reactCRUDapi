import React from "react";
import "../index.css";
import List from "./Student/List";
import { useState } from "react";
import axios from "axios";
export default function Home() {
  const [student, setStudent] = useState({
    stuname: "",
    email: "",
  });

  const [status, setStatus] = useState();
  function onTextfieldChange(e) {
    setStudent({ ...student, [e.target.name]: e.target.value });

    console.log(student);
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    if (student.stuname === "") {
      return alert("Title or Email box Cannot be blank");
    }

    //e.preventDefault();

    try {
      await axios.post(`http://localhost:1111/students`, student);
      setStatus(true);
    } catch (error) {
      console.log("Something is wrong");
    }
  }

  if (status) {
    return <Home />;
  }

  return (
    <>
      <div
        className="container-fluid my-3  text-align: center "
        style={{ textAlign: "center" }}
      >
        <nav className="navbar navbar-light bg-success text-center justify-content-center text-white">
          <div className="row align-items-center justify-content-center row-fluid">
            <div className=" text-center text-white "> React CRUD API </div>
          </div>
        </nav>
      </div>
      <div>
        <div
          className="container card mr-3 border border-secondary"
          style={{ width: 1000 }}
        >
          <div className="card-header text-center text-white bg-primary  my-3">
            Add Students
          </div>
          <form className="container  ">
            <div className="form-group">
              <label>name</label>
              <input
                type="text"
                className="form-control  width:50"
                id="stuname"
                aria-describedby="emailHelp"
                name="stuname"
                placeholder="name"
                onChange={(e) => onTextfieldChange(e)}
              />
            </div>
            <br />
            <div className="form-group">
              <label> EmailAddress</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="email"
                onChange={(e) => onTextfieldChange(e)}
              />
              <br />
              <button
                type="submit"
                className="btn btn-success"
                onClick={(e) => onFormSubmit(e)}
              >
                Add
              </button>
            </div>
            <br />
          </form>
        </div>
      </div>
      <br />
      <List />
    </>
  );
}
