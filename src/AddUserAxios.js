import axios from "axios";
import React from "react";
import { useState } from "react";

const AddUserAxios = () => {
  const [user, setUser] = useState("initial name");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  function handleChange(e) {
    setUser({ id: Date.now(), [e.target.name]: e.target.value });
  }
  return (
    <div>
      AddUser:
      <form onSubmit={handleSubmit}>
        <label>
          Person Name With AXIOS:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <button type="submit"> Add User</button>
      </form>
    </div>
  );
};

export default AddUserAxios;
