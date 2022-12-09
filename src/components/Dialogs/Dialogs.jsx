import React from "react";
import {
  sendMassageActionCreator,
  updateMassageActionCreator,
} from "../../Redux/dialogsReducer";
import DialogItem from "./DialogItem/DialogItem";
import style from "./Dialogs.module.css";
import Massage from "./Massage/Massage";

const Dialogs = ({ state, dispatch }) => {
  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
  ));
  let massagesElements = state.massages.map((massage) => (
    <Massage key={massage.id} massage={massage.massage} />
  ));

  const handleOnChange = (event) => {
    const text = event.target.value;
    dispatch(updateMassageActionCreator(text));
  };
  const handleSendMassage = () => {
    dispatch(sendMassageActionCreator());
  };
  return (
    <>
      <div className={style.dialogs}>
        <div className={style.users}>{dialogsElements}</div>
        <div className={style.massages}>{massagesElements}</div>
      </div>
      <div className={style.input}>
        <textarea
          onChange={handleOnChange}
          value={state.newDialogText}
          placeholder="Enter your massage..."
          rows="2"
        />
      </div>
      <div>
        <button className={style.btn} onClick={handleSendMassage}>
          Send
        </button>
      </div>
    </>
  );
};

export default Dialogs;
