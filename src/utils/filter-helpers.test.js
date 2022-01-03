import { flushSync } from "react-dom"
import checkIsDefaultFilter from"./filter-helpers"
const filterA = [
    {liftType: "Deadlift", isChecked: false, weight: "", difficulty: "", level: ""},
    {liftType: "Squat", isChecked: false, weight: "", difficulty: "", level: ""},
    {liftType: "Overhead press", isChecked: false, weight: "", difficulty: "", level: ""},
    {liftType: "Bent-over row", isChecked: false,weight: "", difficulty: "", level: ""},
    {liftType: "Bench press", isChecked: false, weight: "", difficulty: "", level: ""}
  ]

  const filterB = [
    {liftType: "Deadlift", isChecked: false, weight: "", difficulty: "", level: ""},
    {liftType: "Squat", isChecked: false, weight: "", difficulty: "", level: ""},
    {liftType: "Overhead press", isChecked: false, weight: "", difficulty: "", level: ""},
    {liftType: "Bent-over row", isChecked: false,weight: "", difficulty: "", level: ""},
    {liftType: "Bench press", isChecked: false, weight: "", difficulty: "", level: ""}
  ]



describe("Should return true if two arrays objects for the filters are the same", () =>{
    //Arrange 
    const filterCheck = checkIsDefaultFilter(filterA,filterB)
    //Assert 
    expect(filterCheck).toBe(true);
})