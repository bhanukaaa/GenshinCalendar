import React from "react";
import classes from "./WeeklyDist.module.css";
import Portrait from "./Portrait";

function WeeklyDist(data) {
  return (
    <div>
      <div style={{ border: "1px solid", padding: "10px" }}>
        <h2>Monday</h2>
        {data["data"][1].length > 0 ? (
          data["data"][1].map((char) => <Portrait name={char} />)
        ) : (
          <h3>No Selected Characters are Farmable on This Day</h3>
        )}
      </div>
      <div style={{ border: "1px solid", padding: "10px" }}>
        <h2>Tuesday</h2>
        {data["data"][2].length > 0 ? (
          data["data"][2].map((char) => <Portrait name={char} />)
        ) : (
          <h3>No Selected Characters are Farmable on This Day</h3>
        )}
      </div>
      <div style={{ border: "1px solid", padding: "10px" }}>
        <h2>Wednesday</h2>
        {data["data"][3].length > 0 ? (
          data["data"][3].map((char) => <Portrait name={char} />)
        ) : (
          <h3>No Selected Characters are Farmable on This Day</h3>
        )}
      </div>
      <div style={{ border: "1px solid", padding: "10px" }}>
        <h2>Thursday</h2>
        {data["data"][4].length > 0 ? (
          data["data"][4].map((char) => <Portrait name={char} />)
        ) : (
          <h3>No Selected Characters are Farmable on This Day</h3>
        )}
      </div>
      <div style={{ border: "1px solid", padding: "10px" }}>
        <h2>Friday</h2>
        {data["data"][5].length > 0 ? (
          data["data"][5].map((char) => <Portrait name={char} />)
        ) : (
          <h3>No Selected Characters are Farmable on This Day</h3>
        )}
      </div>
      <div style={{ border: "1px solid", padding: "10px" }}>
        <h2>Saturday</h2>
        {data["data"][6].length > 0 ? (
          data["data"][6].map((char) => <Portrait name={char} />)
        ) : (
          <h3>No Selected Characters are Farmable on This Day</h3>
        )}
      </div>
      <div style={{ border: "1px solid", padding: "10px" }}>
        <h2>Sunday</h2>
        <h3>All Characters are Farmable on This Day</h3>
      </div>
    </div>
  );
}

export default WeeklyDist;
