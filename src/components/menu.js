import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/about">
       About
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
      <a className="menu-item" target="_blank" href=" https://app.goclio.com/session/new">
        Clio Login
      </a>
    </Menu>
  );
};


