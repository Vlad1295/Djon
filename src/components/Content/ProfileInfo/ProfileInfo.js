import react, { useState, useEffect } from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../Users/Toggle";
import ava from "../../../Imgs/i.jpeg";
import ProfileData from "./ProfileData";
import Status from "./Status";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
  let [editMode, goToEditMode] = useState(true);

  if (!props.profile) {
    return <Preloader />;
  }
  const toSendPhoto = (e) => {
    if (e.target.files[0]) {
      props.savePhotoThunk(e.target.files[0]);
    }
  };
  const Submit = (values) => {
   props.updateProfile(
      values.fullName,
      values.lookingForAJobDescription,
      values.lookingForAJob,
      values.aboutMe, 
      values.contacts,
    )
    goToEditMode(true);
  };

  return (
    <div>
      <div className={s.ispan}>
        <img src="../../../ispa.jpg" />
      </div>
      <div>
        <img className={s.dim} src={props.profile.photos.large || ava} />
      </div>
      {props.isOwner && <input type={"file"} onChange={toSendPhoto} />}
      {editMode ? (
        <ProfileData
        errors={props.errors} 
        isOwner={props.isOwner} 
          profile={props.profile}
          goToEditMode={goToEditMode}
          updateUserStatusThunk={props.updateUserStatusThunk}
          status={props.status}
        />
      ) : (
        <ProfileDataForm profile={props.profile}
        Submit={Submit} updateProfile={props.updateProfile} />
      )}
      <div>
        <b>Status:</b>
        <Status
          updateUserStatusThunk={props.updateUserStatusThunk}
          status={props.status}
        />
      </div>
    </div>
  );
};
export default ProfileInfo;
