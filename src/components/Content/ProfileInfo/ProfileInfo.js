import react from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../..//Users/Toggle";

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
      <div>ava+description</div>
    </div>
  );
};
export default ProfileInfo;
