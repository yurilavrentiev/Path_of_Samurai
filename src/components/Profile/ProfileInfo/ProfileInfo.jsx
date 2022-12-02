import React from "react";
import styles from "./ProfileInfo.module.css";

export default function ProfileInfo() {
  return (
    <>
      <div className={styles.imgContainer}>
        <img
          src="https://seemore.org/wp-content/uploads/2018/02/20170621-204231_orig-500x200.jpg"
          alt=""
        ></img>
      </div>
      <div className={styles.desc}>Ava+description</div>
    </>
  );
}
