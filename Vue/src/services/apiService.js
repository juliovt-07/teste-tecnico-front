import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://reqres.in/api',
  headers: {
    'Content-Type': 'application/json',
    'access-control-allow-origin': '*' 

  },
});

export default {
  getUsers(page) {
    return apiClient.get(`/users?page=${page}?per_page=5?delay=3`);
  },
  getUser(id) {
    return apiClient.get(`/users/${id}`);
  },
  createUser(data) {
    return apiClient.post('/users', data);
  },
  updateUser(id, data) {
    return apiClient.put(`/users/${id}`, data);
  },
  deleteUser(id) {
    return apiClient.delete(`/users/${id}`);
  },
};