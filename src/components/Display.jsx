import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Display() {
  const [user, setUser] = useState([]);

  // useEffect(() => {
  //   try {
  //     axios.get("http://localhost:4000/api/getAllUser").then((res) => {
  //       setData(res.data)
  //     });
  //     console.log(data)

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }, []);
  // console.log(data)

  const fetchItems = async () => {
    try {
      const response = await axios.get("/api/getAllUser");
      //console.log(response.data)
      setUser(response.data);
    } catch (error) {
      console.log("Error fetching items:", error);
    }
  };
  // console.log(user)

  useEffect(() => {
    fetchItems();
  }, []);




  const handleDeleteItem = async (id) => {
    await axios
    .get(`/api/deleteUser/${id}`)
    .then((res) => {
      setUser(user.filter((item) => item._id !== id))
      toast.success(res.data.message);
    })
    .catch((error) => {
      console.log(error);
    })
  }


  return (
    <>
   

      <Link to="insertUser" className="btn btn-primary my-5">Add User</Link>

      <div className="card-body">
        <table id="userdata" className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="table-success">
          {user.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td className="py-3">
                  <Link to={`/viewUser/` + item._id}>
                    {/* <i className="fa-solid fa-eye"></i> */}
                    <button className="btn btn-success mx-2">View</button>
                  </Link>

                  <Link to={`/editUser/` + item._id} className="">
                    {/* <i className="fa-solid fa-pen-to-square"></i> */}
                   <button className="btn btn-primary">Edit</button>
                  </Link>

                  <button onClick={() => handleDeleteItem(item._id)} className="btn btn-danger mx-2">
                    Delete
                  </button>
                  </td>
                  </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Display;
