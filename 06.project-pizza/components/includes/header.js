import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="top_nav">
          <Link href="/"><a className="logo"><img src="/static/images/pizzaria_logo.png" alt="logo" /></a></Link>
        </div>
        <div className="nav_section">
          <nav>
            <ul className="navbar-nav">
              <li>
                <Link href="/">
                  <a>
                    <i className="fas fa-pizza-slice"></i>
                    <span>Our pizza</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>
                    <i className="fas fa-store"></i>
                    <span>About us</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>
                    <i className="fas fa-map"></i>
                    <span>Contact</span>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
