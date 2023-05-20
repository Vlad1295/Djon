import HelloContainer from "./components/Header/HelloContainer";
import ContentConteiner from "./components/Content/ContentConteiner";
import UsersContainer from "./components/Users/UsersContainer";
import LoginContainer from "./components/Login/LoginContainer"
import Nav from "./components/Nav/Nav";
import DialogContainer from "./components/Dialogs/DialogsContainer";
import "./Hello.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className="gr">
       <div className="header">
        <HelloContainer />
        </div>
        <div className="gr_content">
          <Routes>
            <Route
              path="/Dialog/*"
              element={<DialogContainer store={props.store} />}
            />
            <Route path="/profile/:userId?" element={<ContentConteiner />} />
            <Route path="/Users" element={<UsersContainer />} />
            <Route path="/login" element={<LoginContainer/>} />
          </Routes>
        </div>
        <Nav state={props.state} />
      </div>
    </BrowserRouter>
  );
} 

export default App;
