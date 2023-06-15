import React from "react";
import Content from "./Content";
import { connect } from "react-redux";
import {
  setUserProfile,
  usersProfileThunk,
  getUserStatusThunk,
  updateUserStatusThunk,
  savePhotoThunk,
  updateProfile,
} from "../Redux/Reducer/profilePageReducer.ts";
import { withAuthNavigate } from "../../HOC/withAuthNavigate";
import { compose } from "redux";
import { withRouter } from "../../HOC/withRouter";
class ContentConteiner extends React.Component {
  refresh() {
    let userId = this.props.router.params.userId;
    if (!userId) userId = this.props.autorizedUserId;
    if (!userId) {
      this.props.history.push("/login");
    }
    this.props.usersProfileThunk(userId);
    this.props.getUserStatusThunk(userId);
  }
  componentDidMount() {
    this.refresh();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.router.params.userId != prevProps.router.params.userId ) {
      this.refresh();
    }
  }
  render() {
    return (
      <div>
        <Content
          {...this.props}
         
          updateProfile={this.props.updateProfile}
          savePhotoThunk={this.props.savePhotoThunk}
          isOwner={!this.props.router.params.userId}
          updateUserStatusThunk={this.props.updateUserStatusThunk}
          status={this.props.status}
          profile={this.props.profile}
          errors={this.props.errors} 
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
  errors: state.profilePage.errors,
});

export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    usersProfileThunk,
    getUserStatusThunk,
    updateUserStatusThunk,
    savePhotoThunk,
    updateProfile,
  }),
  withAuthNavigate
)(withRouter(ContentConteiner));
