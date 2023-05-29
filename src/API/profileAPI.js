import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "5f86b5bb-349a-433d-b394-ee88155aaf67" },
});

export const profileAPI = {
  usersProfile(UserId) {
    return instance.get(`profile/${UserId}`).then((response) => {
      return response.data;
    });
  },
  getUserStatus(UserId) {
    return instance.get(`profile/status/${UserId}`).then((response) => {
      return response.data;
    });
  },
  updateUserStatus(status) {
    return instance
      .put(`profile/status`, { status: status })
      .then((response) => {
        return response.data;
      });
  },
};
