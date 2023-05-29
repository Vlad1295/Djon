import React from "react";
import Content from "./Content";
import { connect } from "react-redux";
import {
  setUserProfile,
  usersProfileThunk,
  getUserStatusThunk,
  updateUserStatusThunk,
} from "../Redux/Reducer/profilePageReducer";
import { withAuthNavigate } from "../../HOC/withAuthNavigate";
import { compose } from "redux";
import { withRouter } from "../../HOC/withRouter";
class ContentConteiner extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) userId = this.props.autorizedUserId;
    if (!userId) {
      this.props.history.push("/login");
    }
    this.props.usersProfileThunk(userId)
    this.props.getUserStatusThunk(userId)
  }
  render() {
    return (
      <div>
        <Content{...this.props} 
          updateUserStatusThunk={this.props.updateUserStatusThunk}
          status={this.props.status}
          profile={this.props.profile}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  autorizedUserId: state.auth.id,
  isAyth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    usersProfileThunk,
    getUserStatusThunk,
    updateUserStatusThunk,
  }),
  withAuthNavigate
)(withRouter(ContentConteiner));
