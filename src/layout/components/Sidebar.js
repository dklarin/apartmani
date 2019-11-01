import * as React from "react";
import { NavLink } from "react-router-dom";
import styles from "../style/layout.module.css";
const MenuItem = props => {
  const { title, routePath } = props;
  return (
    <NavLink
      className={styles.menuitem}
      activeClassName={styles.active}
      to={routePath}
      target="_blank"
    >
      {title}
    </NavLink>
  );
};
export const Sidebar = props => {
  return (
    <div className={styles.sidebar}>
      <MenuItem title="Apartmani" routePath="/apartmani" />
    </div>
  );
};
