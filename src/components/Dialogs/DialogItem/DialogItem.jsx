import { NavLink } from "react-router-dom";
import style from './DialogItem.module.css'

const DialogItem = (props) => {

  const setActive = ({ isActive }) => (isActive ? style.active : undefined);

  return (
    <div className={style.user}>
      <NavLink to={props.id} className={setActive}>
        {props.name}
      </NavLink>
    </div>
  );
}


export default DialogItem;