import React from "react";
import { Link } from "react-scroll";
import Logo from "../logo";
import "./index.scss";

const Header = () => {
  const duration = 500;

  return (
    <header className="header">
      <Logo />
      <div className="header__links">
        <Link
          className="header__link"
          activeClass="active"
          to="section-1"
          spy
          smooth
          duration={duration}
          offset={-210}
        >
          about
        </Link>
        <Link
          className="header__link"
          activeClass="active"
          to="section-2"
          spy
          smooth
          duration={duration}
          offset={-210}
        >
          works
        </Link>
        <Link
          className="header__link"
          activeClass="active"
          to="section-3"
          spy
          smooth
          duration={duration}
          offset={-210}
        >
          contact
        </Link>
        <div className="header__link">
          <a href="https://github.com/kaitlynmcl" target="_blank">
            github
          </a>
        </div>
        <div className="header__link">
          <a
            href="https://www.linkedin.com/in/kaitlyn-mclaughlin/"
            target="_blank"
          >
            linkedin
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
