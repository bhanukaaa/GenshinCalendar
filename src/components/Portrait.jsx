import React from "react";
import classes from "./Portrait.module.css";

function Portrait({ name, classIn, selected }) {
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
        style={{
          height: 120,
          width: 120,
          borderWidth: selected ? "3px" : "1px",
          boxShadow: selected
            ? "0 0 8px 2px rgba(100, 100, 100, 0.3), 0 0 12px 4px rgba(150, 150, 150, 0.2), 0 0 15px 6px rgba(150, 150, 150, 0.1)"
            : "none",
        }}
        title={name}
      />
    </div>
  );
}

export default Portrait;
