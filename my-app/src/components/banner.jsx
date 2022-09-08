import '../App.css';
import logo from '../image/logo.png'
import swim from '../image/swim.png'
import bycycle from '../image/bycycle.png'
import dumbbell from '../image/dumbbell.png'
import yoga from '../image/yoga.png'

//this function is here to display the vertical and horizontal banner

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