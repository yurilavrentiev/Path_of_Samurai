import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import style from "./Dialogs.module.css";
import Massage from "./Massage/Massage";


const Dialogs = ({ state }) => {
  
  let dialogsElements = state.dialogs.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />);
  let massagesElements = state.massages.map(massage => <Massage key={massage.id} massage={massage.massage} />);
  
  return (
    <div className={style.dialogs}>
      <div className={style.users}>
        {dialogsElements}
      </div>
      <div className={style.massages}>
        {massagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
