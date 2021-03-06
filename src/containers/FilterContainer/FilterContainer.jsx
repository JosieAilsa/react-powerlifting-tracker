import FilterItems from "../../components/FilterItems/FilterItems";
import Slider from "../../components/Slider/Slider";
import "./FilterContainer.scss";
import {filtersJSX, weightRangeJSX} from "../../utils/filter-helpers"

const FilterContainer = ({
  handleDifficultySelect,
  handleSelectLift,
  handleWeightSelect
}) => {
  return (
    <>
      <div className="filters" selectOptions={filtersJSX}>
        <FilterItems
          className="lift-filter"
          selectItems={filtersJSX}
          eventHandler={handleSelectLift}
          labelCopy="Select lift type"
        />
        <FilterItems
          className="weight-filter"
          selectItems={weightRangeJSX}
          eventHandler={handleWeightSelect}
          labelCopy="Select weight range"
        />
        <div className="difficulty-container">
          <Slider
            className="difficulty-filter"
            bottomTitle="Very easy"
            topTitle="Very hard"
            eventHandle={handleDifficultySelect}
          />
        </div>
      </div>
    </>
  );
};

export default FilterContainer;
