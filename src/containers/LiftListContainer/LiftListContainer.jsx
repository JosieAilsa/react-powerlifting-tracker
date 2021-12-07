import { useState } from "react/cjs/react.development";
import "./LiftListContainer.scss"
import Card from "../../components/Card/Card"
const LiftListContainer = ({allLiftsLogged}) => {
    const allLiftsLoggedJSX =  allLiftsLogged.map(lift => {        
     return (<>
        <Card liftType= {lift.liftType} weight = {lift.weight} difficulty = {lift.difficulty} date = {lift.date}/>
        </>)
    });
 return (
    <>
    <div className = "card-container">
    {allLiftsLoggedJSX}
    </div> 
    </>
 )
 }
export default LiftListContainer;