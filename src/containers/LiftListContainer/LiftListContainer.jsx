import { useState } from "react/cjs/react.development";
import "./LiftListContainer.scss"
import Card from "../../components/Card/Card"
import FilterContainer from "../FilterContainer/FilterContainer";

const LiftListContainer = ({allLiftsLogged, filters}) => {
   const [liftsToShow, updateLiftsToShow] = useState(allLiftsLogged)
    const allLiftsLoggedJSX =  liftsToShow.map(lift => {       
     return (<>
        <Card liftType= {lift.liftType} weight = {lift.weight} difficulty = {lift.difficulty} date = {lift.date}/>
        </>)
    });
// const handeClick = () => {

// }

 return (
    <>
    <FilterContainer filters = {filters} />
    <div className = "card-container">
    {allLiftsLoggedJSX}
    </div> 
    </>
 )
 }
export default LiftListContainer;