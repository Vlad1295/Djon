import { authMeAPI } from "../../../API/authMeApi";
import { Field, Form, Formik } from "formik";
type InitialStateType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
  captchaUrl: string | null;
};
let initialState: InitialStateType = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null,
};

const SET_USER_DATA = "SET_USER_DATA";

const authReducer = (state = initialState, action: any): InitialStateType => {
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

type SetUserDataInformationType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};
type SetUserDataType = {
  type: typeof SET_USER_DATA;
  information: SetUserDataInformationType;
};
export const setUserData = (
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): SetUserDataType => ({
  type: SET_USER_DATA,
  information: { id, email, login, isAuth },
});

type SetCaptchaUrlType = {
  type: "SET_CAPTCHA";
  captchaUrl: string;
};
export const setCaptchaUrl = (captchaUrl: string): SetCaptchaUrlType => {
  return { type: "SET_CAPTCHA", captchaUrl };
};

export const registrationMeThunk = () => async (dispatch: any) => {
  const data = await authMeAPI.registrationMe();

  if (data.resultCode === 0) {
    let { id, login, email } = data.data;
    dispatch(setUserData(id, login, email, true));
  }
};
export const loginThunk =
  (email: string, password: string, rememberMe: boolean, captcha: string) =>
  async (dispatch: any) => {
    const response = await authMeAPI.login(
      email,
      password,
      rememberMe,
      captcha
    );
    if (response.data.resultCode === 0) {
      dispatch(registrationMeThunk());
    } else if (response.data.resultCode === 10) {
      const response = await authMeAPI.captcha();
      dispatch(setCaptchaUrl(response.data.url));
    }
  };

export const logoutThunk = () => async (dispatch: any) => {
  const response = await authMeAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(registrationMeThunk(null, null, null, false));
  }
};
export default authReducer;
