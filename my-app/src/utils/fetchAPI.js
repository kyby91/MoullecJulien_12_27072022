import  { useEffect, useState } from "react";

// export function FetchAPIDATA(userId){

//     const [ data , setData ] = useState({})
//     const [ dataLoad , setDataLoad ] = useState(false)

//     useEffect(() => {

//         fetch(`http://localhost:3000/user/${userId}`)
//         .then((data) => {
//            return data.json()
//         })
//         .then((data) => {
//             // console.log(data)
//             setData(data.data)
//             setDataLoad(true)
//         })

//     }, [])

//     if(dataLoad){
//         return data;
//     }

// }

function useFetch(url) {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(res => {
      setData(res)
      setIsLoading(false);
    })
    .catch(err => setError(err));
    },[url]);

    return { data, error, isLoading };
}
    

export default useFetch;