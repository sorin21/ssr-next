import React from "react";
import Link from "next/link";

import auth0Serv from '../../lib/auth0';

const Header = () => {
  return (
    <div>
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link href="/"><a className="navbar-brand">NEXT JS</a></Link>
            <div className="collapse navbar-collapse">
              <div className="navbar-nav">
                <Link href="/">
                  <a className="nav-item nav-link">Home</a>
                </Link>{" "}
                <Link href="/about">
                  <a className="nav-item nav-link">About</a>
                </Link>{" "}
                <Link href="/users">
                  <a className="nav-item nav-link">Users</a>
                </Link>{" "}
                <Link href="/contact">
                  <a className="nav-item nav-link">Contact</a>
                </Link>
                <span className="nav-item nav-link" onClick={() => auth0Serv.login()}>Login</span>
                <span className="nav-item nav-link" onClick={() => alert('logout')}>Logout</span>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
