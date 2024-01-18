import React from "react";

const AboutMe = () => {
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
        <p style={{ lineHeight: 4, fontSize: 12 }}>Get to know more</p>
        <h1 style={{ lineHeight: 0.3 }}>About Me</h1>
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
            width: 300,
            height: 150,
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
          <div>
            <span style={{ lineHeight: 0.5 }}>Icon</span>
            <h4 style={{ lineHeight: 0.5 }}>Experience</h4>
            <p style={{ color: "gray", lineHeight: 0.5 }}>6 months</p>
            <p style={{ color: "gray", lineHeight: 0.5 }}>
              Frontend Development
            </p>
          </div>
        </div>
        <div
          style={{
            width: 300,
            height: 150,
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
          <div>
            <span style={{ lineHeight: 0.5 }}>Icon</span>
            <h4 style={{ lineHeight: 0.5 }}>Education</h4>
            <p style={{ color: "gray", lineHeight: 0.5 }}>
              NDp Information Technology
            </p>
            <p style={{ color: "gray", lineHeight: 0.5 }}>
              Frontend Development
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          width: 600,
          height: 180,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <p style={{ textAlign: "center" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          consequuntur ad minima ea repellendus! Impedit ullam odit
          voluptatibus, quia vel non placeat excepturi ducimus suscipit tempore
          itaque odio eos autem.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
