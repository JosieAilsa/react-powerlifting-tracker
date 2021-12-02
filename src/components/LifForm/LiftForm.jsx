import MainTitle from "../MainTitle/MainTitle";
import SelectLift from "../SelectLift/SelectLift";
import WeightInput from "../WeightInput/WeightInput";
import "./LiftForm.scss"

const LiftForm = ({weeklyData, handleLiftSelect }) => {
//    const  [deadlift,squat,benchPress, overheadPress, bentOverRow] = weeklyData;

    return ( 
        <>
        <SelectLift weeklyData = {weeklyData} handleLiftSelect  = {handleLiftSelect}/>
        <WeightInput/>
        </>
     );
}
 
export default LiftForm;