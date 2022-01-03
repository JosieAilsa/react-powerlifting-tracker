import "./SelectLift.scss"
import { useState } from "react"
import { useEffect } from "react/cjs/react.development"
const SelectLift = ({liftsArr, handleLiftSelect}) => {

    const [value, setValue] = useState(null)


const getLiftRadio = liftsArr.map((lift, i) => {
    return (
        <div>
            <input type="radio" id={lift + i} className = "input__radio" name="lift" /*value={value}*/ value = {lift} onClick = {(e) => {handleLiftSelect(e)}}/>
            <label for ={lift}>{lift}</label>
        </div>
    )
})
return ( 
    <div className="lift">
        <h4 className = "lift__title">Lift Type</h4>
        <div className ="lift__list">{getLiftRadio}</div>
    </div>
     );
}
 
export default SelectLift;