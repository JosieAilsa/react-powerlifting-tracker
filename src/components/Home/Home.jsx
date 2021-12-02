import {useState} from 'react';
import MainTitle from "../MainTitle/MainTitle";
import startWeek from "../../data/data.js"
import LiftForm from '../LifForm/LiftForm';
import LevelSlider from '../LevelSlider/LevelSlider';
import Button from '../Button/Button';

const Home = () => {
    const [weeklyData,setWeeklyRecord] = useState(startWeek);

    const handleLiftSelect = (e) => {
        const currentLift  = e.target.value;
        console.log(currentLift)
        const weeklyArrCopy = [...weeklyData]
        const selectLift = weeklyArrCopy.map((lift) => {
            if(lift.lift === currentLift) {
            lift.hasCompleted = true; 
            return lift
            } 
            return lift 
            })  
        setWeeklyRecord(selectLift)
    }

    // const handleWeightInput = () => {
    //     const currentWeight = e.target.value; 
    //     console.log(currentWeight)
    // }


    return ( 
        <>
        <MainTitle/>
        <LiftForm weeklyData = {weeklyData} handleLiftSelect  = {handleLiftSelect}/>
        <LevelSlider/>
        <Button/>
        </>
    );
}
 
export default Home;