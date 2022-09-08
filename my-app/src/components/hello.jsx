//this component display the name of the user

function hello(props){
    return(
        <div className="hello">
            <div className="hello-name"><h1>Bonjour</h1> <h1 className="name">{props.name}</h1></div>
            <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
        </div>
    )
}

export default hello;