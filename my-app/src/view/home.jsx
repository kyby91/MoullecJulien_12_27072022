import Hello from '../components/hello.jsx'
import { useParams } from 'react-router-dom'
import Thumbnail from '../components/thumbnail.jsx'
import Weight from "../components/weight.jsx";
import Radar from '../components/radar.jsx'
import Line from '../components/line.jsx'
import Pie from '../components/pie.jsx'
import FetchAPI from "../utils/fetchAPI";

const Datas = require('../data/data.js')

/**
 * Page with all the components
 * @param {object} userId Wich user is loged
 * @returns the page with the information of a user
 */

function Home(){
    
    const {userId} = useParams()

    const DataMockOrAPI = false;
    let loading = false;

    //if mocked data false we use data from API
    const userInfo = DataMockOrAPI ? Datas.USER_MAIN_DATA.find(elt => elt.id === parseInt(userId)) : FetchAPI(`http://localhost:3000/user/${userId}`) 
    const userActivity = DataMockOrAPI ? Datas.USER_ACTIVITY.find(elt => elt.userId === parseInt(userId)) : FetchAPI(`http://localhost:3000/user/${userId}/activity`)
    const time = DataMockOrAPI ? Datas.USER_AVERAGE_SESSIONS.find(elt => elt.userId === parseInt(userId)) : FetchAPI(`http://localhost:3000/user/${userId}/average-sessions`)
    const radar = DataMockOrAPI ? Datas.USER_PERFORMANCE.find(elt => elt.userId === parseInt(userId)) : FetchAPI(`http://localhost:3000/user/${userId}/performance`)
   

    //if the data from API are loaded we set loading true
    if(userInfo && userActivity && time && radar){
        loading = true;
    }       

    //so if loading true we display the page
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