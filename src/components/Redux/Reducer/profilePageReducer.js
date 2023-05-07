import { usersAPI } from "../../../API/getUsers";

let initialState = {
  pos: [
    { id: 1, message: "my First post", like: 52 },
    { id: 2, message: "my second post", like: 34 },
  ],
  newPostText: "hello",
  profile: null,
};

const profilePageReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case "ADD_Post": {
      let newPost = {
        id: 3,
        message: state.newPostText,
        like: 0,
      };
      let stateCopy = { ...state };
      stateCopy.pos = [...state.pos];
      stateCopy.pos.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case "UPDATE_NEW_POST_TEXT": {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    case "SET_USER_PROFILE": {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};



export const updateNewPostActionCreater = (text) => {
  return { type: "UPDATE_NEW_POST_TEXT", newText: text };
};

export const addPostActionCreater = () => {
  return { type: "ADD_Post" };
};

export const setUserProfile = (profile) => {
  return { type: "SET_USER_PROFILE", profile };
};

export const usersProfileThunk=(UserId)=>{
  return(dispatch)=>{
    usersAPI.usersProfile(UserId)
    .then(data=>{
    dispatch(setUserProfile(data))}) 
  } 
} 


export default profilePageReducer;