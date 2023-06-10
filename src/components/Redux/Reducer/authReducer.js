import { authMeAPI } from "../../../API/authMeApi";
import { Field, Form, Formik } from "formik";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const SET_USER_DATA = "SET_USER_DATA";

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.information,
      };
    case "SET_CAPTCHA": {
      return {
        ...state,
        captchaUrl: action.captchaUrl,
      };
    }
    default:
      return state;
  }
};
export const setUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  information: { id, email, login, isAuth },
});
export const setCaptchaUrl = (captchaUrl) => {
  return { type: "SET_CAPTCHA", captchaUrl };
};

export const registrationMeThunk = () => async (dispatch) => {
  const data = await authMeAPI.registrationMe();

  if (data.resultCode === 0) {
    let { id, login, email } = data.data;
    dispatch(setUserData(id, login, email, true));
  } 
};
export const loginThunk = (email, password, rememberMe, captcha) => async (dispatch) => {
  const response = await authMeAPI.login(email, password, rememberMe, captcha);
  if (response.data.resultCode === 0) {
    dispatch(registrationMeThunk());
  }
  else if (response.data.resultCode === 10) {
    const response = await authMeAPI.captcha();
    dispatch(setCaptchaUrl(response.data.url));
  }
};

export const logoutThunk = () => async (dispatch) => {
  const response = await authMeAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(registrationMeThunk(null, null, null, false));
  }
};
export default authReducer;
