
import "./LevelSlider.scss"
import { useState } from "react";

const LevelSlider = ({handleDifficultyInput}) => {
    const[difficulty,setDifficulty] = useState("")
    const handleInput = (e) => {
        const currentDifficulty = e.target.value
        setDifficulty(currentDifficulty)
        handleDifficultyInput(currentDifficulty)
    }
    return (
    <>
    <div class="difficulty">
    <h4 className = "difficulty__title">How did it feel?</h4>
    <div className = "slider">
        <div class = "slider__labels">
            <p class = "slider__label">Easy</p>
            <p class = "slider__label">Hard</p>
        </div>
        <input  className = "input slider__input" type="range" min="1" max="100" value={difficulty} onChange = {handleInput}  id="myRange"/>
        </div>
    </div>
    </>
    );
}
 
export default LevelSlider 