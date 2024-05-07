import React from "react";
import classes from "./WeeklyDist.module.css";
import Portrait from "./Portrait";

function WeeklyDist(data) {
  return (
    <div className={classes.group}>
      <div className={classes.week}>
        <h2 className={classes.heading}>Monday</h2>
        <div className={classes.portraitContainer}>
          {data["data"][1].length > 0 ? (
            data["data"][1].map((char) => <Portrait name={char} key={char} />)
          ) : (
            <h3 className={classes.heading}>No Selected Characters are Farmable on This Day</h3>
          )}
        </div>
      </div>
      <div className={classes.week}>
        <h2 className={classes.heading}>Tuesday</h2>
        <div className={classes.portraitContainer}>
          {data["data"][2].length > 0 ? (
            data["data"][2].map((char) => <Portrait name={char} key={char} />)
          ) : (
            <h3 className={classes.heading}>No Selected Characters are Farmable on This Day</h3>
          )}
        </div>
      </div>
      <div className={classes.week}>
        <h2 className={classes.heading}>Wednesday</h2>
        <div className={classes.portraitContainer}>
          {data["data"][3].length > 0 ? (
            data["data"][3].map((char) => <Portrait name={char} key={char} />)
          ) : (
            <h3 className={classes.heading}>No Selected Characters are Farmable on This Day</h3>
          )}
        </div>
      </div>
      <div className={classes.week}>
        <h2 className={classes.heading}>Thursday</h2>
        <div className={classes.portraitContainer}>
          {data["data"][4].length > 0 ? (
            data["data"][4].map((char) => <Portrait name={char} key={char} />)
          ) : (
            <h3 className={classes.heading}>No Selected Characters are Farmable on This Day</h3>
          )}
        </div>
      </div>
      <div className={classes.week}>
        <h2 className={classes.heading}>Friday</h2>
        <div className={classes.portraitContainer}>
          {data["data"][5].length > 0 ? (
            data["data"][5].map((char) => <Portrait name={char} key={char} />)
          ) : (
            <h3 className={classes.heading}>No Selected Characters are Farmable on This Day</h3>
          )}
        </div>
      </div>
      <div className={classes.week}>
        <h2 className={classes.heading}>Saturday</h2>
        <div className={classes.portraitContainer}>
          {data["data"][6].length > 0 ? (
            data["data"][6].map((char) => <Portrait name={char} key={char} />)
          ) : (
            <h3 className={classes.heading}>No Selected Characters are Farmable on This Day</h3>
          )}
        </div>
      </div>
      <div className={classes.week}>
        <h2 className={classes.heading}>Sunday</h2>
        <h3 className={classes.heading}>All Characters are Farmable on This Day</h3>
      </div>
    </div>
  );
}

export default WeeklyDist;
