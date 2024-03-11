import React from "react";

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

  let iconPath = ""

  if (materials.includes(name)) {
    iconPath = "../GenshinCalendar/materials/" + name + ".png";
  } else {
    iconPath = "../GenshinCalendar/characters/ui-avataricon-" + name + ".png";
  }

  return (
    <img
      src={iconPath}
      className={classIn}
      style={{ height: 120, width: 120 }}
    />
  );
}

export default Portrait;
