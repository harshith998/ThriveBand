import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarBrand = () => {
  return (
    <div className="nav-bar__brand">
      <NavLink to="/">
        <img
          className="nav-bar__logo"
          src="thrivelogo.pngsrc/components/thrivelogo.png"
          alt="Thrive Band shield logo"
          width="122"
          height="36"
        />
      </NavLink>
    </div>
  );
};
