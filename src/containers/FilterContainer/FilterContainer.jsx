import { useState } from "react";
import FilterItems from "../../components/FilterItems/FilterItems";
import LevelSlider from "../../components/LevelSlider/LevelSlider";
import Slider from "../../components/Slider/Slider";
import "./FilterContainer.scss"

const FilterContainer = ({filters}) => {
const [filterDifficulty, setDifficultyFilter] = useState("")

const filtersJSX = filters.map((filterItem, i) => {
    return <option id = {i} className = "lift-filter__option" value = {`${filterItem.type}`}>{filterItem.type}</option>
})
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
const weightRangeJSX = weightRange.map((weightRangeItem, i ) => {
    return <option id = {i} className = "weight-filter__option" value = {`${weightRangeItem}`}>{weightRangeItem} KGs</option>

})

    
    return (
    <>
    <div className = "filters" selectOptions = {filtersJSX} labelCopy = "Select lift type">
    <FilterItems className = "lift-filter" selectItems = {filtersJSX}/>
    <FilterItems className = "weight-filter"selectItems = {weightRangeJSX}/>
    <div className = "difficulty-container">
    <Slider className = "difficulty-filter" bottomTitle ="easy" topTitle="hard" difficulty = {filterDifficulty}/>
    </div>
    </div>
    </>
    );
}
 
export default FilterContainer;