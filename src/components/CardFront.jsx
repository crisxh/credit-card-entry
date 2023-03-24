function CardFront(props){
    return(
        <div>
        <div className="card cardFront">
          <div>
          <img src={props.logo} alt="card favicon" />
          </div>
        
          <div className="cardNumber">{props.ccNumber}</div>
          <div className="nameExp">
            <div>{props.ccName}</div>
            <div>{props.expMM}/{props.expYY} </div>
          </div>
        </div>
       
      </div>
    )
}

export default CardFront;