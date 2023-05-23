import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleIsFollowingProgress,
  getUsersThunk,
} from "../Redux/Reducer/usersPageReducer";
import Users from "./Users";
import Preloader from "./Toggle";
import { withAuthNavigate } from "../../HOC/withAuthNavigate";
import { compose } from "redux";
import {getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress} from "../Redux/Reducer/users-selectors"

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
  }

  onPageChange = (pageNumber) => {
    this.props.getUsersThunk(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChange={this.onPageChange}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
          followingInProgress={this.props.followingInProgress}
          isAuth={this.props.isAuth}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state) ,
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    
  };
};
export default compose(
 connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  getUsersThunk,
  toggleIsFollowingProgress,
})
 ,withAuthNavigate)(UsersContainer)

