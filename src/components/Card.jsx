import CardFront from "./CardFront";
import CardBack from "./CardBack";
function Card(props){
    return(
        <div id="Card">
          
      <CardFront ccName={props.ccName} ccNumber="123456789" ccExp="99/99" logo="Oo"/>
        <CardBack ccNumber={props.ccNumber} />
        </div>
  
    )

}

export default Card;