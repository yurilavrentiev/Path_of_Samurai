import React from "react";
import {
  sendMassageActionCreator,
  updateMassageActionCreator,
} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";



const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    massages: state.dialogsPage.massages,
    newDialogText: state.dialogsPage.newDialogText
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (text) => {
      dispatch(updateMassageActionCreator(text));
    },
    sendMassage: () => {
      dispatch(sendMassageActionCreator());
    }
  };
};

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

export default DialogsContainer;
