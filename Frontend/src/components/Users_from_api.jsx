import { useState } from "react";
import axios from "axios";

function Users_from_api() {
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

      <h4>User Name - User Email - User City - User Phone</h4>
      {show &&
        users.map((user) => (
          <p key={user.id}>
            {user.name} -   {user.email} - {user.address.city} - {user.phone}
          </p>
        ))}
    </div>
  );
}

export default Users;
