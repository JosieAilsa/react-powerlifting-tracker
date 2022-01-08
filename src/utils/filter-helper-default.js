export const checkIsDefaultFilter = (curr, def) => {
    if (!(Array.isArray(curr) && Array.isArray(def))){
      throw new Error ("No valid array provided")
    }
    // Check if the current filter is the default 
   const isDefault = curr.every((item, index) =>{
        const keyValues = Object.keys(item)
        const isMatch = keyValues.every(key => item[key] === def[index][key])
        if(isMatch) {
            //return true if the two arrays are the same
            return true
        }   
        });
    return isDefault;
    } 

export default checkIsDefaultFilter;