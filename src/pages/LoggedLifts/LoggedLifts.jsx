import { useState } from "react/cjs/react.development";
import "./LoggedLifts.scss";
import Card from "../../components/Card/Card";
import FilterContainer from "../../containers/FilterContainer/FilterContainer";
import { showDifficulty, getImage } from "../../utils/string-helpers";
import { useEffect } from "react";
import {
  checkIsDefaultFilter,
  findWeightRange,
  checkIfLiftSelect,
  changeAllFilters,
  filterDefault,
  weightRange
} from "../../utils/filter-helpers";
import useFetch from "../../utils/useFetch";


const LoggedLifts = () => {
const {allLifts, isPending, isError} = useFetch("http://localhost:8080/lifts")

  // Set state for lifts to show and filters
  const [liftsToShow, updateLiftsToShow] = useState(null);
  const [currentFilter, setFilter] = useState(filterDefault);
  const [liftsJSX, setLiftsJSX] = useState(null)



  // Handle filter selectfunction
  //Type of lift fliter
  const handleSelectLift = (e) => {
    const weightSelect = e.target.value;
    if (weightSelect === "Select") {
      const updateFilter = changeAllFilters(currentFilter, "isChecked", false);
      setFilter(updateFilter);
      return console.log(currentFilter);
    }
    const indexValue = currentFilter.findIndex(
      (obj) => obj.liftType === weightSelect
    );
    const updateFilter = [...filterDefault];
    updateFilter[indexValue].isChecked = true;
    console.log(updateFilter);
    setFilter(updateFilter);
  };
  //Weight range filter
  const handleWeightSelect = (e) => {
    const weightInput = e.target.value;
    if (weightInput === "Select") {
      const updateFilter = changeAllFilters(currentFilter, "weight", "");
      setFilter(updateFilter);
      return console.log(currentFilter);
    }
    const indexValue = checkIfLiftSelect(currentFilter, weightInput);
    if (indexValue) {
      const updateFilter = [...currentFilter];
      updateFilter[indexValue].weight = weightInput;
      console.log(updateFilter);
      return setFilter(updateFilter);
    } else {
      const updateFilter = changeAllFilters(
        currentFilter,
        "weight",
        weightInput
      );
      setFilter(updateFilter);
      return console.log(currentFilter);
    }
  };

  //Difficulty slider
  const handleDifficultySelect = (e) => {
    const difficultyInput = e;
    const indexValue = checkIfLiftSelect(currentFilter, difficultyInput);
    if (indexValue) {
      const updateFilter = [...currentFilter];
      updateFilter[indexValue].difficulty = difficultyInput;
      updateFilter[indexValue].level = showDifficulty(e);
      setFilter(updateFilter);
      console.log(currentFilter);
    } else {
      const updateFilter = currentFilter.map((item) => {
        item.difficulty = difficultyInput;
        item.level = showDifficulty(difficultyInput);
        return item;
      });
      setFilter(updateFilter);
      console.log(currentFilter);
    }
  };

  useEffect(() => {
    const isDefault = checkIsDefaultFilter(currentFilter, filterDefault);
    //Guard to reset the filters if none selected
    if (isDefault) {
      console.log(currentFilter);
      return updateLiftsToShow(allLifts);
    }
    //Copy all the lifts currently shown
    let newLiftsToShow = [...allLifts];
    let currentLift = currentFilter.find((obj) => obj.isChecked);
    if (currentLift) {
      newLiftsToShow = allLifts.filter(
        (item) => item.liftType === currentLift.liftType
      );
    }
    //Find if weight input
    let currentWeight = currentFilter.find((obj) => obj.weight);
    if (currentWeight) {
      newLiftsToShow = newLiftsToShow.filter((item) => {
        const weightRange = findWeightRange(item.weight);
        if (weightRange === currentWeight.weight) {
          return true;
        }
      });
      console.log(newLiftsToShow);
    }
    //Find if difficulty input
    let currentDifficulty = currentFilter.find((obj) => obj.level);
    if (currentDifficulty) {
      //Filter from the original total lifts array to set back to new search each time
      newLiftsToShow = newLiftsToShow.filter(
        (item) => item.level === currentDifficulty.level
      );
    }
    return updateLiftsToShow(newLiftsToShow);
  }, [currentFilter]);

  useEffect(() => {
  //Functions to return JSX
  const allLiftsLoggedJSX = liftsToShow.map((lift) => {
    const imageURL = getImage(lift.liftType);
    return (
      <>
        <Card
          liftType={lift.liftType}
          weight={lift.weight}
          difficulty={lift.difficulty}
          date={lift.date}
          level={lift.level}
          img={imageURL}
        />
      </>
    );
  });
  return setLiftsJSX(allLiftsLoggedJSX)
  },[liftsToShow]);


  return (
    <>
     {isPending && <h3>Loading...</h3>}
     {isError && <h3>Error</h3>}
     {liftsJSX &&
      <>
        <FilterContainer
          handleDifficultySelect={handleDifficultySelect}
          handleSelectLift={handleSelectLift}
          handleWeightSelect={handleWeightSelect}
        />
        <div className="card-container">{liftsJSX}</div>
      </>
     }
    </>
  );
};
export default LoggedLifts;
