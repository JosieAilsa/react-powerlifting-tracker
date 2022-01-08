import changeAllFilters from "./filter-helper-change-all";


describe("Change all filter values", () => {
    let filterA;
    let filterB;
    beforeEach (() => {
        filterA = [
          {liftType: "Deadlift", isChecked: false, weight: "", difficulty: "", level: ""},
          {liftType: "Squat", isChecked: false, weight: "", difficulty: "", level: ""},
          {liftType: "Overhead press", isChecked: false, weight: "", difficulty: "", level: ""},
          {liftType: "Bent-over row", isChecked: false,weight: "", difficulty: "", level: ""},
          {liftType: "Bench press", isChecked: false, weight: "", difficulty: "", level: ""}
        ]
        filterB= [
            {liftType: "Deadlift", isChecked: false, weight: "", difficulty: "100", level: ""},
            {liftType: "Squat", isChecked: false, weight: "", difficulty: "100", level: ""},
            {liftType: "Overhead press", isChecked: false, weight: "", difficulty: "100", level: ""},
            {liftType: "Bent-over row", isChecked: false,weight: "", difficulty: "100", level: ""},
            {liftType: "Bench press", isChecked: false, weight: "", difficulty: "100", level: ""}
          ]
      })
  
    it("Should change the filter with the specified key to be the value", () => {
        //Arrange 
        const alteredFilters = changeAllFilters(filterA,"difficulty","100")
        expect(alteredFilters).toMatchObject(filterB)
    })
    it("Should change the filter with the specified key to an empty string", () => {
        //Arrange 
        const alteredFilters = changeAllFilters(filterB,"difficulty","")
        expect(alteredFilters).toMatchObject(filterA)
    })
    
})

