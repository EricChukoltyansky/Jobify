import React from "react";
import { Outlet, Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout";

function SharedLayout() {
  return (
    <Wrapper>
      <nav>
        <Link to="add-job">Add job</Link>
        <Link to="all-jobs">All job</Link>
      </nav>
      <Outlet />
    </Wrapper>
  );
}

export default SharedLayout;
