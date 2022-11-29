import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css';

const setActive = ({ isActive }) => isActive ? style.active : undefined;

const User = (props) => {
  return (
    <div className={style.user}>
      <NavLink to={props.id} className={setActive}>{props.name}</NavLink>
    </div>
  )
}

const Massage = (props) => {
  return (
    <div className={style.massage}>{props.massage}</div>
  )
}

const Dialogs = () => {
  return (
    <div className={style.dialogs}>
      <div className={style.users}>
        <User name='Anna' id='1' />
        <User name='Andrey' id='2' />
        <User name='Dmitry' id='3' />
        <User name='Yuri' id='4' />
        <User name='Lera' id='5' />
      </div>
      <div className={style.massages}>
        <Massage massage='How are you?' />
        <Massage massage='Where is my spoon?' />
        <Massage massage='Take your time' />
        <Massage massage="Say it! Don't spray it!!!" />
      </div>
    </div>
  )
}

export default Dialogs;
