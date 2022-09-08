import Hello from '../components/hello.jsx'
import { useParams } from 'react-router-dom'
import Thumbnail from '../components/thumbnail.jsx'
import Weight from "../components/weight.jsx";
import Radar from '../components/radar.jsx'
import Line from '../components/line.jsx'
import Pie from '../components/pie.jsx'
import { useState } from 'react';
import { useEffect } from 'react';

import { FetchAPIDATA } from '../utils/fetchAPI.js';
import FetchAPI from "../utils/fetchAPI";

const Datas = require('../data/data.js')
// const user = data.USER_MAIN_DATA


function Home(){
    

    const {userId} = useParams()



    const DataMockOrAPI = false;

    // if(!DataMockOrAPI){
        // const {data : userInfo } = useFetch(`http://localhost:3000/user/${userId}`)
        // const {data : average} = useFetch(`http://localhost:3000/user/${userId}/average-sessions`)
        // const {data : activity} = useFetch(`http://localhost:3000/user/${userId}/activity`)
        // const {data : performance} = useFetch(`http://localhost:3000/user/${userId}/performance`)
    // }

    let loading = false;

    const userInfo = DataMockOrAPI ? Datas.USER_MAIN_DATA.find(elt => elt.id === parseInt(userId)) : FetchAPI(`http://localhost:3000/user/${userId}`) 
    const userActivity = DataMockOrAPI ? Datas.USER_ACTIVITY.find(elt => elt.userId === parseInt(userId)) : FetchAPI(`http://localhost:3000/user/${userId}/activity`)
    const time = DataMockOrAPI ? Datas.USER_AVERAGE_SESSIONS.find(elt => elt.userId === parseInt(userId)) : FetchAPI(`http://localhost:3000/user/${userId}/average-sessions`)
    const radar = DataMockOrAPI ? Datas.USER_PERFORMANCE.find(elt => elt.userId === parseInt(userId)) : FetchAPI(`http://localhost:3000/user/${userId}/performance`)
   
    console.log(userActivity )


    if(userInfo && userActivity && time && radar){
        loading = true;
    }
       
    
    if(!loading){
        return(
            <div className='home'>
                 <h1>Loading...</h1>
            </div> 
        )
        
        }else{
            return(
                <div className='home'>
                    <Hello name={userInfo.userInfos.firstName}/>
                    <div className='info-holder'>
                        <div className='graphics-holder'>
                            <Weight data={userActivity.sessions}/>
                            <Line data={time.sessions}/>
                            <Radar data={radar}/>
                            <Pie data={userInfo.todayScore ? userInfo.todayScore : userInfo.score}/>
                            
                            
                        </div>
                        <div className='numbers-holder'>
                            <Thumbnail data={userInfo.keyData.calorieCount} type="Calories" unity="kCal"/>
                            <Thumbnail data={userInfo.keyData.proteinCount} type="Proteines" unity="g" icon="proteine"/> 
                            <Thumbnail data={userInfo.keyData.carbohydrateCount} type="Glucides" unity="g" icon="proteine"/> 
                            <Thumbnail data={userInfo.keyData.lipidCount} type="Lipides" unity="g" icon="proteine"/>
                        </div>
                    </div>
                </div>
            )
        }

    
}

export default Home;