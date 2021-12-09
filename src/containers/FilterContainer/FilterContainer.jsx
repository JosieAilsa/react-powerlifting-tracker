import FilterItems from "../../components/FilterItems/FilterItems";
import LevelSlider from "../../components/LevelSlider/LevelSlider";
import "./FilterContainer.scss"

const FilterContainer = ({filters}) => {
    return (
    <>
    <div className = "filters">
    <FilterItems filters = {filters}/>
    <LevelSlider/>
    </div>
    </>
    );
}
 
export default FilterContainer;