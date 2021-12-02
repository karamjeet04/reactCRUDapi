import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
export default function List() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    async function getAllstudents() {
      try {
        const students = await axios.get("http://localhost:1111/students");
        console.log(students.data);
        setStudents(students.data);
      } catch (error) {
        console.log("Something is wrong data nhi aya");
      }
    }
    getAllstudents();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:1111/students/${id}`);
    const newstudent = students.filter((item) => {
      console.log(item);
      return item.id !== id;
    });
    setStudents(newstudent);
  };
  return (
    <>
      <div className="container  border border-secondary  my-3">
        <div className=" card-header text-center text-white bg-info  border border-secondary  my-3">
          STUDENT LIST
        </div>
        <div className="row">
          <div className="col-8">
            <table className="table table-bordered border border-secondary  my-3">
              <thead>
                <tr>
                  <th scope="col">Sno</th>
                  <th scope="col"> Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{i + 1}</th>
                      <td>{student.stuname}</td>
                      <td>{student.email}</td>

                      <td>
                        <Link to={`/view/${student.id}`}>
                          <button
                            type="button"
                            className="btn btn-primary mr-3"
                          >
                            view
                          </button>
                        </Link>
                        <Link  className="m-3" to={`/edit/${student.id}`}>
                          <button
                            type="button"
                            className="btn btn-success"
                          >
                            edit
                          </button>
                        </Link>
                        <button
                          type="button"
                          className="btn btn-danger mr-3"
                          onClick={() => handleDelete(student.id)}
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
