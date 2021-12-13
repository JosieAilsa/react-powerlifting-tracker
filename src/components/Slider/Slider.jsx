import { useEffect, useState } from "react";
import showDifficulty from "../../utils/string-helpers";
import "./Slider.scss"
const Slider = ({handleDifficultyInput, className, bottomTitle, topTitle }) => {
    const[difficulty,setDifficulty] = useState("")
    const [newLevel, setLevel] = useState("moderate")
   
    const handleInput = (e) => {
        const currentDifficulty = e.target.value
        setDifficulty(currentDifficulty)
        handleDifficultyInput(currentDifficulty)
        const currentStringDifficulty = showDifficulty(currentDifficulty)
        setLevel(currentStringDifficulty)
    }

    useEffect(() => {
        const sliderDOM = document.querySelector(".slider")
        console.log("fired")
        if(newLevel ==="moderate") {
            console.log("moderate")
            sliderDOM.classList.add("slider--moderate")
            sliderDOM.classList.remove("slider--easy")
            sliderDOM.classList.remove("slider--very-easy")
            sliderDOM.classList.remove("slider--hard")
            sliderDOM.classList.remove("slider--very-hard")
        } else if (newLevel === "easy") {
            sliderDOM.classList.add("slider--easy")
            sliderDOM.classList.remove("slider--moderate")
            sliderDOM.classList.remove("slider--very-easy")
            sliderDOM.classList.remove("slider--hard")
            sliderDOM.classList.remove("slider--very-hard")
        }
        else if (newLevel === "easy") {
            sliderDOM.classList.add("slider--easy")
            sliderDOM.classList.remove("slider--moderate")
            sliderDOM.classList.remove("slider--very-easy")
            sliderDOM.classList.remove("slider--hard")
            sliderDOM.classList.remove("slider--very-hard")
        }
    
    
    }, difficulty) 

    return (<>
      <div class = "slider-labels">
            <p class = "slider-label">{bottomTitle}</p>
            <p class = "slider-label">{topTitle}</p>
    </div>
      <input className = {`slider ${className} slider--moderate`} type="range" min="1" max="100" onChange = {handleInput}/>
    </>);
}
 
export default Slider;