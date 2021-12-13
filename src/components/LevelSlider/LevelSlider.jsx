
import "./LevelSlider.scss"
import { useState,useEffect } from "react";
import Slider from "../Slider/Slider";
import showDifficulty  from "../../utils/string-helpers";

const LevelSlider = ({handleDifficultyInput}) => {


    return (
    <div>
        <Slider className = "input slider__input" min="1" max="100" bottomTitle="Very easy" topTitle="Very hard" handleDifficultyInput = {handleDifficultyInput}/>
    </div>
    );
}
 
export default LevelSlider 