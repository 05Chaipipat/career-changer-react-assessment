import React from "react";
import { useState } from "react";

const HomeAdmin = (props) => {
  const admin = props.dataEmployees;
  const deleteData = props.deleteData;
  const setEmployees = props.setEmployees;
  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [position, setposition] = useState("");

  const input = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 100);
    const dataUser = {
      id: id,
      name: name,
      lastname: lastName,
      position: position,
    };
    const dataAll = [...admin, dataUser];
    setEmployees(dataAll);
    console.log(dataUser);
  };
  return (
    <div>
      <h1>Create User Here</h1>
      <input
        type="txet"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="txet"
        placeholder="Last Name"
        onChange={(e) => setlastName(e.target.value)}
      />
      <input
        type="txet"
        placeholder="Position"
        onChange={(e) => setposition(e.target.value)}
      />

      <button onClick={input}>Save</button>
      <table>
        <tr>
          <th>Name</th>
          <th>Last Name</th>
          <th>Position</th>
          <th>Action</th>
        </tr>
        {admin.map((dataAdmin) => {
          return (
            <tr>
              <td>{dataAdmin.name}</td>
              <td>{dataAdmin.lastname}</td>
              <td>{dataAdmin.position}</td>
              <td>
                <button onClick={() => deleteData(dataAdmin.id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default HomeAdmin;
