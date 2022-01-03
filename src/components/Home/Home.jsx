import {useState, useEffect} from 'react';
import MainTitle from "../MainTitle/MainTitle";
import LiftForm from '../../containers/LifForm/LiftForm';
import Nav from '../Nav/Nav' 
import LiftListContainer from '../../containers/LiftListContainer/LiftListContainer';
import { Routes, Route } from 'react-router-dom';
import showDifficulty from "../../utils/string-helpers"


const Home = () => {

    const [newlevel, setLevel] = useState("moderate")
    const [currentLift, setCurrentLift] = useState({});
    const [allLiftsLogged, setAllLoggedLifts] = useState([]);
    const [showLiftList, setLiftList] = useState(false);
    const [showForm, setShowForm] = useState(true);

    const handleLiftSelect = (e) => {
        console.log("event fires")
        // console.log(e)
        const currentLift  = e.target.value;
        const currentDate = new Date().toLocaleString().split(',')[0]
        let newLift = {
            liftType: currentLift,
            weight: 0,
            difficulty: 0,
            date: currentDate,
        }
        setCurrentLift(newLift)
    }

    const handleWeightInput = (e) => {
        const kgInput = e.target.value;
        const updatedLift = {...currentLift}
        parseFloat(updatedLift)
        updatedLift.weight = kgInput
        console.log(updatedLift)
        setCurrentLift(updatedLift)
    }

    const handleDifficultyInput = (e) => {
        const difficulty = e;
        const updatedLift = {...currentLift}
        updatedLift.difficulty = difficulty
        updatedLift.level = showDifficulty(difficulty)
        console.log(updatedLift)
        setCurrentLift(updatedLift)

    }

    const handleClick = (e) => {     
        const updatedLift = {...currentLift}
        const updateLiftsLogged = [...allLiftsLogged]
        updateLiftsLogged.push(updatedLift)
        console.log(updateLiftsLogged)
        setAllLoggedLifts(updateLiftsLogged)
        console.log(e)
      
    }
    
    useEffect(() => {
        console.log("Use effect ran")
    },[allLiftsLogged]);


    const toggleLiftList = () => {
        setLiftList(!showLiftList) 
        setShowForm(!showForm)
    }
    const toggleShowForm = () => {
        setShowForm(!showForm)
        setLiftList(!showLiftList) 
    }


        return ( 
        <>
        <Nav toggleLiftList = {toggleLiftList} toggleShowForm = {toggleShowForm}/>
            <Routes>
            <Route path = "/addLift" 
                element = {showForm && <LiftForm handleLiftSelect  = {handleLiftSelect} handleWeightInput = {handleWeightInput} handleDifficultyInput= {handleDifficultyInput} handleClick = {handleClick}/>}
            />
            <Route path = "/showLifts"
                element =  {showLiftList && < LiftListContainer allLiftsLogged = {allLiftsLogged} />}
            />
        </Routes>
        </>
    );
}
 
export default Home;