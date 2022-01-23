import SelectLift from "../../components/SelectLift/SelectLift";
import WeightInput from "../../components/WeightInput/WeightInput";
import LevelSlider from "../../containers/LevelSlider/LevelSlider";
import Button from "../../components/Button/Button";
import "./AddLift.scss";
import { useState } from "react";

const AddLift = ({
  handleLiftSelect,
  handleWeightInput,
  handleDifficultyInput,
  handleSubmit,
}) => {
  const liftsArr = [
    "Deadlift",
    "Squat",
    "Overhead press",
    "Bent-over row",
    "Bench press",
  ];
  const [buttonTitle, setButtonTitle] = useState("Add lift")

  const handleButtonClick = () => {
    console.log("fired")
    setButtonTitle("Added!")
  }

  return (
    <form className="form">
      <h3 className="title">Record Lift</h3>
      <SelectLift liftsArr={liftsArr} handleLiftSelect={handleLiftSelect} />
      <WeightInput handleWeightInput={handleWeightInput} />
      <div class="difficulty">
        <h4 className="difficulty__title">How did it feel?</h4>
        <LevelSlider handleDifficultyInput={handleDifficultyInput} />
      </div>
      <Button type="submit" title={buttonTitle} handleSubmit = {handleSubmit}/>
    </form>
  );
};

export default AddLift;
