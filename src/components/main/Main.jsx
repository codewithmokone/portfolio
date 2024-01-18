import React from "react";

const Main = () => {
  return (
    <>
      <div style={{ width: 960, margin: "auto" }}>
        <div>
          <p>Get to know more</p>
          <h2>About Me</h2>
        </div>
        <div style={{ width: 960, display: "flex" }}>
          <div style={{ width: 300, border: 1, borderColor: "green" }}>
            <span>Icon</span>
            <p>Experience</p>
            <p>6 months</p>
            <p>Frontend Development</p>
          </div>
          <div style={{ width: 300, border: 1, borderColor: "green" }}>
            <span>Icon</span>
            <p>Education</p>
            <p>NDp Information Technology</p>
            <p>Frontend Development</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
