import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseUrl: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "fa1aadd0-aa94-4bdf-b467-d4424d399080"
  }
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,).then(response => {
      return response.data
    })
  },
  follow(userId) {
    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
  },
  unfollow(userId) {
    return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
  }
}

