import React from "react";
import { NavLink } from "react-router-dom";
import { withAuthNavigate } from "../../HOC/withAuthNavigate";
import {
  sendMessage,
  newMessageBody,
} from "../Redux/Reducer/messagePageReducer";
import Dialog from "./Dialogs";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  return {
    messagePage: state.messagePage,
    newMessageBody: state.messagePage.newMessageBody,
  };
};

let ConnectAuthNavigate = withAuthNavigate(Dialog);

const DialogContainer = connect(mapStateToProps, {
  newMessageBody,
  sendMessage,
})(ConnectAuthNavigate);

export default DialogContainer;
