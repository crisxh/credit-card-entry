function CardFront(props){
    return(
        <div>
        <div className="card cardFront">
          <div>
          {props.Logo}
          </div>
        
          <div>{props.ccNumber}</div>
          <div className="nameExp">
            <div>{props.ccName}</div>
            <div>{props.ccExp}</div>
          </div>
        </div>
       
      </div>
    )
}

export default CardFront;