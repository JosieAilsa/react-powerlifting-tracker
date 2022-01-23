import { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import Routing from "../../containers/Routes.jsx/Routing";

import { showDifficulty } from "../../utils/string-helpers";

const Home = () => {
  const [currentLift, setCurrentLift] = useState({});
  const [allLiftsLogged, setAllLoggedLifts] = useState([]);
  const [isDeleteSuccess, setIsDeleteSuccess]= useState(false)

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
    console.log(currentLift)
  };

  const handleWeightInput = (e) => {
    const kgInput = e.target.value;
    const updatedLift = { ...currentLift };
    parseFloat(updatedLift);
    updatedLift.weight = kgInput;
    setCurrentLift(updatedLift);
    console.log(currentLift)
  };

  const handleDifficultyInput = (e) => {
    const difficulty = e;
    const updatedLift = { ...currentLift };
    updatedLift.difficulty = difficulty;
    updatedLift.level = showDifficulty(difficulty);
    setCurrentLift(updatedLift);
    console.log(currentLift)
  };

  const handleSubmit = () => {
    const updatedLift = { ...currentLift };
    setCurrentLift(updatedLift)
    console.log(currentLift)
    fetch("http://localhost:8080/lifts/create", {
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
        handleSubmit={handleSubmit}
        allLiftsLogged = {allLiftsLogged}/>
    </>
  );
};

export default Home;
