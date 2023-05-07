import { NavLink } from "react-router-dom";
import React from "react";
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
    isAuth: state.auth.isAuth
  };
};



const DialogContainer = connect(mapStateToProps,{newMessageBody,sendMessage})(Dialog);

export default DialogContainer;
