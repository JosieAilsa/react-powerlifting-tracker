import checkIsDefaultFilter from "./filter-helper-default"

describe("Filter test functions", () => {
  let filterA; 
  let filterB; 
  let filterC;

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
      {liftType: "Bench press", isChecked: false, weight: "", difficulty: "", level: ""}
    ]
  
    filterC = [
      {liftType: "Deadlift", isChecked: false, weight: "", difficulty: "", level: ""},
      {liftType: "Squat", isChecked: false, weight: "", difficulty: "", level: ""},
      {liftType: "Overhead press", isChecked: false, weight: "", difficulty: "", level: ""},
      {liftType: "Bent-over row", isChecked: false,weight: "", difficulty: "", level: ""},
      {liftType: "Bench press", isChecked: true, weight: "", difficulty: "34", level: ""}
    ]
  
  })
  it("Should return true if two arrays are the same", () => {
    //Arrange 
    const filterCheck = checkIsDefaultFilter(filterA,filterB)
    //Assert 
    expect(filterCheck).toBe(true);
  })
  it("Should return false if arrays are not the same" , () => {
  //Arrange 
  const filterCheck = checkIsDefaultFilter(filterA,filterC)
  //Assert 
  expect(filterCheck).toBe(false);
  })
  it("Should throw an error arrays if both params are not arrays" , () => {
    expect(() =>checkIsDefaultFilter(filterA, "not an array")).toThrowError(`No valid array provided`);
  })
})

