import style from './Massage.module.css';


const Massage = (props) => {
  return <div className={style.massage}>{props.massage}</div>;
};

export default Massage;