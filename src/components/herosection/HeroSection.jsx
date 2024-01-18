import React from "react";

const HeroSection = () => {
  return (
    <div
      style={{
        width: 960,
        height: 400,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "auto",
        borderWidth:1
      }}
    >
      <div style={{ marginLeft: 200}}>
        <img
          src=""
          alt=""
          style={{ width: 250, height: 220}}
        />
      </div>
      <div style={{ marginRight: 200, border: 1, height: 200 }}>
        <div>
          <p style={{ fontSize: 17, fontWeight: 500, color: "gray" }}>
            Hello, I'm
          </p>
          <h2 style={{fontWeight: 600 }}>Simon Lephoto</h2>
          <p style={{ fontSize: 20, fontWeight: 600, color: "gray" }}>
            Frontend Development
          </p>
        </div>
        <div>
          <button>DOWNLOAD CV</button>
          <button>CONTACT INFO</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
