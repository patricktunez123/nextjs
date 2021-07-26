import React from "react";
import Link from "next/link";
import Styles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <div className={Styles.app__nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
