import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom';

function ViewUser() {
  const {id} = useParams();
  const [user, setUser] = useState([]);
  
 

  useEffect(() => {
    
      axios.get(`/api/viewUser/${id}`).then((res) => {
        setUser(res.data);
      })
    .catch((error) => {
      console.log(error);
    });
  }, [id]);
  console.log(user)


  return (
    <div className="content-wrapper">
    <div className="content">
      <div className="row">
        <div className="mt-5 col-md-12">
        <div className="container mt-5" style={{ width: "40%" }}>
        <h2 className="bg-primary text-white text-center p-2 ">View Data</h2>
        <table className="table text-center ">
          <thead>
            <tr>
             
              <th>Name</th>
              <th>Email</th>
              
            </tr>
          </thead>
          <tbody>
           <tr>
             
            <td>{user.name}</td>
            <td>{user.email}</td>
           </tr>
          </tbody>
          <Link to='/'>
          <button className='btn btn-primary mt-5'>Back</button>
          </Link>
        </table>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default ViewUser