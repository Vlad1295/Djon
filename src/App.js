import  LazyLoading  from "./HOC/LazyLoading";
import HelloContainer from "./components/Header/HelloContainer";
import ContentConteiner from "./components/Content/ContentConteiner";
import UsersContainer from "./components/Users/UsersContainer";
import React, { Suspense } from "react";
import LoginContainer from "./components/Login/LoginContainer";
import Nav from "./components/Nav/Nav";

import "./Hello.css";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { initializedAppThunk } from "./components/Redux/Reducer/appReducer.ts";
import Preloader from "./components/Users/Toggle";
import { compose } from "redux";
import { withRouter } from "./HOC/withRouter";
//Lazy loading
const DialogContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);

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
              element={
                <LazyLoading/>
              }
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

export default compose(
  withRouter,
  connect(mapStateToProps, { initializedAppThunk })
)(App);
