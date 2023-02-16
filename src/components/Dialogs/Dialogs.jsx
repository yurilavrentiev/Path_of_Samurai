import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import style from "./Dialogs.module.css";
import Massage from "./Massage/Massage";

const Dialogs = ({ 
                dialogs, 
                massages, 
                onChange, 
                sendMassage,
                newDialogText,
              }) => {
  let dialogsElements = dialogs.map((dialog) => (
    <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
  ));
  let massagesElements = massages.map((massage) => (
    <Massage key={massage.id} massage={massage.massage} />
  ));

  const handleOnChange = (event) => {
    const text = event.target.value;
    onChange(text);
  };
  const handleSendMassage = () => {
    sendMassage();
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
          value={newDialogText}
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
