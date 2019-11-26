import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <h1>My App</h1>
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
    </div>
  );
};

export default Header;
