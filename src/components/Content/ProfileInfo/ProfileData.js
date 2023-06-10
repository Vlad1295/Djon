import react from "react";
import Contact from "./Contact";

const ProfileData = (props) => {
  return (
    <div>
    <div>{props.errors}</div>
      <div><b>Full name</b>{props.profile.fullName}</div>
      <div><b>About me:</b>{props.profile.aboutMe} </div>
      <div><b>My skils:</b>{props.profile.lookingForAJobDescription} </div>
      <div>
        <b>lookingForAJob:</b>
        {props.profile.lookingForAJob}
      </div>
      <div>
        <div>
          <b>Contacts:</b>
        </div>
        {Object.keys(props.profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contact={key}
              contactValue={props.profile.contacts[key]}
            />
          );
        })}
      </div>
    {props.isOwner&& <div>
        <button
          onClick={() => {
            props.goToEditMode(false);
          }}
        >
          Edit
        </button>
      </div>} 
    </div>
  );
};
export default ProfileData;
