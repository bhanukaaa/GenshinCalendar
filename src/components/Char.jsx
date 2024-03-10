import React from "react";
import classes from "./Char.module.css";

function Char({ id, name, displayName, selected, onCharClick, element }) {
  const iconPath = "../ui-avataricon-" + name + ".png";

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
    <div onClick={clickHandler}>
      <img src={iconPath} className={className} />
      <p className={selected ? classes.active : classes.inactive}>
        {displayName}
      </p>
    </div>
  );
}

export default Char;
