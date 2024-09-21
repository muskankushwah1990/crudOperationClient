import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function AddUser() {
  //insert user
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();


  const submitData = async (e) => {
    e.preventDefault();
    console.log(name, email);

    try {
      const { data } = await axios.post(
        "/api/insertUser",
        { name, email }
      );

      setName("");
      setEmail("");
      toast.success(data.message);
      navigate("/")
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };



  return (
    <>
    <center>
      <form className="my-5 mx-5" onSubmit={submitData}>
        <div className="col-md-4">
          <h2 className="text-center bg-primary">Add User</h2>
          <label htmlFor="">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="btn btn-success mt-3 mb-5">
            Add User
          </button>
        </div>
      </form>
      </center>

     
    </>
  );
}

export default AddUser;
