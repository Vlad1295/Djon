import react from "react";
import { useState } from "react";

const Status = (props) => {
  let [editMode, setEditMode] = useState(false);
  const activeEditMode = () => {
    setEditMode(true)
    props.updateUserStatusThunk(status) 
  };
  const deactiveEditMode = () => {
    setEditMode(false);
  };
  let [status, setStatus] = useState(props.status)
const onChangeStatus=(e)=>{
  setStatus(e.currentTarget.value)
} 

  return (
    <div>
      {editMode ? (
        <div>
          <span onClick={deactiveEditMode}>
            {" "}
            {props.status || "Статуса нет"}{" "}
          </span>
        </div>
      ) : (
        <div>
          <input 
          onChange={onChangeStatus}
          value={status} 
          onBlur={activeEditMode} />
        </div>
      )}
    </div>
  );
};

export default Status;
