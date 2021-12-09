import {useState, useEffect} from 'react';
import MainTitle from "../MainTitle/MainTitle";
import LiftForm from '../LifForm/LiftForm';
import Nav from '../Nav/Nav' 
import LiftListContainer from '../../containers/LiftListContainer/LiftListContainer';



const Home = () => {
    const filterDefault = [
        {type: "Deadlift", isChecked: false},
        {type: "Squat", isChecked: false},
        {type:  "Overhead press", isChecked: false},
        {type: "Bent-over row", isChecked: false},
        {type: "Bench press", isChecked: false}
    ]

    const [currentLift, setCurrentLift] = useState({});
    const [allLiftsLogged, setAllLoggedLifts] = useState([]);
    // const [showNavMenu, setNavmenu] = useState(false);
    const [showLiftList, setLiftList] = useState(false);
    const [showForm, setShowForm] = useState(true)
    const [filters, setFilters] = useState(filterDefault);  


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
    //How can I add function in as params to make these into one function 

    const toggleShowForm = () => {
        setShowForm(!showForm)
        setLiftList(!showLiftList) 
    }

        return ( 
        <>
        <Nav toggleLiftList = {toggleLiftList} toggleShowForm = {toggleShowForm}/>
        {showForm && <LiftForm handleLiftSelect  = {handleLiftSelect} handleWeightInput = {handleWeightInput} handleDifficultyInput= {handleDifficultyInput} handleClick = {handleClick}/>}
        {showLiftList && < LiftListContainer allLiftsLogged = {allLiftsLogged} filters = {filters}/>}
        </>
    );
}
 
export default Home;