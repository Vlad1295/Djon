import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "5f86b5bb-349a-433d-b394-ee88155aaf67" },
});

export const authMeAPI = {
  registrationMe() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
  login(email, password, rememberMe = false, captcha) {
    return instance.post(`auth/login`, { email, password, rememberMe, captcha});
  },
  logout() {
    return instance.delete(`auth/login`);
  },
  captcha() {
    return instance.get(`security/get-captcha-url`);
  },
};
