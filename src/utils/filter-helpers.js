
  const checkIsDefaultFilter = (curr, def) => {
    const keys = Object.keys(def)
    // Check if the current filter is the default 
   const isDefault = curr.every(item =>{
       keys.every(key => item[key] === def[key])
    });
    return isDefault
    }
