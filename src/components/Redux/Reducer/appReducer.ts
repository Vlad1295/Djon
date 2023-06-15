import {registrationMeThunk} from "./authReducer.ts";

type InitialStateType={
  initialized:boolean
} 
const initialState:InitialStateType = {
  initialized: false,
 
};

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

const appReducer = (state = initialState, action:any):InitialStateType => {
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


type InitializedSuccessActionType={
  type: typeof INITIALIZED_SUCCESS
} 
export const initializedSuccess = ():InitializedSuccessActionType => ({
  type: INITIALIZED_SUCCESS
});

export const initializedAppThunk = () => {
  return (dispatch:any) => {
    let promise=dispatch(registrationMeThunk()) 
    Promise.all([promise]).then(()=>{dispatch(initializedSuccess())})
  };
};


export default appReducer;
