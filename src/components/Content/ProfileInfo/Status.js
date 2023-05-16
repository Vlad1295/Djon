import React from "react";

class Status extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };
  changeEditMode = () => {
    this.setState({
      editMode: false,
    });
  };
  unchangeEditMode = () => {
    this.setState({
      editMode: true,
    });
    this.props.updateUserStatusThunk(this.state.status);
  };
  onChangeStatus = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };
  

  render() {
    return (
      <div>
        {this.state.editMode ? (
          <div>
            <span onClick={this.changeEditMode}>{this.props.status}</span>
          </div>
        ) : (
          <div>
            <input
              onChange={this.onChangeStatus}
              onBlur={this.unchangeEditMode}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}
export default Status;
