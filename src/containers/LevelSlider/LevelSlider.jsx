import "./LevelSlider.scss";
import { useState} from "react";
import Slider from "../../components/Slider/Slider"

const LevelSlider = ({ handleDifficultyInput }) => {
  const [difficulty, setDifficulty] = useState("");

  const handleInput = (e) => {
    setDifficulty(e);
    handleDifficultyInput(e);
  };

  return (
    <div>
      <Slider
        className="input slider__input"
        bottomTitle="Very easy"
        topTitle="Very hard"
        difficulty={difficulty}
        eventHandle={handleInput}
      />
    </div>
  );
};

export default LevelSlider;
