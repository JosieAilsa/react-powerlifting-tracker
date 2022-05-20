import "./SelectLift.scss";
import { useState } from "react";

const SelectLift = ({ liftsArr, handleLiftSelect }) => {

  const getLiftRadio = liftsArr.map((lift, i) => {
    return (
      <div className="radio">
        <input
          type="radio"
          id={lift + i}
          className="radio__input"
          name="lift"
          value={lift}
          onClick={handleLiftSelect}
        />
        <label className = "radio__label" for={lift}>{lift}</label>
      </div>
    );
  });
  return (
    <div className="lift">
      <h4 className="lift__title">Lift Type</h4>
      <div className="lift__list">{getLiftRadio}</div>
    </div>
  );
};

export default SelectLift;
