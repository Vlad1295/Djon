import React from "react";
import MyPostsContainer from "./Post/PostContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Content = (props) => {
 
  return (
    <div>
      <ProfileInfo 
      errors={props.errors} 
      updateProfile={props.updateProfile} 
      isOwner={props.isOwner} savePhotoThunk={props.savePhotoThunk} 
      updateUserStatusThunk={props.updateUserStatusThunk} status={props.status} profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
};

export default Content;
