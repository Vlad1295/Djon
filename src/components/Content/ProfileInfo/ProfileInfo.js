import react from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../..//Users/Toggle";
import Status from "./Status"

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={s.ispan}>
        <img src="../../../ispa.jpg" />
      </div>
      <div>
        <img className={s.dim} src={props.profile.photos.large} />
      </div>
      <div>
        <Status updateUserStatusThunk={props.updateUserStatusThunk} status={props.status} />
      </div>
    </div>
  );
};
export default ProfileInfo;
