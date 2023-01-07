//this will be the spoon column component
import './spoonColumn.css'

export default function SpoonColumn(props){
    return(
        <div className="column-container">
            <div className="spoon-number">
                <img src={props.img} alt="spoons"/>
            </div>
            <div className="cards-container">
            cards go here
            </div>
        </div>
    )

}
