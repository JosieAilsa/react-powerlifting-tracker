import { useState } from "react/cjs/react.development";
import "./LoggedLifts.scss";
import Card from "../../components/Card/Card";
import FilterContainer from "../../containers/FilterContainer/FilterContainer";
import { showDifficulty, getImage } from "../../utils/string-helpers";
import { useEffect } from "react";
import {
  checkArraysAreEqual,
  findWeightRange,
  hasArrayItem,
  changeAllFilters,
} from "../../utils/filter-helpers";
import useFetch from "../../utils/useFetch";
import ErrorBoundary from "../../containers/ErrorBoundary/ErrorBoundary";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";


const LoggedLifts = () => {
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
  // Set state for lifts to show and filters
  const [liftsToShow, setLiftsToShow] = useState([]);
  const [currentFilter, setFilter] = useState([...filterDefault]);  
  const  [deleteId, setDeleteId] = useState(null)
  const {allLifts, isPending, isError} = useFetch("https://instant-run-338811.nw.r.appspot.com/lifts/all")
  
  const handleSelectLift = (e) => {
    const weightSelect = e.target.value;
    // 1. Reset all filters to false
    const updateFilter = changeAllFilters(currentFilter, "isChecked", false);
    setFilter(updateFilter);
    //2. Return if the filter is set to default
    if (weightSelect === "Reset") {
    return;
    }
    // 2. Find the corresponding filter, and update isChecked to be true
    // currentFilter.map(f => {
    //   console.log(f)
    //   if (f.liftType == weightSelect) f.isChecked = true;
    //   console.log(f)
    // })
    return setFilter([...currentFilter])
  };
  
  //Weight range filter
  const handleWeightSelect = (e) => {
    const weightInput = e.target.value;
    if (weightInput === "Reset") {
      const updateFilter = changeAllFilters(currentFilter, "weight", "");
      setFilter(updateFilter);
      return;
    }
    const indexValue = hasArrayItem(currentFilter, weightInput);
    if (indexValue) {
      const updateFilter = [...currentFilter];
      updateFilter[indexValue].weight = weightInput;
      setFilter(updateFilter);
    } else {
      const updateFilter = changeAllFilters(
        currentFilter,
        "weight",
        weightInput
      );
      setFilter(updateFilter);
    }
  };
  //Difficulty slider
  const handleDifficultySelect = (e) => {
    const difficultyInput = e;
    const indexValue = hasArrayItem(currentFilter, difficultyInput);
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

//Updates the lift to show once the fetch has complte 
  useEffect(() => {
    if(!allLifts || allLifts.length > 0) return 
    setLiftsToShow([...allLifts])
  }, [allLifts]);
  
  //Deletes an entry one the delet button is pressed 
  // get rid of useEffect
  useEffect(() => {
  if(!deleteId) {
    return 
  }
  fetch(`https://instant-run-338811.nw.r.appspot.com/lifts/${deleteId}`, { 
  method: 'DELETE',
    })
    .then((res) => {
      if(!res.ok) throw Error ("Could not fetch")
      return res.json()
    })
    .catch(err => console.log(err));
    // window.location.reload;
    
},
 [deleteId])


//Watches for any changes to the state of the filter array and filters all the lists returned from the fetch 
  useEffect(() => {
    //1. If fetch has not performed return 
    if (isPending){
      return 
    }
    //2. Guard check if the filters have nothing selected =
    const isDefault = checkArraysAreEqual(currentFilter, filterDefault);
    //1. Check if the default filters are applied and set to all lifts if possible... 
    if (isDefault) {
      return setLiftsToShow([...allLifts]);
    }
    //Copy all the lifts currently shown
    let newLiftsToShow = [...allLifts];
    //Find it there is a specific lift checked for first filter
    let currentLift = currentFilter.find((obj) => obj.isChecked);
    //If there is one checked, filter the list to show just that lift
    if (currentLift) {
      newLiftsToShow = allLifts.filter(
        (item) => item.liftType === currentLift.liftType
      );
    }
    //Now, in the same way, check the copy of allLifts to see if weight is checked
    let currentWeight = currentFilter.find((obj) => obj.weight);
    if (currentWeight) {
      newLiftsToShow = newLiftsToShow.filter((item) => {
        const weightRange = findWeightRange(item.weight);
        if (weightRange === currentWeight.weight) return true;
        return false;
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
    setLiftsToShow(newLiftsToShow); 
    return;
  }, [currentFilter,allLifts,filterDefault, isPending]);

    const cardJSX = liftsToShow.map(lift => {
      const imageURL = getImage(lift.liftType);
      return (
        <>
          <Card 
            key = {lift.id.toString}
            id = {lift.id}
            liftType={lift.liftType}
            weight={lift.weight}
            difficulty={lift.difficulty}
            date={lift.date}
            level={lift.level}
            img={imageURL}
            setDeleteId = {setDeleteId}
          />
        </>
      );
    });
    

  return (
  <ErrorBoundary>
     {isPending && <h3>Loading...</h3>}
     {isError && <ErrorMessage/>}
     {!isPending && 
        <>
          <FilterContainer
            handleDifficultySelect={handleDifficultySelect}
            handleSelectLift={handleSelectLift}
            handleWeightSelect={handleWeightSelect}
          />
          <div className="card-container">{cardJSX}</div>
         </>
}
  </ErrorBoundary>
  );
};
export default LoggedLifts;
