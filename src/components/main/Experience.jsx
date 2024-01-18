import React from "react";

const Experience = () => {
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
        <p style={{ lineHeight: 4, fontSize: 12}}>Explore My</p>
        <h1 style={{ lineHeight: 0.5 }}>Experience</h1>
      </div>
      <div
        style={{
          width: 960,
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: 400,
            height: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: 1,
            borderStyle: "solid",
            borderColor: "black",
            borderRadius: 30,
          }}
        >
          <div style={{ alignItems: "center" }}>
            <h3 style={{ color: "gray", lineHeight: 0.5 }}>
              Frontend Development
            </h3>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <p>HTML</p>
              </li>
              <li>
                <p>CSS</p>
              </li>
              <li>
                <p>JavaScript</p>
              </li>
              <li>
                <p>Material UI</p>
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            width: 400,
            height: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: 1,
            borderStyle: "solid",
            borderColor: "black",
            borderRadius: 30,
          }}
        >
          <div style={{ alignItems: "center" }}>
            <h3 style={{ color: "gray", lineHeight: 0.5 }}>
              Backend Development
            </h3>
            <ul style={{ listStyleType: "none", height: 130 }}>
              <li>
                <p>Node JS</p>
              </li>
              <li>
                <p>Express JS</p>
              </li>
              <li>
                <p>Git</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
