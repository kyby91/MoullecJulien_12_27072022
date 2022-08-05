import '../App.css';
import logo from '../data/logo.png'
import swim from '../data/swim.png'
import bycycle from '../data/bycycle.png'
import dumbbell from '../data/dumbbell.png'
import yoga from '../data/yoga.png'


function banner()  {
    return(
        <div className="banner">
            <div className='banner-horizontal'>
                <div className='banner-horizontal-content'>
                    <img src={logo} alt=''></img>
                    <div>Accueil</div>
                    <div>Profil</div>
                    <div>Réglage</div>
                    <div>Communauté</div> 
                </div> 
            </div>
            <div className='banner-vertical'>
                <div className='card-holder'>
                    <div className='card-icon'><img src={yoga} alt=''></img></div>
                    <div className='card-icon'><img src={swim} alt=''></img></div>
                    <div className='card-icon'><img src={bycycle} alt=''></img></div>
                    <div className='card-icon'><img src={dumbbell} alt=''></img></div>
                </div>
                <div className='vertical-text'>Copiryght, SportSee 2020</div>
            </div>
            
            
        </div>
    )
}

export default banner;