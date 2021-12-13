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
         <MainTitle title = "Record Lift" />
        <form className = "form">
        <SelectLift liftsArr = {liftsArr} handleLiftSelect  = {handleLiftSelect}/>
        <WeightInput handleWeightInput = {handleWeightInput}/>
        <div class="difficulty">
        <h4 className = "difficulty__title">How did it feel?</h4>
        <LevelSlider handleDifficultyInput= {handleDifficultyInput}/>
        </div>
        <Button type= "reset" handleClick = {handleClick} title = {"Add next lift"}/>
        </form>
        </>
     );
}
 
export default LiftForm;