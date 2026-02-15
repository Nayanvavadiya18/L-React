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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchNumber, setSearchNumber] = useState("");


  // Fetch users
  const fetchUsers = () => {
    setLoading(true);
    getAllUsers().then((res) => {
      setUsers(res.data.data || res.data);
      setLoading(false);
    }).catch((err) => {
      console.error("getAllUsers failed", err);
      setError("Failed to fetch users");
      setLoading(false);
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
    setError("");

    if (!formData.fullName || !formData.email || !formData.mobile) {
      setError("All fields are required");
      return;
    }

    createUser(formData).then(() => {
      fetchUsers();
      setFormData({ fullName: "", email: "", mobile: "" });
    }).catch((err) => {
      console.error("createUser failed:", err?.response || err);
      const msg = err?.response?.data?.message || err?.message || "Failed to create user";
      setError(msg);
    });
  };

  // Delete user
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteUser(id).then(() => {
        fetchUsers();
      }).catch((err) => {
        console.error("deleteUser failed", err);
        setError("Failed to delete user");
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Add User Form */}
      <div className="card">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Add New User</h3>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                name="fullName"
                placeholder="Enter full name"
                value={formData.fullName}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                name="email"
                type="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-2">Mobile</label>
              <input
                name="mobile"
                placeholder="Enter mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>
          </div>
          <button type="submit" className="btn-primary w-full md:w-auto">
            Add User
          </button>
        </form>
      </div>

      {/* Users List */}
      <div className="card">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Users List</h3>

        {loading ? (
          <div className="text-center py-8">
            <p className="text-gray-500">Loading users...</p>
          </div>
        ) : users.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No users found. Add one to get started.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <input
              className="px-4 py-2 border border-gray-300 rounded-lg w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ marginRight: '14px' }}
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <input
              className="mb-4 px-4 py-2 border border-gray-300 rounded-lg w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Search by mobile number..."
              value={searchNumber}
              onChange={(e) => setSearchNumber(e.target.value)}
            />
            <table className="w-full">

              <thead className="bg-gray-100 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Mobile</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {users
                  .filter((user) =>
                    user.mobile.includes(searchNumber)
                  )

                  .filter((user) =>
                    user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((user) => (
                    <tr key={user._id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-800 font-medium">{user.fullName}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{user.mobile}</td>
                      <td className="px-6 py-4 text-sm">
                        <button
                          onClick={() => handleDelete(user._id)}
                          className="btn-danger text-sm py-1 px-3"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Users;
