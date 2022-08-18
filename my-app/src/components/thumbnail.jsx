import fire from '../data/fire.png'
import proteine from '../data/swim.png'

function thumbnail({type, unitee, data}){

  
    let img = fire;
    switch (type) {
        case "Calorie":
            img = fire
            break;

        case "Proteine":
            img = proteine
            break;
    
        default:
            break;
    }


    return(
        <div className='thumbnail'>
            <div className='thumbnail-icon'><img src={img} alt={`Icon de ${type}`}></img></div>
            <div className='thumbnail-text'>
                <h3>{data}{unitee}</h3>
                <p>{type}</p>
            </div>
        </div>
    )
}

export default thumbnail;