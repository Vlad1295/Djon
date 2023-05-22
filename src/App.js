import HelloContainer from "./components/Header/HelloContainer";
import ContentConteiner from "./components/Content/ContentConteiner";
import UsersContainer from "./components/Users/UsersContainer";
import React from "react";
import LoginContainer from "./components/Login/LoginContainer";
import Nav from "./components/Nav/Nav";
import DialogContainer from "./components/Dialogs/DialogsContainer";
import "./Hello.css";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { initializedAppThunk } from "./components/Redux/Reducer/appReducer.jsx";
import Preloader from "./components/Users/Toggle";
import { compose } from "redux";
import { withRouter } from "./HOC/withRouter";

class App extends React.Component {
  componentDidMount() {
    this.props.initializedAppThunk();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="gr">
        <div className="header">
          <HelloContainer />
        </div>
        <div className="gr_content">
          <Routes>
            <Route
              path="/Dialog/*"
              element={<DialogContainer store={this.props.store} />}
            />
            <Route path="/profile/:userId?" element={<ContentConteiner />} />
            <Route path="/Users" element={<UsersContainer />} />
            <Route path="/login" element={<LoginContainer />} />
          </Routes>
        </div>
        <Nav state={this.props.state} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    initialized: state.appReducer.initialized,
  };
};

export default compose(withRouter,connect(mapStateToProps, {initializedAppThunk}))(App)
