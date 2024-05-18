import { useState, useEffect } from "react";
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
  const [sortType, setSortType] = useState("A → Z");

  // character selection status handling
  const [charList, setCharList] = useState(Characters);

  // refresh on update to charlist
  useEffect(() => {
    if (charList) {
      updateData();
    }
  }, [charList]);

  // toggle selection flag
  function charSelectHandler(charID) {
    setCharList((prevCharList) => {
      const updatedCharList = { ...prevCharList };
      updatedCharList[charID] = {
        ...updatedCharList[charID],
        selected: !updatedCharList[charID].selected,
      };
      localStorage.setItem("charList", JSON.stringify(updatedCharList));
      return updatedCharList;
    });
  }

  // local storage loading
  const loadFromLS = () => {
    const savedCharList = JSON.parse(localStorage.getItem("charList"));
    if (savedCharList) {
      setCharList(savedCharList);
    }
  };

  // TODAY component
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

  function sortCharListByElement() {
    const sortedList = Object.values(charList).sort((a, b) => {
      if (a.element > b.element) return -1;
      if (a.element < b.element) return 1;
      return 0;
    });

    setCharList(sortedList);
  }

  function sortCharListAlphabetically() {
    const sortedList = Object.values(charList).sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    setCharList(sortedList);
  }

  function toggleSort() {
    if (sortType === "A → Z") {
      sortCharListByElement();
      setSortType("Element");
    } else if (sortType === "Element") {
      sortCharListAlphabetically();
      setSortType("A → Z");
    }
  }

  // weekly distribution component
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

  // update
  function updateData() {
    updateToday();
    updateWeekly();
  }

  // toggling modal
  const [charSelectActive, setCharSelectActive] = useState(false);

  function toggleCharSelect() {
    if (charSelectActive) {
      setCharSelectActive(false);
    } else {
      setCharSelectActive(true);
    }
  }

  // content displayed
  return (
    <>
      {charSelectActive && (
        <Modal onClose={toggleCharSelect}>
          <CharSelect
            onSort={toggleSort}
            onClose={toggleCharSelect}
            charList={charList}
            onCharSelect={charSelectHandler}
            onConfirm={updateData}
            currSortType={sortType}
          />
        </Modal>
      )}
      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <button onClick={toggleCharSelect}>Select Characters</button>
          <button onClick={loadFromLS} style={{ marginLeft: "10px" }}>
            Load Saved
          </button>
        </div>
        <div>
          <button
            onClick={() =>
              (window.location.href = "https://genshin.hoyoverse.com/en/")
            }
          >
            Genshin Impact
          </button>
          <button
            style={{ marginLeft: "10px" }}
            onClick={() =>
              (window.location.href =
                "https://github.com/bhanukaaa/GenshinCalendar")
            }
          >
            GitHub Page
          </button>
        </div>
      </header>
      <br />
      <hr />
      <main>
        <div>
          <h1>
            Farmable Today (
            <span style={{ color: "rgb(245, 120, 120)" }}>
              {todayDayDisplay}
            </span>
            )
          </h1>
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
