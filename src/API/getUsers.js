import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "5f86b5bb-349a-433d-b394-ee88155aaf67" },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`Users?page=${currentPage}&count=${pageSize}`)
     .then((response)=>{return response.data} )
  },

  followUser(id) {
    return instance.post(`follow/${id}`).then((response) => {
      return response.data;
    });
  },

  unfollowUser(id) {
    return instance.delete(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
  usersProfile(UserId) {
    return instance.get(`profile/${UserId}`).then((response) => {
      return response.data;
    });
  },
};
