import Hello from './components/hello.jsx'
import { useParams } from 'react-router-dom'
import Thumbnail from './components/thumbnail.jsx'
import Weight from "./components/weight.jsx";
import Radar from './components/radar.jsx'
import Line from './components/line.jsx'
import Pie from './components/pie.jsx'
import { useState } from 'react';
import { useEffect } from 'react';

import { FetchAPIDATA } from './utils/fetchAPI.js';

const Datas = require('./data/data.js')
// const user = data.USER_MAIN_DATA


function Home(){
    
    // const [userInfo2 , setUserInfo2] = useState({})

    const {userId} = useParams()

    // useEffect(()=>{
    //     const dataTest = Datas.USER_MAIN_DATA.find(elt => elt.id === parseInt(userId)) ;
    //     // console.log(userInfo2, dataTest)
    //     setUserInfo2(dataTest)
    //     console.log(userInfo2)
    // }, [userId, userInfo2 , setUserInfo2]);

    

    const DataMockOrAPI = false;


    // fetch("http://localhost:3000/user/18")
    // .then((data) => {
    //    return data.json()
    // })
    // .then((data) => {
    //     console.log(data)
    // })

   

    // console.log(FetchAPIDATA());
    
 
    const userInfo = DataMockOrAPI ? Datas.USER_MAIN_DATA.find(elt => elt.id === parseInt(userId)) : FetchAPIDATA(userId)
    // const userInfo = false
    // const userInfo = Datas.USER_MAIN_DATA.find(elt => elt.id === parseInt(userId))

    if(!userInfo){
        return(
            <div className='home'>
                 <h1>Loading...</h1>
            </div> 
        )
    }

    console.log(userInfo)
    

    const userActivity = Datas.USER_ACTIVITY.find(elt => elt.userId === parseInt(userId))

    const sessions = userActivity.sessions
    const time = Datas.USER_AVERAGE_SESSIONS.find(elt => elt.userId === parseInt(userId)).sessions
    
    const radar = Datas.USER_PERFORMANCE.find(elt => elt.userId === parseInt(userId))
    const pieAllData = Datas.USER_MAIN_DATA.find(elt => elt.id === parseInt(userId))
    const pie = pieAllData.todayScore ? pieAllData.todayScore : pieAllData.score

    // function mocked

    // const dataMain  = Datas.USER_MAIN_DATA
    // const userInfo = dataMain.find(elt => elt.id === parseInt(userId))


    // const userActivity = Datas.USER_ACTIVITY.find(elt => elt.userId === parseInt(userId))

    // const sessions = userActivity.sessions
    // const time = Datas..find(elt => elt.userId === parseInt(userId)).sessions

    // const radar = Datas.USER_PERFORMANCE.find(elt => elt.userId === parseInt(userId))

    // return {USER_PERFORMANCE,USER_AVERAGE_SESSIONS  }


    // const  {USER_PERFORMANCE,USER_AVERAGE_SESSIONS  } = fucntonMocked(userId)




    


    return(
        <div className='home'>
            <Hello name={userInfo.userInfos.firstName}/>
            <div className='info-holder'>
                <div className='graphics-holder'>
                    <Weight data={sessions}/>
                    <Line data={time}/>
                    <Radar data={radar}/>
                    <Pie data={pie}/>
                    
                    
                </div>
                <div className='numbers-holder'>
                    <Thumbnail data={userInfo.keyData.calorieCount} type="Calories" unity="kCal"/> 
                    <Thumbnail data={userInfo.keyData.proteinCount} type="Proteines" unity="g" icon="proteine"/> 
                    <Thumbnail data={userInfo.keyData.carbohydrateCount} type="Glucides" unity="g" icon="proteine"/> 
                    <Thumbnail data={userInfo.keyData.lipidCount} type="Lipides" unity="g" icon="proteine"/> 
                    {/* <Thumbnail data={data.calorieCount} nature={data}/>
                    <Thumbnail data={data.calorieCount} nature={data}/>
                    <Thumbnail data={data.calorieCount} nature={data}/>  */}
                </div>
            </div>
        </div>
    )
}

export default Home;