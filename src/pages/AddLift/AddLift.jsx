import SelectLift from "../../components/SelectLift/SelectLift";
import WeightInput from "../../components/WeightInput/WeightInput";
import LevelSlider from "../../containers/LevelSlider/LevelSlider";
import Button from "../../components/Button/Button";
import "./AddLift.scss";
import { useEffect, useState } from "react";

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
  const defaultButtonText = "Add Lift"
  const [buttonText, setButtonText] = useState(defaultButtonText); 

  const handleButtonClick = () => {
    handleSubmit()
    changeButtonText("Added!")
  }
  
  useEffect(() => {
   if (buttonText !== defaultButtonText) {
     setTimeout(() => setButtonText(defaultButtonText),[1000])
   }
  }, [buttonText])

  const changeButtonText = (text) => setButtonText(text)

  return (
    <form className="form">
      <h3 className="title">Record Lift</h3>
      <SelectLift liftsArr={liftsArr} handleLiftSelect={handleLiftSelect} />
      <WeightInput handleWeightInput={handleWeightInput} />
      <div class="difficulty">
        <h4 className="difficulty__title">How did it feel?</h4>
        <span>Move the level slider to set the difficulty</span>
        <LevelSlider handleDifficultyInput={handleDifficultyInput} />
      </div>
      <Button  buttonClass = "submit" type="submit" buttonText= {buttonText} handleSubmit = {handleButtonClick}/>
    </form>
  );
};

export default AddLift;
