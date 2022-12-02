import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Dialogs.module.css";

const setActive = ({ isActive }) => (isActive ? style.active : undefined);

const Dialog = (props) => {
  return (
    <div className={style.user}>
      <NavLink to={props.id} className={setActive}>
        {props.name}
      </NavLink>
    </div>
  );
};

const Massage = (props) => {
  return <div className={style.massage}>{props.massage}</div>;
};

const Dialogs = () => {

  let dialogsData = [
    {id: "1", name: "Anna"},
    {id: "2", name: "Andrey"},
    {id: "3", name: "Dmitry"},
    {id: "4", name: "Yuri"},
    {id: "5", name: "Lera"},
  ];

  let massagesData = [
    {id: "1", massage: "How are you?"},
    {id: "2", massage: "Where is my spoon?"},
    {id: "3", massage: "Take your time"},
    {id: "4", massage: "Say it! Don't spray it!!!"},
  ];

  let dialogsArray = dialogsData.map(dialog => <Dialog key={dialog.id} id={dialog.id} name={dialog.name} />);
  let massagesArray = massagesData.map(massage => <Massage key={massage.id} massage={massage.massage} />);
  
  return (
    <div className={style.dialogs}>
      <div className={style.users}>
        {dialogsArray}
      </div>
      <div className={style.massages}>
        {massagesArray}
      </div>
    </div>
  );
};

export default Dialogs;
