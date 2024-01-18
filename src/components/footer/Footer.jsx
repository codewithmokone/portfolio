import React from "react";

const navTitles = ["About", "Experience", "Projects", "Contact"];

const Footer = () => {
  return (
    <footer
      style={{
        width: 960,
        height: 120,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        backgroundColor: "gray",
      }}
    >
      <nav
        style={{
            width:380,
          display: "flex",
          height:90,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {navTitles.map((link, index) => (
          <a href="#" key={index}>
            {link}
          </a>
        ))}
      </nav>
      <p style={{fontSize:14}}>Copyright 2024, Simon Lephoto. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
