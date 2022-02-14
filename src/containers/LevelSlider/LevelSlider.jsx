import "./LevelSlider.scss";
import { useState} from "react";
import Slider from "../../components/Slider/Slider"
import {showDifficulty } from "../../utils/string-helpers"

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
      <p className = "slider__description">It felt: {showDifficulty(difficulty)}!</p>
    </div>
    
  );
};

export default LevelSlider;
