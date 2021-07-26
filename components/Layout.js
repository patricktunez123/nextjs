import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={Styles.container}>
        <div className={Styles.main}>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
