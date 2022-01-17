import { useState, useEffect } from "react";

const useFetch = (url) => {
    //State to check if we have the data retrieved from API or not
    const [allLifts, setAllLifts] = useState (null)
    //State to tell us if the fetch is pending in order to show loading 
    const [isPending, setIsPending] = useState(true)
    //State to check if there is an error 
    const [isError, setIsError]= useState(null)

        useEffect(() => {
            fetch(url)
                .then(res => {
                    if(!res.ok) {
                        throw Error ("Could not fetch")
                    }
                    return res.json()
                })
                    .then((data) => {
                        console.log(data)
                        setAllLifts(data)
                        setIsError(null)
                        setIsPending(false)
                    })
                    .catch(err => {
                        setIsPending(false)
                        setIsError(err.message)
                    })
            }, [url])
   
    return {allLifts,isPending,isError}
}
 
export default useFetch;