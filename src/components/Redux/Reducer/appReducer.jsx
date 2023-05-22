import { authMeAPI } from "../../../API/authMeApi";
import {registrationMeThunk} from "./authReducer"

let initialState = {
  initialized: false,
 
};

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized:true
      };
    default:
      return state;
  }
};
export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS
});

export const initializedAppThunk = () => {
  return (dispatch) => {
    let promise=dispatch(registrationMeThunk()) 
    Promise.all([promise]).then(()=>{dispatch(initializedSuccess())})
  };
};


export default appReducer;
