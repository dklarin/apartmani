import * as React from "react";
import styles from "../style/layout.module.css";

export const ContentView = props => {
  return <div className={styles.contentview}>{props.router()}</div>;
};
