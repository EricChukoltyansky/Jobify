import React from "react";
import { useAppContext } from "../context/appContext";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Wrapper from "../assets/wrappers/BigSidebar";

function BigSideBar() {
  const { showSideBar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSideBar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
}

export default BigSideBar;
