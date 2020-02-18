import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/contact">
        Contact
      </a>

      <a className="menu-item" href="/services">
        Services
      </a>

      <a className="menu-item" href="/location">
        Location
      </a>
      <a className="menu-item" href="/hours">
        Hours
      </a>
      <a className="menu-item" target="_blank" href="https://account.clio.com/login?login_challenge=5c932255d3064837b4946b2a3439d03e">
        Clio Login
      </a>
    </Menu>
  );
};


