import LevelSlider from "../LevelSlider/LevelSlider";
import "./FilterItems.scss";
const FilterItems = ({ selectItems, labelCopy, className, eventHandler }) => {
  return (
    <>
      <div className={`${{ className }} filter`}>
        <label htmlFor={`${className}__label filter__select`}>
          {labelCopy}
        </label>
        <select
          name={className}
          className={`${className}__select`}
          id="lift"
          onChange={eventHandler}
        >
          <option selected value="Select">
            Select
          </option>
          {selectItems}
        </select>
      </div>
    </>
  );
};

export default FilterItems;
