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
import useFetch from "../utils/fetchAPI";

const Datas = require('../data/data.js')
// const user = data.USER_MAIN_DATA


function Home(){
    

    const {userId} = useParams()



    const DataMockOrAPI = false;

    const { data : info } = useFetch(`http://localhost:3000/user/${userId}`)
    const { data : average } = useFetch(`http://localhost:3000/user/${userId}/average-sessions`)
    const {data : activity} = useFetch(`http://localhost:3000/user/${userId}/activity`)
    const {data : performance} = useFetch(`http://localhost:3000/user/${userId}/performance`)
 
    // const userInfo = DataMockOrAPI ? Datas.USER_MAIN_DATA.find(elt => elt.id === parseInt(userId)) : FetchAPIDATA(userId);
    // const userInfo = false
    const userInfo = Datas.USER_MAIN_DATA.find(elt => elt.id === parseInt(userId))

    if(!userInfo){
        return(
            <div className='home'>
                 <h1>Loading...</h1>
            </div> 
        )
    }

    
    

    const userActivity = Datas.USER_ACTIVITY.find(elt => elt.userId === parseInt(userId))

    const sessions = userActivity.sessions
    const time = Datas.USER_AVERAGE_SESSIONS.find(elt => elt.userId === parseInt(userId)).sessions
    
    const radar = Datas.USER_PERFORMANCE.find(elt => elt.userId === parseInt(userId))
    const pieAllData = Datas.USER_MAIN_DATA.find(elt => elt.id === parseInt(userId))
    const pie = pieAllData.todayScore ? pieAllData.todayScore : pieAllData.score
    


    return(
        <div className='home'>
            {info && <Hello name={info.data.userInfos.firstName}/>}
            <div className='info-holder'>
                <div className='graphics-holder'>
                    {activity && <Weight data={activity.data.sessions}/>}
                    {average && <Line data={average.data.sessions}/>}
                    {performance && <Radar data={performance.data}/>}
                    {info && <Pie data={info.data.todayScore ? pieAllData.todayScore : pieAllData.score}/>}
                    
                    
                </div>
                <div className='numbers-holder'>
                    {info && <Thumbnail data={info.data.keyData.calorieCount} type="Calories" unity="kCal"/> }
                    {info && <Thumbnail data={info.data.keyData.proteinCount} type="Proteines" unity="g" icon="proteine"/> }
                    {info && <Thumbnail data={info.data.keyData.carbohydrateCount} type="Glucides" unity="g" icon="proteine"/> }
                    {info && <Thumbnail data={info.data.keyData.lipidCount} type="Lipides" unity="g" icon="proteine"/> }
                </div>
            </div>
        </div>
    )
}

export default Home;