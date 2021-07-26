import React from "react";
import Nav from "./Nav";
import Meta from "./Meta";
import Styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={Styles.container}>
        <div className={Styles.main}>{children}</div>
      </div>
    </>
  );
};

export default Layout;
