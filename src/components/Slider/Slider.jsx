import { useEffect, useState } from "react";
import showDifficulty from "../../utils/string-helpers";
import "./Slider.scss"
const Slider = ({eventHandle,className, bottomTitle, topTitle, diffculty}) => {
 const [newLevel,setLevel] = useState("moderate");

    const handInputUpdateComponentState = (e) => {
        const currentDifficulty = e.target.value;
        eventHandle(currentDifficulty)
        const getNewLevel = showDifficulty(currentDifficulty)
        setLevel(getNewLevel)
    }

    useEffect(() => {
    console.log(newLevel)
        const sliderDOM = document.querySelector(".slider")
        if (newLevel === "very easy") {
            sliderDOM.classList.add("slider--very-easy")
            sliderDOM.classList.remove("slider--moderate")
            sliderDOM.classList.remove("slider--easy")
            sliderDOM.classList.remove("slider--hard")
            sliderDOM.classList.remove("slider--very-hard")
        } else if (newLevel === "easy") {
            sliderDOM.classList.add("slider--easy")
            sliderDOM.classList.remove("slider--moderate")
            sliderDOM.classList.remove("slider--very-easy")
            sliderDOM.classList.remove("slider--hard")
            sliderDOM.classList.remove("slider--very-hard")
        } else if (newLevel === "moderate") {
                sliderDOM.classList.add("slider--moderate")
                sliderDOM.classList.remove("slider--easy")
                sliderDOM.classList.remove("slider--very-easy")
                sliderDOM.classList.remove("slider--hard")
                sliderDOM.classList.remove("slider--very-hard")
        } else if (newLevel === "hard") {
            sliderDOM.classList.add("slider--hard")
            sliderDOM.classList.remove("slider--moderate")
            sliderDOM.classList.remove("slider--very-easy")
            sliderDOM.classList.remove("slider--easy")
            sliderDOM.classList.remove("slider--very-hard")
        }
        else if (newLevel === "very hard") {
            sliderDOM.classList.add("slider--very-hard")
            sliderDOM.classList.remove("slider--moderate")
            sliderDOM.classList.remove("slider--very-easy")
            sliderDOM.classList.remove("slider--hard")
            sliderDOM.classList.remove("slider--easy")
        }
    },[newLevel]) 

    return (<>
      <div class = "slider-labels">
            <p class = "slider-label">{bottomTitle}</p>
            <p class = "slider-label">{topTitle}</p>
    </div>
      <input className = {`slider ${className}`} value = {diffculty }type="range" min="1" max="100" onChange = {handInputUpdateComponentState}/>
      <p>{newLevel}</p>
    </>);
}
 
export default Slider;