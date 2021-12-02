import "./SelectLift.scss"
import {useState} from 'react';

const SelectLift = ({weeklyData, handleLiftSelect,}) => {


const getLiftRadio = weeklyData.map((lift) => {
    return (
        <div>
            <input type="radio" id={lift.lift} name="lift" value={lift.lift} onClick = {(e) => {handleLiftSelect(e)}}/>
            <label for ={lift.lift}>{lift.lift}</label>
        </div>
    )
})




    return ( 
    <div className="lift">
        <h4 className = "lift__title">Lift Type</h4>
        <div>{getLiftRadio}</div>
    </div>
     );
}
 
export default SelectLift;