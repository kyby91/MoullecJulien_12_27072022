import  { useEffect, useState } from "react";

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