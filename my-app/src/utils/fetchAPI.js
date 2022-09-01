import React, { useEffect, useState } from "react";

export function FetchAPIDATA(userId){

    const [ data , setData ] = useState({})
    const [ dataLoad , setDataLoad ] = useState(false)

    useEffect(() => {

        fetch(`http://localhost:3000/user/${userId}`)
        .then((data) => {
           return data.json()
        })
        .then((data) => {
            // console.log(data)
            setData(data.data)
            setDataLoad(true)
        })

    }, [])

    if(dataLoad){
        return data;
    }

}