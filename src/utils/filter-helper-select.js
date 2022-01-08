const checkIfLiftSelect = (arr, item) => {
    const currentCheck = arr.find(element => element.item)
    const indexValue = arr.indexOf(currentCheck); 
    if (indexValue > -1) {
        return indexValue
    } else {
        return false;
    }
}
export default checkIfLiftSelect;