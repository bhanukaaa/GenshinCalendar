import React from "react";
import Char from "./Char";
import classes from "./CharSelect.module.css";

function CharSelect({ charList, onClose, onCharSelect, onConfirm }) {
  // const [charList, setCharList] = useState(Characters);

  // function charSelectHandler(charID) {
  //   if (!charList[charID].selected) {
  //     setCharList((prevCharList) => ({
  //       ...prevCharList,
  //       [charID]: { ...prevCharList[charID], selected: true },
  //     }));
  //   } else {
  //     setCharList((prevCharList) => ({
  //       ...prevCharList,
  //       [charID]: { ...prevCharList[charID], selected: false },
  //     }));
  //   }
  // }

  function submitHandler(event) {
    event.preventDefault();
    onConfirm();
    onClose();
  }

  return (
    <div>
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
