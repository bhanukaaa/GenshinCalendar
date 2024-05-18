import React from "react";
import classes from "./Char.module.css";
import Portrait from "./Portrait";

function Char({ id, name, displayName, selected, onCharClick, element }) {
  let className;
  switch (element) {
    case "pyro":
      className = classes.pyro;
      break;
    case "hydro":
      className = classes.hydro;
      break;
    case "anemo":
      className = classes.anemo;
      break;
    case "geo":
      className = classes.geo;
      break;
    case "cryo":
      className = classes.cryo;
      break;
    case "dendro":
      className = classes.dendro;
      break;
    case "electro":
      className = classes.electro;
      break;
  }

  function clickHandler() {
    onCharClick(id);
  }

  return (
    <div onClick={clickHandler} className={classes.selection}>
      <Portrait name={name} classIn={className} selected={selected} />
      <p
        className={selected ? classes.active : classes.inactive}
        style={{
          maxWidth: "150px",
          overflowWrap: "break-word",
          marginTop: "0",
          marginBottom: "auto",
        }}
      >
        {displayName}
      </p>
    </div>
  );
}

export default Char;
