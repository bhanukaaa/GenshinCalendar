import React from "react";
import Char from "./Char";
import classes from "./CharSelect.module.css";

function CharSelect({ charList, onClose, onCharSelect, onConfirm }) {
  function submitHandler(event) {
    event.preventDefault();
    onConfirm();
    onClose();
  }

  return (
    <div className={classes.selectModal}>
      <button onClick={submitHandler} className={classes.confirm}>
        Confirm
      </button>
      <ul>
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
