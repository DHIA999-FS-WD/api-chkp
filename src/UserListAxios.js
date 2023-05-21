import { useEffect, useState } from "react";
import AddUserAxios from "./AddUserAxios";

const UserListAxios = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    function fetchData() {
      "https://hn.algolia.com/api/v1/search?query=redux"
        .then((response) => response.json())
        .then((response) => setData(response.hits))
        .catch((response) => setError(response));
    }
    fetchData();
  }, []);
  console.log(data);

  return (
    <div>
      UserList AXIOS :
      <ul>
        {data.map((course) => (
          <li>
            <a href={course.url}>{course.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserListAxios;
