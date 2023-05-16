import React from "react";
import { NavLink } from "react-router-dom";
import { withAuthNavigate } from "../../HOC/withAuthNavigate";
import {
  sendMessage,
  newMessageBody,
} from "../Redux/Reducer/messagePageReducer";
import Dialog from "./Dialogs";
import { connect } from "react-redux";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    messagePage: state.messagePage,
  };
};


const DialogContainer = compose (
 connect(mapStateToProps, {
  sendMessage,
})
 , withAuthNavigate)(Dialog)



export default DialogContainer;
