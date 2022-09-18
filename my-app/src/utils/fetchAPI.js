import  { useEffect, useState } from "react";

/**
 * Hook to fetch the data from backend
 * @param {*} url each url give different data from the user
 * @returns the data
 */

//hook function with useEffect and useState
function FetchAPI(url) {

  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(response => {
      setData(response.data)
    })
    },[url]);

    return data;
}
    

export default FetchAPI;