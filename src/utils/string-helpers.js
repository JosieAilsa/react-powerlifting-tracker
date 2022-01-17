import squat from "../assets/images/icons/lifticon-03.svg";
import overHeadPress from "../assets/images/icons/lifticon-01.svg";
import benchPress from "../assets/images/icons/lifticon-04.svg";
import bentOverRow from "../assets/images/icons/lifticon-02.svg";
import deadlift from "../assets/images/icons/lifticon-05.svg";

export const showDifficulty = (difficulty) => {
  const toInteger = parseInt(difficulty);
  if (isNaN(toInteger)) {
    return undefined;
  }
  if (toInteger >= 90) {
    return "very hard";
  } else if (toInteger < 90 && toInteger >= 60) {
    return "hard";
  } else if (toInteger < 60 && toInteger >= 30) {
    return "moderate";
  } else if (toInteger < 30 && toInteger > 10) {
    return "easy";
  }
  return "very easy";
};

export const getImage = (liftType) => {
  const lift = liftType.toLowerCase();
  if (lift === "squat") {
    return squat;
  } else if (lift === "overhead press") {
    return overHeadPress;
  } else if (lift === "bench press") {
    return benchPress;
  } else if (lift === "bent-over row") {
    return bentOverRow;
  }
  return deadlift;
};
