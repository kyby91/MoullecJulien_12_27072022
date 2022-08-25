import Hello from './components/hello.jsx'
import { useParams } from 'react-router-dom'
import Thumbnail from './components/thumbnail.jsx'
import Weight from "./components/weight.jsx";
import Radar from './components/radar.jsx'
import Line from './components/line.jsx'
import Pie from './components/pie.jsx'

const Datas = require('./data/data.js')
// const user = data.USER_MAIN_DATA


function Home(){

    const {userId} = useParams()

    const DataMockOrAPI = true;
   

    const dataMain  = Datas.USER_MAIN_DATA
    const userInfo = dataMain.find(elt => elt.id === parseInt(userId))
    

    const userActivity = Datas.USER_ACTIVITY.find(elt => elt.userId === parseInt(userId))

    const sessions = userActivity.sessions
    const time = Datas.USER_AVERAGE_SESSIONS.find(elt => elt.userId === parseInt(userId)).sessions
    
    const radar = Datas.USER_PERFORMANCE.find(elt => elt.userId === parseInt(userId))


// function mocked

// const dataMain  = Datas.USER_MAIN_DATA
// const userInfo = dataMain.find(elt => elt.id === parseInt(userId))


// const userActivity = Datas.USER_ACTIVITY.find(elt => elt.userId === parseInt(userId))

// const sessions = userActivity.sessions
// const time = Datas..find(elt => elt.userId === parseInt(userId)).sessions

// const radar = Datas.USER_PERFORMANCE.find(elt => elt.userId === parseInt(userId))

// return {USER_PERFORMANCE,USER_AVERAGE_SESSIONS  }


// const  {USER_PERFORMANCE,USER_AVERAGE_SESSIONS  } = fucntonMocked(userId)




    let dataWeight = []
   

    let dataLine = []
    let newDataLine = ()=>{
        
        for (let i = 0; i < time.length; i++) {
            const elt = time[i];
            dataLine.push({
                'pv': elt.sessionLength
            })
        }
        return(dataWeight)
    }
    newDataLine()

    let dataRadar = []
    let newDataRadar = ()=>{
        
        for (let i = 0; i < radar.kind.length; i++) {
            const elt = time[i];
            dataRadar.push({
                'subject': elt.kind[i+1],
                'A': elt.data.value[i]
            })
        }
        return(dataWeight)
    }
    newDataRadar()
    console.log(dataRadar);
    


    return(
        <div className='home'>
            <Hello name={userInfo.userInfos.firstName}/>
            <div className='info-holder'>
                <div className='graphics-holder'>
                    <Weight data={sessions}/>
                    <Line data={dataLine}/>
                    <Radar data={radar}/>
                    <Pie data={radar}/>
                    
                    
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