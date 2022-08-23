import Hello from './components/hello.jsx'
import { useParams } from 'react-router-dom'
import Thumbnail from './components/thumbnail.jsx'
import Weight from "./components/weight.jsx";
import Radar from './components/radar.jsx'
import Line from './components/line.jsx'

const Datas = require('./data/data.js')
// const user = data.USER_MAIN_DATA


function Home(){

    const {userId} = useParams()
   

    const dataMain  = Datas.USER_MAIN_DATA
    const userInfo = dataMain.find(elt => elt.id === parseInt(userId))
    

    console.log(Datas, userInfo, userId)

    const dataActivity = Datas.USER_ACTIVITY
    const userActivity = dataActivity.find(elt => elt.userId === parseInt(userId))
    const pp = userActivity.sessions
    console.log(pp);


    


    return(
        <div className='home'>
            <Hello name={userInfo.userInfos.firstName}/>
            <div className='info-holder'>
                <div className='graphics-holder'>
                    <div className='pp'><Weight data={dataActivity}/></div>
                    <div><Line/></div>
                    <div><Radar/></div>
                    <div></div>
                    
                    
                    
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