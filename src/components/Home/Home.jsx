import { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import Routing from "../Routes.jsx/Routing";

import { showDifficulty } from "../../utils/string-helpers";

const Home = () => {
  const [currentLift, setCurrentLift] = useState({});
  const [allLiftsLogged, setAllLoggedLifts] = useState([]);

  const handleLiftSelect = (e) => {
    // console.log(e)
    const currentLift = e.target.value;
    const currentDate = new Date().toLocaleString().split(",")[0];
    let newLift = {
      liftType: currentLift,
      weight: 0,
      difficulty: 0,
      date: currentDate,
    };
    setCurrentLift(newLift);
  };

  const handleWeightInput = (e) => {
    const kgInput = e.target.value;
    const updatedLift = { ...currentLift };
    parseFloat(updatedLift);
    updatedLift.weight = kgInput;
    setCurrentLift(updatedLift);
  };

  const handleDifficultyInput = (e) => {
    const difficulty = e;
    const updatedLift = { ...currentLift };
    updatedLift.difficulty = difficulty;
    updatedLift.level = showDifficulty(difficulty);
    setCurrentLift(updatedLift);
  };

  const handleClick = (e) => {
    const updatedLift = { ...currentLift };
    const updateLiftsLogged = [...allLiftsLogged];
    updateLiftsLogged.push(updatedLift);
    setAllLoggedLifts(updateLiftsLogged);
  };

  useEffect(() => {
    console.log(allLiftsLogged);
  }, [allLiftsLogged]);

  ///Move routes to own component
  return (
    <>
      <Nav />
      <Routing 
        handleLiftSelect={handleLiftSelect}
        handleWeightInput={handleWeightInput}
        handleDifficultyInput={handleDifficultyInput}
        handleClick={handleClick}
        allLiftsLogged = {allLiftsLogged}/>
    </>
  );
};

export default Home;
