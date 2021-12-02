import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    stuname: "",
    email: "",
  });

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

  function onTextfieldChange(e) {
    setStudent({ ...student, [e.target.name]: e.target.value });
    console.log(student);
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:1111/students/${id}`, student);
      navigate("/");
    } catch (error) {
      console.log("Something is wrong");
    }
  }
  function handleClick() {
    navigate("/");
  }

  return (
    <>
      <div
        className="container-fluid my-3  text-align: center "
        style={{ textAlign: "center" }}
      >
        <nav className="navbar navbar-light bg-success nav justify-content-center text-white font-size 46px">
          {" "}
          REACT CRUD API
          <div className="row align-items-center justify-content-center row-fluid"></div>
        </nav>
      </div>
      <div>
        <div className="container border border-secondary  my-5">
          <div className="card-header text-center text-white bg-success my-3">
            EDIT STUDENT
          </div>
          <form className="container  ">
            <div className="form-group">
              <hr />
           
                <div className="row">
                  <div className="col">
                    <label>id</label>
                    <input
                      type="text"
                      className="form-control"
                      name="id"
                      value={id}
                      disabled
                      id="id"
                    />
                  </div>
                  <div className="col">
                    <label>name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="stuname"
                      value={student.stuname}
                      id="stuname"
                      onChange={(e) => onTextfieldChange(e)}
                    />
                  </div>
                </div>
            
            </div>
            <br />
            <div className="form-group">
              <label> EmailAddress</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={student.email}
                name="email"
                onChange={(e) => onTextfieldChange(e)}
              />
            </div>
            <br />

            <div className="mx-auto" style={{ width: 350 }}>
              {" "}
              <button
                type="submit"
                className="btn btn-primary my-3 mx-auto"
                style={{ width: 350 }}
                onClick={(e) => onFormSubmit(e)}
              >
                UPDATE
              </button>
            </div>
          </form>{" "}
          <br />
          <div className="mx-auto" style={{ width: 190 }}>
            <button
              type="submit"
              onClick={() => handleClick()}
              className="btn btn-success mx-auto mb-3 "
            >
              BACK TO Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
