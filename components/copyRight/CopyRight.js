import React from "react";
import styles from "./copyRight.module.css";

const CopyRightBar = () => {
  return (
    <div className={styles.container}>
        <p>© All rights reserved</p>
        <p>Made with love, dedication and creativity by Stephen Cabunilas</p>
    </div>
  );
};

export default CopyRightBar;
