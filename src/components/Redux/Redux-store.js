import { createStore, combineReducers, applyMiddleware} from "redux";
import profilePageReducer from "./Reducer/profilePageReducer.ts";
import messagePageReducer from "./Reducer/messagePageReducer.ts";
import usersPageReducer from "./Reducer/usersPageReducer.ts";
import authReducer from "./Reducer/authReducer.ts";
import appReducer from "./Reducer/appReducer.ts"
import thunk from 'redux-thunk';

let reducers = combineReducers({
  profilePage: profilePageReducer,
  messagePage: messagePageReducer,
  usersPage: usersPageReducer,
  auth: authReducer,
  appReducer:appReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;
