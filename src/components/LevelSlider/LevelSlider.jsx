
import "./LevelSlider.scss"
import { useState } from "react";

const LevelSlider = ({handleDifficultyInput, bottomTitle, topTitle, min, max}) => {
    const[difficulty,setDifficulty] = useState("")
    const [newlevel, setLevel] = useState("moderate")
    const handleInput = (e) => {
        const currentDifficulty = e.target.value
        setDifficulty(currentDifficulty)
        handleDifficultyInput(currentDifficulty)
        showDifficulty(currentDifficulty)
    }
    //// Conditionals that when >80 above slider will display very hard 
    /// when about >60-80 will display hard
    // >40-60 will display moderate 
    //>20-40 will display easy 
    //>0-20 will display easy 

    const showDifficulty = (currentValue) => {
        if (difficulty >= 90) {
            return "very hard"
            setLevel("very hard")
        } else if (difficulty >= 80) {
            return "hard"
        } else if (difficulty >= 40) {
            const getNewLevel = "moderate"
            setLevel(getNewLevel)
        } else if (difficulty >= 20) {
            const getNewLevel = "easy"
            setLevel(getNewLevel)
        } else {
            const getNewLevel = "very easy"
            setLevel(getNewLevel)
        }
    }


    return (
    <div className = "slider">
        <div class = "slider__labels">
            <p class = "slider__label">{bottomTitle}</p>
            <p class = "slider__label">{topTitle}</p>
        </div>
        <input  className = "input slider__input" type="range" min={min} max={max} value={difficulty} onChange = {handleInput}  id="myRange"/>
        <h4>The lift felt: {newlevel}</h4>
    </div>
    );
}
 
export default LevelSlider 