export const changeAllFilters = (array, key, value) => {
    const newArr = array.map(item => {
        item[key] = value 
        return item;
    })
    return newArr;
}
 export default changeAllFilters;