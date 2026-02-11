import axios from "axios";

const API_URL = "http://localhost:5000/api/users";

// Create user
export const createUser = (userData) => {
  return axios.post(`${API_URL}/create`, userData);
};

// Get all users
export const getAllUsers = () => {
  return axios.get(API_URL);
};

// Update user
export const updateUser = (id, userData) => {
  return axios.put(`${API_URL}/${id}`, userData);
};

// Delete user
export const deleteUser = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
