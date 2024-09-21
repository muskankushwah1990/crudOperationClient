import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

function EditUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  // useEffect(() => {
  //   try {
  //     axios.get(`http://localhost:4000/api/viewUser/${id}`).then((res) => {
  //       const viewData = res.data;
  //       console.log(viewData);
  //       setName(viewData.name)
  //       setEmail(viewData.email)
  //     });
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }, []);
  // console.log(name, email)

  // const updateForm = async (e) => {
  //   e.preventDefault();
  //   console.log(name, email)
  // };

  //insert form and update form is always same

  useEffect(() => {
    axios
      .get(`/api/viewUser/${id}`)
      .then((response) => {
        setName(response.data.name); //response.data.name se setname ke andar value jayegi or setname se name ke andar
        setEmail(response.data.email);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const UpdateData = async (e) => {
    e.preventDefault();
    console.log(name, email);
    try {
      const { data } = await axios.post(
        `/api/updateUser/${id}`,
        { name, email }
      );
      
      // console.log(data);
      toast.success(data.message)
      navigate("/");
      setName("");
      setEmail("");
     
     
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container mt-5 " style={{ width: "40%" }}>
        <h2 className="bg-primary text-center p-2 text-white">Edit User</h2>
        <form onSubmit={UpdateData}>
          <div className="mb-3">
            <label htmlFor="">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="sumbit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditUser;
