import { useState } from "react";
import FilterItems from "../../components/FilterItems/FilterItems";
import Slider from "../../components/Slider/Slider";
import "./FilterContainer.scss"

const FilterContainer = ({handleDifficultyInput,handleSelectLift, handleWeightSelect, filtersJSX, weightRangeJSX }) => {
    return (
    <>
    <div className = "filters" selectOptions = {filtersJSX} labelCopy = "Select lift type">
    <FilterItems className = "lift-filter" selectItems = {filtersJSX} eventHandler = {handleSelectLift}/>
    <FilterItems className = "weight-filter"selectItems = {weightRangeJSX} eventHandler = {handleWeightSelect}/>
    <div className = "difficulty-container">
    <Slider className = "difficulty-filter" bottomTitle ="easy" topTitle="hard" eventHandle = {handleDifficultyInput}/>
    </div>
    </div>
    </>
    );
}
 
export default FilterContainer;