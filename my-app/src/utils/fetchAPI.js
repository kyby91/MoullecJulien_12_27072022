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

function FetchAPI(url) {

  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(res => {
      setData(res.data)
    })
    },[url]);

    return data;
}
    

export default FetchAPI;