import CardFront from "./CardFront";
import CardBack from "./CardBack";
function Card(props){
    return(
        <div id="Card">
          
      <CardFront ccName={props.ccName} ccNumber={props.ccNumber} expMM={props.expMM} expYY={props.expYY} logo={props.logo} cvc={props.cvc}/>
        <CardBack ccNumber={props.ccNumber} cvc={props.cvc} exp={props.exp} />
        </div>
  
    )

}

export default Card;