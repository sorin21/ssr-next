import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <h1>React - NextJS</h1>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        -
        <Link href="/about">
          <a>About</a>
        </Link>{" "}
        -
        <Link href="/users">
          <a>Users</a>
        </Link>{" "}
        -
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </nav>
    </>
  );
};

export default Header;
