import React from "react";
import classes from "./WeeklyDist.module.css";
import Portrait from "./Portrait";

function WeeklyDist(data) {
  let days = [
    "None",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let weekElements = [];
  const currDay = new Date().getDay();

  for (let i = 1; i < 7; i++) {
    weekElements.push(
      <div className={classes.week} key={i}>
        <h2
          className={classes.heading}
          style={{
            color: i === currDay ? "rgb(245, 120, 120)" : "rgb(220, 220, 220)",
            // textTransform: i === currDay ? "uppercase" : "capitalize",
          }}
        >
          {days[i]}
        </h2>
        <div className={classes.portraitContainer}>
          {data["data"][i].length > 0 ? (
            data["data"][i].map((char) => (
              <Portrait name={char} key={char} classIn={classes.image} />
            ))
          ) : (
            <h3 className={classes.heading}>
              No Selected Characters are Farmable on This Day
            </h3>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={classes.group}>
      {weekElements}

      <div className={classes.week}>
        <h2 className={classes.heading}>Sunday</h2>
        <div className={classes.portraitContainer}>
          <h3 className={classes.heading}>
            All Characters are Farmable on This Day
          </h3>
        </div>
      </div>
    </div>
  );
}

export default WeeklyDist;
