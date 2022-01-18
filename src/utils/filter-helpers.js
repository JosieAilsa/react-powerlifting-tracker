export const findWeightRange = (input) => {
  const toInteger = parseInt(input);
  if (toInteger > 180) {
    return ">180";
  } else if (toInteger > 161 && toInteger <= 180) {
    return "161-180";
  } else if (toInteger > 121 && toInteger <= 140) {
    return "121-140";
  } else if (toInteger > 101 && toInteger <= 120) {
    return "121-140";
  } else if (toInteger > 81 && toInteger <= 100) {
    return "81-100";
  } else if (toInteger > 61 && toInteger <= 80) {
    return "61-80";
  } else if (toInteger > 41 && toInteger <= 60) {
    return "41-60";
  } else if (toInteger > 21 && toInteger <= 40) {
    return "21-40";
  } else if (toInteger < 21 && toInteger <= 40) {
    return "0-20";
  }
};

export const checkIfLiftSelect = (arr, item) => {
  const currentCheck = arr.find((element) => element.item);
  const indexValue = arr.indexOf(currentCheck);
  if (indexValue > -1) {
    return indexValue;
  } else {
    return false;
  }
};

export const checkIsDefaultFilter = (curr, def) => {
  if (!(Array.isArray(curr) && Array.isArray(def))) {
    throw new Error("No valid array provided");
  }
  // Check if the current filter is the default
  const isDefault = curr.every((item, index) => {
    const keyValues = Object.keys(item);
    const isMatch = keyValues.every((key) => item[key] === def[index][key]);
    if (isMatch) {
      //return true if the two arrays are the same
      return true;
    }
  });
  return isDefault;
};

export const changeAllFilters = (array, key, value) => {
  const newArr = array.map((item) => {
    item[key] = value;
    return item;
  });
  return newArr;
};


export const filterDefault = [
  {
    liftType: "Deadlift",
    isChecked: false,
    weight: "",
    difficulty: "",
    level: "",
  },
  {
    liftType: "Squat",
    isChecked: false,
    weight: "",
    difficulty: "",
    level: "",
  },
  {
    liftType: "Overhead press",
    isChecked: false,
    weight: "",
    difficulty: "",
    level: "",
  },
  {
    liftType: "Bent-over row",
    isChecked: false,
    weight: "",
    difficulty: "",
    level: "",
  },
  {
    liftType: "Bench press",
    isChecked: false,
    weight: "",
    difficulty: "",
    level: "",
  },
];
export const weightRange = [
  "0-20",
  "21-40",
  "41-60",
  "61-80",
  "81-100",
  "101-120",
  "121-140",
  "161-180",
  ">180",
];

export const filtersJSX = filterDefault.map((filterItem, i) => {
  return (
    <option
      id={i}
      className="lift-filter__option"
      value={`${filterItem.liftType}`}
    >
      {filterItem.liftType}
    </option>
  );
});

export const weightRangeJSX = weightRange.map((weightRangeItem, i) => {
  return (
    <option
      id={i}
      className="weight-filter__option"
      value={`${weightRangeItem}`}
    >
      {weightRangeItem} KGs
    </option>
  );
});


