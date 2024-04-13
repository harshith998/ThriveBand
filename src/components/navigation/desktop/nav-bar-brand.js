import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarBrand = () => {
  return (
    <div className="nav-bar__brand">
      <NavLink to="/">
        <img
          className="nav-bar__logo"
          src="https://i.pinimg.com/originals/a9/0e/c5/a90ec5e3493a27f243d10fab79d00f28.png"
          alt="Thrive Band shield logo"
          width="90"
          height="43"
        />
      </NavLink>
    </div>
  );
};
