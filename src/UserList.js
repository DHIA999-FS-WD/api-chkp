import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import "./userCard.css";

const UserList = () => {
  const [listOfUSer, setListOfUser] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    function fetchData() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((user) => setListOfUser(user.data))
        .catch((error) => setError(error));
    }
    fetchData();
  }, []);
  console.log(listOfUSer);

  return (
    <div className="userList">
      {listOfUSer.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
          company={user.company.name}
          adress={`${user.address.street}- ${user.address.suite} - ${user.address.city}`}
          phone={user.phone}
        />
      ))}
    </div>
  );
};

export default UserList;
