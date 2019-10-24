import * as React from "react";
import { Sidebar } from "./components/Sidebar";
import { ContentView } from "./components/ContentView";
import styles from "./style/layout.module.css";

export const Layout = (props: any) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Sidebar />
        <ContentView router={props.router} />
      </div>
    </div>
  );
};
