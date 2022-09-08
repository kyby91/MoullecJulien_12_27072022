import fire from '../image/fire.png'
import proteine from '../image/chicken.png'
import glucides from '../image/apple.png'
import lipides from '../image/cheeseburger.png'

function thumbnail({type, unity, data}){

  
    let img = fire;
    switch (type) {
        case "Calories":
            img = fire
            break;

        case "Proteines":
            img = proteine
            break;

        case "Glucides":
            img = glucides
            break;

        case "Lipides":
            img = lipides
            break;
    
        default:
            break;
    }


    return(
        <div className='thumbnail'>
            <div className='thumbnail-icon'><div className={type}></div><img className='thumbnail-icon-img' src={img} alt={`Icon de ${type}`}></img></div>
            <div className='thumbnail-text'>
                <h3>{data}{unity}</h3>
                <p>{type}</p>
            </div>
        </div>
    )
}

export default thumbnail;