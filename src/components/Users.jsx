import { useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);

  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setShow(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>User Data</h2>

      <button onClick={getData}>Get Data</button>

      {show &&
        users.map((user) => (
          <p key={user.id}>
            {user.name} - {user.email}
          </p>
        ))}
    </div>
  );
}

export default Users;
