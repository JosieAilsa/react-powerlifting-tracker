import MainTitle from "../MainTitle/MainTitle";
import SelectLift from "../SelectLift/SelectLift";
import WeightInput from "../WeightInput/WeightInput";
import LevelSlider from '../LevelSlider/LevelSlider';
import Button from "../Button/Button"
import "./LiftForm.scss"

const LiftForm = ({handleLiftSelect, handleWeightInput, handleDifficultyInput, handleClick}) => {
const liftsArr = ["Deadlift", "Squat", "Overhead press", "Bent-over row", "Bench press"]



    return ( 
        <>
        <form className = "form">
        <SelectLift liftsArr = {liftsArr} handleLiftSelect  = {handleLiftSelect}/>
        <WeightInput handleWeightInput = {handleWeightInput}/>
        <LevelSlider handleDifficultyInput= {handleDifficultyInput}/>
        <Button type= "reset" handleClick = {handleClick} title = {"Add next lift"}/>
        </form>
        </>
     );
}
 
export default LiftForm;