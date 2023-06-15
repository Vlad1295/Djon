import { profileAPI } from "../../../API/profileAPI";
import { PhotosType, ProfileType, PosType } from "../Types/Types.ts";

type InitialStateType = typeof initialState;
let initialState = {
  pos: [
    { id: 1, message: "my First post", like: 52 },
    { id: 2, message: "my second post", like: 34 },
  ] as Array<PosType>,
  profile: null as ProfileType | null,
  status: "",
  errors: "",
};

const profilePageReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  let stateCopy;
  switch (action.type) {
    case "ADD_Post": {
      let newPost = {
        id: 3,
        message: action.newPostText,
        like: 0,
      };
      let stateCopy = { ...state };
      stateCopy.pos = [...state.pos];
      stateCopy.pos.push(newPost);
      return stateCopy;
    }
    case "SET_USER_PROFILE": {
      return { ...state, profile: action.profile };
    }
    case "SAVE_PHOTO_SUCCESS": {
      return { ...state, profile: { ...state.profile, photos: action.photo } };
    }
    case "SET_USER_STATUS": {
      return { ...state, status: action.status };
    }
    case "SET_ERRORS": {
      return { ...state, errors: action.errors };
    }
    default:
      return state;
  }
};
type SetErrorsType = {
  type: "SET_ERRORS";
  errors: string;
};
export const setErrors = (errors: string): SetErrorsType => {
  return {
    type: "SET_ERRORS",
    errors,
  };
};
type AddPostActionCreaterType = {
  type: "ADD_Post";
  newPostText: string;
};
export const addPostActionCreater = (
  newPostText: string
): AddPostActionCreaterType => {
  return { type: "ADD_Post", newPostText };
};
type SetUserStatusType = {
  type: "SET_USER_STATUS";
  status: string;
};
export const setUserStatus = (status: string): SetUserStatusType => {
  return { type: "SET_USER_STATUS", status };
};
type SetUserProfileType = {
  type: "SET_USER_PROFILE";
  profile: string;
};
export const setUserProfile = (profile: string): SetUserProfileType => {
  return { type: "SET_USER_PROFILE", profile };
};
type SavePhotoSuccessType = {
  type: "SAVE_PHOTO_SUCCESS";
  photo: PhotosType;
};
export const savePhotoSuccess = (photo: PhotosType): SavePhotoSuccessType => {
  return { type: "SAVE_PHOTO_SUCCESS", photo };
};
export const savePhotoThunk = (photo) => async (dispatch) => {
  const response = await profileAPI.avatarProfile(photo);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const usersProfileThunk = (UserId) => async (dispatch) => {
  const data = await profileAPI.usersProfile(UserId);
  dispatch(setUserProfile(data));
};

export const getUserStatusThunk = (userId) => async (dispatch) => {
  const data = await profileAPI.getUserStatus(userId);
  dispatch(setUserStatus(data));
};
export const updateUserStatusThunk = (status) => async (dispatch) => {
  const data = await profileAPI.updateUserStatus(status);
  if (data.resultCode === 0) {
    dispatch(setUserStatus(status));
  }
};
export const updateProfile =
  (fullName, lookingForAJobDescription, lookingForAJob, aboutMe, contacts) =>
  async (dispatch, getState) => {
    let data = await profileAPI.sendProfile(
      fullName,
      lookingForAJobDescription,
      lookingForAJob,
      aboutMe,
      contacts
    );
    const userId = getState().auth.id;
    dispatch(usersProfileThunk(userId));
    dispatch(setErrors(null));
    if (data.resultCode === 1) {
      dispatch(setErrors(data.messages[0]));
    }
  };

export default profilePageReducer;
