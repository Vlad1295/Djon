import { createStore, combineReducers, applyMiddleware} from "redux";
import profilePageReducer from "./Reducer/profilePageReducer";
import messagePageReducer from "./Reducer/messagePageReducer";
import usersPageReducer from "./Reducer/usersPageReducer";
import authReducer from "./Reducer/authReducer";
import thunk from 'redux-thunk';

let reducers = combineReducers({
  profilePage: profilePageReducer,
  messagePage: messagePageReducer,
  usersPage: usersPageReducer,
  auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;
