import { useState } from "react";
import Nav from "../Nav/Nav";
import Routing from "../../containers/Routes.jsx/Routing";

import { showDifficulty } from "../../utils/string-helpers";

const Home = () => {
  const [currentLift, setCurrentLift] = useState({});
 
  const handleLiftSelect = (e) => {
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

  const handleSubmit = () => {
    const updatedLift = { ...currentLift };
    setCurrentLift(updatedLift)
    console.log(currentLift)
    fetch("https://instant-run-338811.nw.r.appspot.com/lifts/create", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(currentLift)
    })
    .then((res) => {
      if(!res.ok)throw Error ("Could not fetch")
      return res.json()
    })
    .then((json => console.log(json)))
    .catch(err => console.log(err));
};

  return (
    <>
      <Nav />
      <Routing 
        handleLiftSelect={handleLiftSelect}
        handleWeightInput={handleWeightInput}
        handleDifficultyInput={handleDifficultyInput}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default Home;
