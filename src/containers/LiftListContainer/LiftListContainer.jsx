import { useState } from "react/cjs/react.development";
import "./LiftListContainer.scss";
import Card from "../../components/Card/Card";
import FilterContainer from "../FilterContainer/FilterContainer";
import { showDifficulty, getImage } from "../../utils/string-helpers";
import { useEffect } from "react";
import {
  checkIsDefaultFilter,
  findWeightRange,
  checkIfLiftSelect,
  changeAllFilters,
} from "../../utils/filter-helpers";

const LiftListContainer = ({ allLiftsLogged }) => {
  const filterDefault = [
    {
      liftType: "Deadlift",
      isChecked: false,
      weight: "",
      difficulty: "",
      level: "",
    },
    {
      liftType: "Squat",
      isChecked: false,
      weight: "",
      difficulty: "",
      level: "",
    },
    {
      liftType: "Overhead press",
      isChecked: false,
      weight: "",
      difficulty: "",
      level: "",
    },
    {
      liftType: "Bent-over row",
      isChecked: false,
      weight: "",
      difficulty: "",
      level: "",
    },
    {
      liftType: "Bench press",
      isChecked: false,
      weight: "",
      difficulty: "",
      level: "",
    },
  ];
  const weightRange = [
    "0-20",
    "21-40",
    "41-60",
    "61-80",
    "81-100",
    "101-120",
    "121-140",
    "161-180",
    ">180",
  ];

  // Set state for lifts to show and filters
  const [liftsToShow, updateLiftsToShow] = useState(allLiftsLogged);
  const [currentFilter, setFilter] = useState(filterDefault);

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
      return updateLiftsToShow(allLiftsLogged);
    }
    //Copy all the lifts currently shown
    let newLiftsToShow = [...allLiftsLogged];
    let currentLift = currentFilter.find((obj) => obj.isChecked);
    if (currentLift) {
      newLiftsToShow = allLiftsLogged.filter(
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
    //Fid if difficulty input
    let currentDifficulty = currentFilter.find((obj) => obj.level);
    if (currentDifficulty) {
      //Filter from the original total lifts array to set back to new search each time
      newLiftsToShow = newLiftsToShow.filter(
        (item) => item.level === currentDifficulty.level
      );
    }
    return updateLiftsToShow(newLiftsToShow);
  }, [currentFilter]);

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
  const filtersJSX = filterDefault.map((filterItem, i) => {
    return (
      <option
        id={i}
        className="lift-filter__option"
        value={`${filterItem.liftType}`}
      >
        {filterItem.liftType}
      </option>
    );
  });
  const weightRangeJSX = weightRange.map((weightRangeItem, i) => {
    return (
      <option
        id={i}
        className="weight-filter__option"
        value={`${weightRangeItem}`}
      >
        {weightRangeItem} KGs
      </option>
    );
  });

  return (
    <>
      <FilterContainer
        handleDifficultySelect={handleDifficultySelect}
        handleSelectLift={handleSelectLift}
        handleWeightSelect={handleWeightSelect}
        filtersJSX={filtersJSX}
        weightRangeJSX={weightRangeJSX}
      />
      <div className="card-container">{allLiftsLoggedJSX}</div>
    </>
  );
};
export default LiftListContainer;
