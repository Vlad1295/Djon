import { usersAPI } from "../../../API/getUsers";
import  PhotosType  from "../Types/Types";

type UsersType = {
  id: number;
  name: string;
  status: string;
  photos: PhotosType;
  followed: boolean;
};
type FollowingInProgressType = {
  userId: number;
};
type InitialStateType = typeof initialState;

let initialState = {
  users: [] as Array<UsersType>,
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<FollowingInProgressType>,
};
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let usersPageReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_TOTAL_COUNT:
      return { ...state, totalUsersCount: action.count };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };
    default:
      return state;
  }
};
type FollowType = {
  type: typeof FOLLOW;
  userId: number;
};
export const follow = (userId: number): FollowType => ({
  type: FOLLOW,
  userId,
});
type UnfollowType = {
  type: typeof UNFOLLOW;
  userId: number;
};
export const unfollow = (userId: number): UnfollowType => ({
  type: UNFOLLOW,
  userId,
});
type SetUsersType = {
  type: typeof SET_USERS;
  users: Array<UsersType>;
};
export const setUsers = (users: Array<UsersType>): SetUsersType => ({
  type: SET_USERS,
  users,
});
type SetTotalCountType = {
  type: typeof SET_TOTAL_COUNT;
  count: number;
};
export const setTotalCount = (count: number): SetTotalCountType => ({
  type: SET_TOTAL_COUNT,
  count,
});
type SetCurrentPageType = {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
};
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
type ToggleIsFetchingType = {
  type: typeof TOGGLE_IS_FETCHING;
  isFetching: boolean;
};
export const toggleIsFetching = (
  isFetching: boolean
): ToggleIsFetchingType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
type ToggleIsFollowingProgressType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS;
  isFetching: boolean;
  userId: number;
};
export const toggleIsFollowingProgress = (
  isFetching: boolean,
  userId: number
): ToggleIsFollowingProgressType => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export const getUsersThunk = (currentPage, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(currentPage));

  const data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers([...data.items]));
  dispatch(setTotalCount(data.totalCount));
};

const followUnfollow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleIsFollowingProgress(true, userId));
  let data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleIsFollowingProgress(false, userId));
};

export const unfollowThunk = (userId) => {
  return async (dispatch) => {
    followUnfollow(
      dispatch,
      userId,
      usersAPI.unfollowUser.bind(usersAPI),
      unfollow
    );
  };
};
export const followThunk = (userId) => {
  return async (dispatch) => {
    followUnfollow(
      dispatch,
      userId,
      usersAPI.followUser.bind(usersAPI),
      follow
    );
  };
};

export default usersPageReducer;
