import MainTitle from "../../components/MainTitle/MainTitle";
import SelectLift from "../../components/SelectLift/SelectLift";
import WeightInput from "../../components/WeightInput/WeightInput";
import LevelSlider from '../../components/LevelSlider/LevelSlider';
import Button from "../../components/Button/Button"
import "./LiftForm.scss"

const LiftForm = ({handleLiftSelect, handleWeightInput, handleDifficultyInput, handleClick}) => {
const liftsArr = ["Deadlift", "Squat", "Overhead press", "Bent-over row", "Bench press"]





    return ( 
        <>
         <form className = "form">
         <MainTitle title = "Record Lift" />
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