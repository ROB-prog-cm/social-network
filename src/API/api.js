import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseUrl: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "fa1aadd0-aa94-4bdf-b467-d4424d399080"
  }
});

export const  usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,).then(response => {
      return response.data
    })
  }
}


/*
export const getUsers2 = (currentPage, pageSize) => {
  return instance.get(baseUrl + `users?page=${currentPage}&count=${pageSize}`,
    {
      withCredentials: true
    }).then(response => {
    return response.data
  })
}
*/
