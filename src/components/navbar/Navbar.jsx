import React from "react";
import { Link } from "react-router-dom";

const navTitle = ["About", "Experience", "Projects", "Contact"];

const Navbar = () => {
  return (
    <div>
      <header
        style={{
          width: 960,
          height: 60,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "gray",
          margin: "auto",
        }}
      >
        <span style={{ marginLeft: 40 }}>Simon Lephoto</span>
        <nav style={{ display: "flex", flexDirection: "row", marginRight: 40 }}>
          {navTitle.map((link, index) => (
            <a href="#" key={index} style={{ marginRight: 10 }}>
              {link}
            </a>
          ))}
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
