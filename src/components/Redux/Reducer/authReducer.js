import { authMeAPI } from "../../../API/authMeApi";

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
        isAuth: true,
      };
    default:
      return state;
  }
};
export const setUserData = (id, email, login) => ({
  type: SET_USER_DATA,
  information: { id, email, login },
});

export const registrationMeThunk = () => {
  return (dispatch) => {
    authMeAPI.registrationMe().then((data) => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        dispatch(setUserData(id, login, email));
      }
    });
  };
};

export default authReducer;
