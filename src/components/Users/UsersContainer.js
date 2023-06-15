import React from "react";
import { connect } from "react-redux";
import {
  setCurrentPage,
  getUsersThunk,
  unfollowThunk,
  followThunk, 
} from "../Redux/Reducer/usersPageReducer.ts";
import Users from "./Users";
import Preloader from "./Toggle";
import { withAuthNavigate } from "../../HOC/withAuthNavigate";
import { compose } from "redux";
import {getUsersReselect, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress} from "../Redux/Reducer/users-selectors"

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
          unfollowThunk={this.props.unfollowThunk} 
          followThunk={this.props.followThunk} 
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChange={this.onPageChange}
          users={this.props.users}
          
          followingInProgress={this.props.followingInProgress}
          isAuth={this.props.isAuth}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsersReselect(state) ,
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    
  };
};
export default compose(
 connect(mapStateToProps, {
  setCurrentPage,
  getUsersThunk,
  unfollowThunk, 
  followThunk, 
})
 ,withAuthNavigate)(UsersContainer)

