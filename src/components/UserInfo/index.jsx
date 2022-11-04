import React from "react";
import styles from "./UserInfo.module.scss";

import logo from "./noavatar.png";
export const UserInfo = ({ avatarUrl, fullName, additionalText }) => {
  return (
    <div className={styles.root}>
      <img className={styles.avatar} src={logo} alt={fullName} />
      <div className={styles.userDetails}>
        <span className={styles.userName}>{fullName}</span>
        <span className={styles.additional}>{additionalText}</span>
      </div>
    </div>
  );
};
