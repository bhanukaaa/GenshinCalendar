import React from "react";
import Char from "./Char";
import classes from "./CharSelect.module.css";

function CharSelect({
  charList,
  onClose,
  onCharSelect,
  onConfirm,
  onSort,
  currSortType,
}) {
  function submitHandler(event) {
    event.preventDefault();
    onConfirm();
    onClose();
  }

  function sortHandler(event) {
    event.preventDefault();
    onSort();
  }

  return (
    <div className={classes.selectModal}>
      <div className={classes.buttonContainer}>
        <button onClick={submitHandler} className={classes.confirm}>
          Confirm
        </button>
        <button onClick={sortHandler} className={classes.confirm}>
          Sort ({currSortType})
        </button>
      </div>
      <ul className={classes.charsUL} style={{ padding: "10px" }}>
        {Object.keys(charList).map((charID) => (
          <li key={charID}>
            <Char
              id={charID}
              name={charList[charID].name}
              displayName={charList[charID].displayName}
              element={charList[charID].element}
              selected={charList[charID].selected}
              onCharClick={onCharSelect}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharSelect;
