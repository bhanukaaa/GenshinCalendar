import React from "react";
import classes from "./Portrait.module.css";

function Portrait({ name, classIn }) {
  const materials = [
    "ballad",
    "freedom",
    "resistance",
    "prosperity",
    "diligence",
    "gold",
    "transience",
    "elegance",
    "light",
    "justice",
    "admonition",
    "equity",
    "ingenuity",
    "praxis",
    "order",
  ];

  let iconPath = "";

  if (materials.includes(name)) {
    iconPath = "../GenshinCalendar/materials/" + name + ".png";
  } else {
    iconPath = "../GenshinCalendar/characters/ui-avataricon-" + name + ".png";
  }

  return (
    <div className={classes.shrink}>
      <img
        src={iconPath}
        className={classIn}
        style={{ height: 120, width: 120 }}
        title={name}
      />
    </div>
  );
}

export default Portrait;
