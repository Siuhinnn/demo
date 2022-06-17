import { Link } from "react-router-dom";
import { useState } from "react";

import { navbarOptions } from "./config";
import { NavBarStyle, MoblieNavBar } from "./style";

export default function NavBar() {
  const [isMoblieNavOpen, setMoblieNavOpen] = useState(false);
  const [isMoblieDropdown, setMoblieDropdown] = useState(false);

  function moblieNavbarHandler() {
    setMoblieNavOpen(!isMoblieNavOpen);
  }

  function moblieDropdownHandler() {
    setMoblieDropdown(!isMoblieDropdown);
  }

  function renderNavbar() {
    return navbarOptions.map((option, index) => {
      if (option.children)
        return (
          <li key={index} onClick={moblieDropdownHandler}>
            {option.name}
            <ul>
              {option.children.map((cOption, cIndex) => (
                <Link
                  key={cIndex}
                  to={cOption.link}
                  onClick={moblieNavbarHandler}
                >
                  <li>{cOption.name}</li>
                </Link>
              ))}
            </ul>
          </li>
        );
      else
        return (
          <Link key={index} to={option.link} onClick={moblieNavbarHandler}>
            <li>{option.name}</li>
          </Link>
        );
    });
  }

  return (
    <>
      <MoblieNavBar isMoblieNavOpen={isMoblieNavOpen} isMoblieDropdown={isMoblieDropdown}>
        <div onClick={moblieNavbarHandler}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="barWrapper">{renderNavbar()}</div>
      </MoblieNavBar>
      <NavBarStyle>{renderNavbar()}</NavBarStyle>
    </>
  );
}
