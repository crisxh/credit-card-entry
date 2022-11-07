function CardBack(props){
    return(
        <div>
        <div className="card cardBack">
          <div className="card cvcContainer">
            <div className="cvc">
              {props.cvc}
            </div>
            </div>
        </div>
       
      </div>
    )
}

export default CardBack;