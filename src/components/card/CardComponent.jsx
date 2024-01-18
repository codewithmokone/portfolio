import React, { useEffect, useState } from "react";
import hotelbooking from "../../images/hotelbooking.PNG";
import todolist from '../../images/todolist.PNG'
import weatherapp from '../../images/weatherapp.PNG'
import "../card/card.css";

const cardInfo = [
  {
    projectName: "Hotel Booking",
    image: { hotelbooking },
    github: "https://github.com/codewithmokone/react-js-hotel-booking-app.git",
    liveDemo: "https://hotel-booking-app-9ad18.web.app/",
  },
  {
    projectName: "To Do List",
    image: { todolist },
    github: "https://github.com/codewithmokone/react-todo-list-app.git",
    liveDemo: "https://graceful-starburst-86e805.netlify.app/",
  },
  {
    projectName: "Weather App",
    image: { weatherapp },
    github: "https://github.com/codewithmokone/weather-app.git",
    liveDemo: "https://monumental-taiyaki-5c34fe.netlify.app/",
  },

];

const CardComponent = () => {
  const [data, setData] = useState();

  return (
    <>
      {cardInfo.map((item, index) => (
        <div
          key={index}
          style={{
            width: 270,
            height: 340,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: 1,
            borderStyle: "solid",
            borderRadius: 20,
          }}
          className="card-container"
        >
          <div
            style={{
              width: 240,
              height: 200,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{
                width: 220,
                height: 200,
                borderRadius: 20,
              }}
              src={item.image}
              alt="project_image"
            />
          </div>
          <div style={{ height: 40, marginTop: 10 }}>
            <h3>{item.projectName}</h3>
          </div>
          <div
            style={{
              width: 210,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <button
              style={{ width: 100, height: 40, borderRadius: 20 }}
              onClick={() => window.open(item.github)}
            >
              GitHub
            </button>
            <button
              style={{width: 100,height: 40,borderRadius: 20,}}
              onClick={() => window.open(item.liveDemo)}
            >
              Live Demo
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardComponent;
