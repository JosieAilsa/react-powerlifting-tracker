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
  filterDefault,
  weightRange
} from "../../utils/filter-helpers";
import useFetch from "../../utils/useFetch";


const LoggedLifts = () => {
  // Set state for lifts to show and filters
  const [liftsToShow, setLiftsToShow] = useState([]);
  const [currentFilter, setFilter] = useState(filterDefault);  
  const  [deleteId, setDeleteId] = useState()
  const {allLifts, isPending, isError} = useFetch("https://instant-run-338811.nw.r.appspot.com/lifts/all")

  //Type of lift fliter
  const handleSelectLift = (e) => {
    const weightSelect = e.target.value;
    if (weightSelect === "Reset") {
      // 1. Reset all filters to false, as "Select" means reset
      const updateFilter = changeAllFilters(currentFilter, "isChecked", false);
      console.log("fired")
      setFilter(updateFilter);
      return;
    }
    // 2. Find the corresponding filter, and update isChecked to be true
    currentFilter.forEach(f => {
      if (f.liftType == weightSelect) f.isChecked = true;
    })
    setFilter([...currentFilter])
    console.log(currentFilter)
    // const indexValue = currentFilter.findIndex(
    //   (obj) => obj.liftType === weightSelect
    // );
    // const updateFilter = [...filterDefault];
    // updateFilter[indexValue].isChecked = true;

    // // 3.
    // setFilter(updateFilter);
  };
  //Weight range filter
  const handleWeightSelect = (e) => {
    const weightInput = e.target.value;
    if (weightInput === "Select") {
      const updateFilter = changeAllFilters(currentFilter, "weight", "");
      setFilter(updateFilter);
      return console.log(currentFilter);
    }
    const indexValue = hasArrayItem(currentFilter, weightInput);
    if (indexValue) {
      const updateFilter = [...currentFilter];
      updateFilter[indexValue].weight = weightInput;
      setFilter(updateFilter);
      return;
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
    if(!isPending) {
      return 
    }
    setLiftsToShow([...allLifts])
  }, [allLifts]);
  
  //Deletes an entry one the delet button is pressed 
  useEffect(() => {
  if(isPending) {
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


//Watches for any changes to the state of the filter array and filters all the lists returns from the fetch 
  useEffect(() => {
    // If fetch has not performed return 
    if (isPending){
      return 
    }
    const isDefault = checkArraysAreEqual(currentFilter, filterDefault);
    //Guard to reset the filters if none selected
    if (isDefault) {
      return setLiftsToShow(allLifts);
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
    return setLiftsToShow(newLiftsToShow);
  }, [currentFilter]);

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
    <>
     {isPending && <h3>Loading...</h3>}
     {isError && <h3>Error</h3>}
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
    </>
  );
};
export default LoggedLifts;
