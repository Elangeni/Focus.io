import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Focus.io</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/wiki" activeStyle>
            Wiki
          </NavLink>
          <NavLink to="/reports" activeStyle>
            Reports
          </NavLink>
          <NavBtn>
            <NavBtnLink to="signin">LogOut</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
