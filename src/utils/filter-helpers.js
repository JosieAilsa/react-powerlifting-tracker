
export const findWeightRange = (input) => {
  const toInteger= parseInt(input);
  if (toInteger> 180) {
    return ">180"
  } else if (toInteger > 161 && toInteger <= 180) {
    return "161-180"
  } else if (toInteger > 121 && toInteger <= 140) {
    return "121-140"
  } else if (toInteger > 101 && toInteger <= 120) {
    return "121-140"
  } else if (toInteger >81 && toInteger <= 100) {
    return  "81-100"
  } else if (toInteger > 61 && toInteger <= 80) {
    return  "61-80" 
  } else if (toInteger > 41 && toInteger <= 60) {
  return "41-60"
  } else if (toInteger > 21 && toInteger <= 40) {
    return "21-40"
  } else if (toInteger< 21 && toInteger  <= 40) {
    return "0-20"
  }
};
export default findWeightRange;