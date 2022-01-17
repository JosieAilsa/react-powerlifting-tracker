import { useState } from "react";
import FilterItems from "../../components/FilterItems/FilterItems";
import Slider from "../../components/Slider/Slider";
import "./FilterContainer.scss";

const FilterContainer = ({
  handleDifficultySelect,
  handleSelectLift,
  handleWeightSelect,
  filtersJSX,
  weightRangeJSX,
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
            bottomTitle="easy"
            topTitle="hard"
            eventHandle={handleDifficultySelect}
          />
        </div>
      </div>
    </>
  );
};

export default FilterContainer;
