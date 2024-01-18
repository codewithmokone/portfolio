import React from "react";
import CardComponent from "../card/CardComponent";

const Projects = () => {
  return (
    <div style={{ width: 960, margin: "auto", height: 700 }}>
      <div
        style={{
          height: 250,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ lineHeight: 4, fontSize: 12 }}>Browse My</p>
        <h1 style={{ lineHeight: 0.5 }}>Projects</h1>
      </div>
      <div
        style={{
          width: 960,
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <CardComponent />
      </div>
    </div>
  );
};

export default Projects;
