import SelectLift from "../../components/SelectLift/SelectLift";
import WeightInput from "../../components/WeightInput/WeightInput";
import LevelSlider from "../../containers/LevelSlider/LevelSlider";
import Button from "../../components/Button/Button";
import "./AddLift.scss";

const AddLift = ({
  handleLiftSelect,
  handleWeightInput,
  handleDifficultyInput,
  handleClick,
}) => {
  const liftsArr = [
    "Deadlift",
    "Squat",
    "Overhead press",
    "Bent-over row",
    "Bench press",
  ];

  //Get rid of main title
  return (
    <form className="form">
      <h3 className="title">Record Lift</h3>
      <SelectLift liftsArr={liftsArr} handleLiftSelect={handleLiftSelect} />
      <WeightInput handleWeightInput={handleWeightInput} />
      <div class="difficulty">
        <h4 className="difficulty__title">How did it feel?</h4>
        <LevelSlider handleDifficultyInput={handleDifficultyInput} />
      </div>
      <Button type="reset" handleClick={handleClick} title={"Add next lift"} />
    </form>
  );
};

export default AddLift;
