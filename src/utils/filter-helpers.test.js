import {checkIsDefaultFilter, changeAllFilters} from "./filter-helpers"

describe("Filter test functions", () => {
  let filterA; 
  let filterB; 
  let filterC;
  let filterD;

  beforeEach (() => {
    filterA = [
      {liftType: "Deadlift", isChecked: false, weight: "", difficulty: "", level: ""},
      {liftType: "Squat", isChecked: false, weight: "", difficulty: "", level: ""},
      {liftType: "Overhead press", isChecked: false, weight: "", difficulty: "", level: ""},
      {liftType: "Bent-over row", isChecked: false,weight: "", difficulty: "", level: ""},
      {liftType: "Bench press", isChecked: false, weight: "", difficulty: "", level: ""}
    ]
  
    filterB = [
      {liftType: "Deadlift", isChecked: false, weight: "", difficulty: "", level: ""},
      {liftType: "Squat", isChecked: false, weight: "", difficulty: "", level: ""},
      {liftType: "Overhead press", isChecked: false, weight: "", difficulty: "", level: ""},
      {liftType: "Bent-over row", isChecked: false,weight: "", difficulty: "", level: ""},
      {liftType: "Bench press", isChecked: true, weight: "", difficulty: "34", level: ""}
    ]

    filterC = [
        {liftType: "Deadlift", isChecked: false, weight: "", difficulty: "100", level: ""},
        {liftType: "Squat", isChecked: false, weight: "", difficulty: "100", level: ""},
        {liftType: "Overhead press", isChecked: false, weight: "", difficulty: "100", level: ""},
        {liftType: "Bent-over row", isChecked: false,weight: "", difficulty: "100", level: ""},
        {liftType: "Bench press", isChecked: false, weight: "", difficulty: "100", level: ""}
      ]

      filterD = [
        {liftType: "Deadlift", isChecked: false, weight: "21-40kg", difficulty: "", level: ""},
        {liftType: "Squat", isChecked: false, weight: "21-40kg", difficulty: "", level: ""},
        {liftType: "Overhead press", isChecked: false, weight: "21-40kg", difficulty: "", level: ""},
        {liftType: "Bent-over row", isChecked: false,weight: "21-40kg", difficulty: "", level: ""},
        {liftType: "Bench press", isChecked: false, weight: "21-40kg", difficulty: "", level: ""}
      ]   
  })

  describe("Test for checkIsFilterDefault", () => { 
    it("Should return true if two arrays are the same", () => {
        //Act
        const filterCheck = checkIsDefaultFilter(filterA,filterA)
        //Assert 
        expect(filterCheck).toBe(true);
    })
    it("Should return false if arrays are not the same" , () => {
        //Act
        const filterCheck = checkIsDefaultFilter(filterA,filterC)
        //Assert 
        expect(filterCheck).toBe(false);
    })
    it("Should throw an error arrays if both params are not arrays" , () => {
        expect(() =>checkIsDefaultFilter(filterA, "not an array")).toThrowError(`No valid array provided`);
    })
    })

describe("Check changeAllFilters", () => { 
    it("Should change the filter with the specified key to be the value", () => {
        //Act
        const alteredFilters = changeAllFilters(filterA,"difficulty","100")
        expect(alteredFilters).toMatchObject(filterC)
    })
    it("Should change the filter with the specified key to an empty string", () => {
        //Act
        const alteredFilters = changeAllFilters(filterC,"difficulty","")
        expect(alteredFilters).toMatchObject(filterA)
    })

    it("Should change the filter so that all weights have 21-40kg", () => {
        //Act
        const alteredFilters = changeAllFilters(filterA,"weight","21-40kg")
        expect(alteredFilters).toMatchObject(filterD)
    })
   
    
})
})

