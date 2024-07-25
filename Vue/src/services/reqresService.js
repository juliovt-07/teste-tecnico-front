import { reqresClient } from './apiService';

export default {
  getUsers(page) {
    return reqresClient.get(`/users?page=${page}&per_page=5&delay=3`);
  },
  getUser(id) {
    return reqresClient.get(`/users/${id}`);
  },
  createUser(data) {
    return reqresClient.post('/users', data);
  },
  updateUser(id, data) {
    return reqresClient.put(`/users/${id}`, data);
  },
  deleteUser(id) {
    return reqresClient.delete(`/users/${id}`);
  },
};
