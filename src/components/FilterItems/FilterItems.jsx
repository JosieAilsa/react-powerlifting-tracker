import LevelSlider from "../LevelSlider/LevelSlider";
import "./FilterItems.scss"
const FilterItems = ({filters}) => {
 const filtersJSX = filters.map((filterItem, i) => {
     console.log(filterItem)
     return <option id = {i} className = "select__option" value = {`${filterItem.type}`}>{filterItem.type}</option>
 })

    return ( <>
    <div className = "lift-select">
        <label htmlFor="lift">Select lift type: </label>
        <select name="lift" className = "select" id="lift">
        <option selected value> Select</option>
            {filtersJSX}
        </select>
    </div>
    </> );
}
 
export default FilterItems;