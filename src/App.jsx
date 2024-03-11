import { useState } from "react";
import "./App.css";
import CharSelect from "./components/CharSelect";
import Modal from "./components/Modal";
import Today from "./components/Today";
import Characters from "./data/Characters";
import Materials from "./data/Materials";
import Paimon from "../public/paimon.png";
import WeeklyDist from "./components/WeeklyDist";
import Footer from "./components/Footer";

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

  const todayDayDisplay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][todayDay];

  function updateToday() {
    const filteredTodayData = [...TodayData].filter(
      (character) =>
        charList[character.name] && charList[character.name].selected
    );

    for (let i = 0; i < Object.keys(charList).length; i++) {
      if (charList[i].selected) {
        let currMat = charList[i].material;
        if (matList[currMat].day.includes(todayDay)) {
          filteredTodayData.push({
            name: charList[i].name,
            dName: charList[i].displayName,
            matName: currMat,
            mat: matList[currMat].name,
            domain: matList[currMat].domain,
          });
        }
      }
    }

    setTodayData(filteredTodayData);
  }

  // Weekly Distribution Component
  const [weeklyData, setWeeklyData] = useState({
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
  });

  function updateWeekly() {
    const filteredWeeklyData = { ...weeklyData };

    for (let i = 0; i < Object.keys(charList).length; i++) {
      const character = charList[i];
      if (!character.selected) {
        for (let j = 1; j < 7; j++) {
          const indexToRemove = filteredWeeklyData[j].indexOf(character.name);
          if (indexToRemove !== -1) {
            filteredWeeklyData[j].splice(indexToRemove, 1);
          }
        }
      }
    }

    for (let i = 0; i < Object.keys(charList).length; i++) {
      if (charList[i].selected) {
        let currMat = charList[i].material;
        for (let j = 1; j < 7; j++) {
          if (matList[currMat].day.includes(j)) {
            if (!filteredWeeklyData[j].includes(charList[i].name)) {
              filteredWeeklyData[j].push(charList[i].name);
            }
          }
        }
      }
    }

    setWeeklyData(filteredWeeklyData);
  }

  // Update
  function updateData() {
    updateToday();
    updateWeekly();
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
            onConfirm={updateData}
          />
        </Modal>
      )}
      <header>
        <button onClick={toggleCharSelect}>Select Characters</button>
      </header>
      <br />
      <hr />
      <main>
        <div>
          <h1>Farmable Today ({todayDayDisplay})</h1>
          {TodayData.length > 0 ? (
            <Today data={TodayData} />
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img src={Paimon} style={{ height: 150 }} />
              <h3>No Selected Characters are Farmable Today</h3>
            </div>
          )}
          <br />
        </div>
        <hr />
        <div>
          <h1>Weekly Distribution</h1>
          <WeeklyDist data={weeklyData} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
