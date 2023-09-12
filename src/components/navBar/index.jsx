import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./style.scss";

const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "SKILLS",
    to: "/skills",
  },
  {
    label: "EXPERIENCE",
    to: "/experience",
  },
  {
    label: "PROJECTS",
    to: "/projects",
  },
  {
    label: "CONTACT",
    to: "/contact",
  },
];

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="navbar__container">
          <Link exact to="/" className="navbar__container__logo">
            <FaReact size={30} />
          </Link>
          <ul className={click ? "navbar__container__menu active" : "navbar__container__menu"}>
            {data.map((item) => (
              <li className="navbar__container__menu__item">
                <Link
                  exact
                  to={item.to}
                  activeClassName="active"
                  className="navbar__container__menu__item__links"
                  onClick={click ? handleClick : null}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? <HiX size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;