import { useState, useEffect } from "react";
import {
  createUser,
  getAllUsers,
  deleteUser
} from "../Service/userApi";

function Users() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: ""
  });

  // Fetch users
  const fetchUsers = () => {
    getAllUsers().then((res) => {
      setUsers(res.data.data || res.data);
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Create user
  const handleSubmit = (e) => {
    e.preventDefault();

    createUser(formData).then(() => {
      fetchUsers();
      setFormData({ fullName: "", email: "", mobile: "" });
    });
  };

  // Delete user
  const handleDelete = (id) => {
    deleteUser(id).then(() => {
      fetchUsers();
    });
  };

  return (
    <div>
      <h2>User CRUD</h2>

      {/* Create User */}
      <form onSubmit={handleSubmit}>
        <input
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name="mobile"
          placeholder="Mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
        <button type="submit">Add User</button>
      </form>

      <hr />

      {/* Users List */}
      {users.map((user) => (
        <div key={user._id}>
          <p>
            {user.fullName} | {user.email} | {user.mobile}
          </p>
          <button onClick={() => handleDelete(user._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Users;
