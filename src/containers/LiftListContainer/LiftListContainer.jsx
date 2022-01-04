import { useState } from "react/cjs/react.development";
import "./LiftListContainer.scss"
import Card from "../../components/Card/Card"
import FilterContainer from "../FilterContainer/FilterContainer";
import showDifficulty from "../../utils/string-helpers";
import { useEffect } from "react";
import checkIsDefaultFilter from "../../utils/filter-helpers"
import findWeightRange from "../../utils/filter-helpers";


const LiftListContainer = ({allLiftsLogged}) => {
    const filterDefault = [
      {liftType: "Deadlift", isChecked: false, weight: "", difficulty: "", level: ""},
      {liftType: "Squat", isChecked: false, weight: "", difficulty: "", level: ""},
      {liftType: "Overhead press", isChecked: false, weight: "", difficulty: "", level: ""},
      {liftType: "Bent-over row", isChecked: false,weight: "", difficulty: "", level: ""},
      {liftType: "Bench press", isChecked: false, weight: "", difficulty: "", level: ""}
    ]
    const weightRange = [
        "0-20",
        "21-40",
        "41-60",
        "61-80",
        "81-100",
        "101-120",
        "121-140",
        "161-180",
        ">180"
    ]

// Set state for lifts to show and filters
  const [liftsToShow, updateLiftsToShow] = useState(allLiftsLogged)
  const [currentFilter, setFilter] = useState(filterDefault);



 //Filter set up:  

 //Check if there is a lift selected so can filter by only that lift 
  const  checkIfLiftSelect = () => {
      const currentCheck = currentFilter.find(obj => obj.isChecked)
      const indexValue = currentFilter.indexOf(currentCheck); 
      if (indexValue > -1) {
          return indexValue
      } else {
          return false;
      }
  }
  //
  const changeAllFilters = (array, key, value) => {
      const newArr = array.map(item => {
          item[key] = value 
          return item;
      })
      return newArr;
  }

  const checkIsDefaultFilter = (curr, def) => {
    // Check if the current filter is the default 
   const isDefault = curr.every((item, index) =>{
        const keyValues = Object.keys(item)
        const isMatch = keyValues.every(key => item[key] === def[index][key])
        if(isMatch) {
            return true
        }   
        });
    return isDefault;
    } 


  //Handle lift fliter
  const handleSelectLift = (e) => {
      const weightSelect  = e.target.value;
      if (weightSelect === "Select") {
          const updateFilter = changeAllFilters(currentFilter, "isChecked", false)
          setFilter(updateFilter)
          return console.log(currentFilter)
      } 
      const indexValue = currentFilter.findIndex(obj => obj.liftType === weightSelect);
      const updateFilter = [...filterDefault]; 
      updateFilter[indexValue].isChecked = true;
      console.log(updateFilter);
      setFilter(updateFilter);
  }
  //Handle weight select 
  const handleWeightSelect = (e) => {
      const weightInput = e.target.value; 
      if (weightInput === "Select") {
          const updateFilter = changeAllFilters(currentFilter, "weight", "")
          setFilter(updateFilter)
          return console.log(currentFilter)
      }
      const indexValue =  checkIfLiftSelect();
      if (indexValue) {
          const updateFilter = [...currentFilter];
          updateFilter[indexValue].weight = weightInput;
          console.log(updateFilter)
          return setFilter(updateFilter);
      } else {
          const updateFilter = changeAllFilters(currentFilter, "weight", weightInput)
          setFilter(updateFilter)
          return console.log(currentFilter)
      }
  }
  
  const handleDifficultyInput = (e) => {
      const difficultyInput = e;
      const indexValue =  checkIfLiftSelect();
      if (indexValue) {
          const updateFilter = [...currentFilter];
          updateFilter[indexValue].difficulty = difficultyInput;
          updateFilter[indexValue].level = showDifficulty(e);
          setFilter(updateFilter)
          console.log(currentFilter)
      } else {
          const updateFilter = currentFilter.map(item => {
              item.difficulty = difficultyInput; 
              item.level = showDifficulty(difficultyInput)
              return item;
              })
           setFilter(updateFilter); 
          console.log(currentFilter);
      }
  }

  const filtersJSX = filterDefault.map((filterItem, i) => {
      return <option id = {i} className = "lift-filter__option" value = {`${filterItem.liftType}`}>{filterItem.liftType}</option>
  })
  const weightRangeJSX = weightRange.map((weightRangeItem, i ) => {
      return <option id = {i} className = "weight-filter__option" value = {`${weightRangeItem}`} >{weightRangeItem} KGs</option>
  })

  useEffect(() => {
   const isDefault = checkIsDefaultFilter(currentFilter,filterDefault)
   //Guard to reset the filters if none selected 
   if (isDefault){
       return  updateLiftsToShow(allLiftsLogged)
   }
   //Else determine what else to filter... 
  let currentLift = currentFilter.find(obj => obj.isChecked)
  //Copy all the lifts currently shown 
  let newLiftsToShow; 
   if (currentLift) {
      newLiftsToShow = liftsToShow.filter(item => item.liftType === currentLift.liftType)
   }
   //Find if weight input
   let currentWeight = currentFilter.find(obj => obj.weight)
   if (currentWeight) {
    newLiftsToShow = liftsToShow.filter(item => {
        const weightRange = findWeightRange(item.weight)
        if (weightRange === currentWeight.weight) {
            return true;
        }
    }); 
    console.log(newLiftsToShow)
   }
    //Find if difficulty input
    let currentDifficulty = currentFilter.find(obj => obj.level)
    if (currentDifficulty) {
     newLiftsToShow = liftsToShow.filter(item => item.level ===  currentDifficulty.level)
    }
    console.log(newLiftsToShow)
    return updateLiftsToShow(newLiftsToShow)
  }, [currentFilter])

      
  const allLiftsLoggedJSX =  liftsToShow.map(lift => {       
    return (<>
       <Card liftType= {lift.liftType} weight = {lift.weight} difficulty = {lift.difficulty} date = {lift.date} level = {lift.level} />
       </>)
   });



 return (
    <>
    <FilterContainer handleDifficultyInput = {handleDifficultyInput} handleSelectLift ={handleSelectLift} handleWeightSelect ={handleWeightSelect} filtersJSX = {filtersJSX} weightRangeJSX = {weightRangeJSX} />
    <div className = "card-container">
    {allLiftsLoggedJSX}
    </div> 
    </>
 )
 }
export default LiftListContainer;