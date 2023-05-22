import { authMeAPI } from "../../../API/authMeApi";
import {Field, Form, Formik } from "formik";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const SET_USER_DATA = "SET_USER_DATA";

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.information,
      };
    default:
      return state;
  }
};
export const setUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  information: { id, email, login, isAuth },
});

export const registrationMeThunk = () => {
  return (dispatch) => {
   return authMeAPI.registrationMe().then((data) => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        dispatch(setUserData(id, login, email, true));
      }
    });
  };
};
export const loginThunk = (email, password, rememberMe) => {
  return (dispatch) => {
    authMeAPI.login(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(registrationMeThunk());
      } 
    });
  };
};
export const logoutThunk = () => {
  return (dispatch) => {
    authMeAPI.logout().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(registrationMeThunk(null, null, null, false));
      }
    });
  };
};
export default authReducer;
