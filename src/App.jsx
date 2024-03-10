import { useState } from "react";
import "./App.css";
import CharSelect from "./components/CharSelect";
import Modal from "./components/Modal";
import Today from "./components/Today";
import Characters from "./data/Characters";
import Materials from "./data/Materials";

function App() {
  const matList = Materials;

  // Character Selection Status Handling
  const [charList, setCharList] = useState(Characters);

  function charSelectHandler(charID) {
    if (!charList[charID].selected) {
      setCharList((prevCharList) => ({
        ...prevCharList,
        [charID]: { ...prevCharList[charID], selected: true },
      }));
    } else {
      setCharList((prevCharList) => ({
        ...prevCharList,
        [charID]: { ...prevCharList[charID], selected: false },
      }));

    }
  }

  // TODAY Component
  const todayDate = new Date();
  const todayDay = todayDate.getDay();
  const [TodayData, setTodayData] = useState([]);

  function updateToday() {
    console.log("Update Today")
    const filteredTodayData = [...TodayData].filter(
      (character) =>
        charList[character.name] && charList[character.name].selected
    );

    for (let i = 0; i < Object.keys(charList).length; i++) {
      if (charList[i].selected) {
        let currMat = charList[i].material;
        if (matList[currMat].day.includes(todayDay)) {
          filteredTodayData.push({
            name: charList[i].displayName,
            mat: matList[currMat].name,
            domain: matList[currMat].domain,
          });
        }
      }
    }

    setTodayData(filteredTodayData);
  }

  // Toggling Modal
  const [charSelectActive, setCharSelectActive] = useState(false);

  function toggleCharSelect() {
    if (charSelectActive) {
      setCharSelectActive(false);
    } else {
      setCharSelectActive(true);
    }
  }

  // Content Displayed
  return (
    <>
      {charSelectActive && (
        <Modal onClose={toggleCharSelect}>
          <CharSelect
            onClose={toggleCharSelect}
            charList={charList}
            onCharSelect={charSelectHandler}
            onConfirm={updateToday}
          />
        </Modal>
      )}
      <header>
        <button onClick={toggleCharSelect}>Select Characters</button>
      </header>
      <main>
        <Today data={TodayData} />
      </main>
    </>
  );
}

export default App;
