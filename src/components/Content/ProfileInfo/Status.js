import react from "react";
import { useState, useEffect } from "react";

const Status = (props) => {
  let [editMode, setEditMode] = useState(false);
  const activeEditMode = () => {
    setEditMode(false);
    props.updateUserStatusThunk(status);
  };
  const deactiveEditMode = () => {
    setEditMode(true);
  };
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const onChangeStatus = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {editMode ? (
        <div>
          <input
            onChange={onChangeStatus}
            value={status}
            onBlur={activeEditMode}
          />
        </div>
      ) : (
        <div>
          <span> {props.status || "Статуса нет"} </span>
          <button onClick={deactiveEditMode}>send</button>
        </div>
      )}
    </div>
  );
};

export default Status;
