import LevelSlider from "../LevelSlider/LevelSlider";
import "./FilterItems.scss"
const FilterItems = ({selectItems, labelCopy, className}) => {
    return ( <>
    <div className = {className}>
        <label htmlFor={`${className}__label`}>{labelCopy}</label>
        <select name= {className} className = {`${className}__select`}id="lift">
        <option selected value ="Select">Select</option>
            {selectItems}
        </select>
    </div>
    </> );
}
 
export default FilterItems;