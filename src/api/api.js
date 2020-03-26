import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "a1fa4ec0-db23-4591-a5f1-38dd84b215fc"
  }
})

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  followUser(userId) {
    return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
      .then(response => response.data);
  },
  unfollowUser(userId) {
    return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
      .then(response => response.data);
  }
}

export const authAPI = {
  getUserData() {
    return instance.get('auth/me');
  },
  login(email, password, rememberMe) {
    return instance.post('/auth/login', {email, password, rememberMe});
  },
  logout() {
    return instance.delete('/auth/login');
  }
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`/profile/${userId}`)
      .then(response => response.data);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status })
  }
}
