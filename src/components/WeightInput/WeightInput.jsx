import "./WeightInput.scss";
import { useState } from "react";

const WeightInput = ({ handleWeightInput }) => {

  return (
    <div className="weightcontainer">
      <h4 className="weight__title">How much did you lift?</h4>
      <div className="weight__input">
        <input
          type="text"
          className="input"
          placeholder="Enter the weight you lifted here"
          value={null}
          onChange={handleWeightInput}
        />
        <h5 className="input__kgs">KGs</h5>
      </div>
    </div>
  );
};

export default WeightInput;
