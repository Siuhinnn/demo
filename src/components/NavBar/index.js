import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Button,
  Typography,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import { navbarOptions } from "./config";
import { NavBarStyle, MoblieNavBarStyle } from "./style";

export default function NavBar() {
  const [isMoblieNavOpen, setMoblieNavOpen] = useState(false);
  const [isMoblieDropdown, setMoblieDropdown] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  function moblieNavbarHandler() {
    setMoblieNavOpen(!isMoblieNavOpen);
  }
  function moblieDropdownHandler() {
    setMoblieDropdown(!isMoblieDropdown);
  }

  function modalOpenHandler() {
    setModalOpen(true);
  }
  function modalCloseHandler() {
    setModalOpen(false);
  }

  function renderNavbar(moblieDropdownHandler, moblieNavbarHandler) {
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

  function renderModal() {
    return (
      <>
        <Button onClick={modalOpenHandler}>Contact me</Button>
        <Dialog open={modalOpen} onClose={modalCloseHandler}>
          <DialogTitle>
            <Typography variant="h2">Telephone:</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>63737335</DialogContentText>
          </DialogContent>
          <DialogTitle>
            <Typography variant="h2">Email:</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>hin07012@gmail.com</DialogContentText>
          </DialogContent>
        </Dialog>
      </>
    );
  }

  return (
    <>
      <MoblieNavBarStyle
        isMoblieNavOpen={isMoblieNavOpen}
        isMoblieDropdown={isMoblieDropdown}
      >
        <div onClick={moblieNavbarHandler}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="moblieNavBarWrapper">
          {renderNavbar(moblieDropdownHandler, moblieNavbarHandler)}
        </div>
      </MoblieNavBarStyle>
      <NavBarStyle>
        {renderNavbar()}
        {renderModal()}
      </NavBarStyle>
    </>
  );
}
