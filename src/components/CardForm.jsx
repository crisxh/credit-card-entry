

function CardForm(props){

    

    return(
        <div id="Form">
        <form>
            <label>
                CARDHOLDER NAME:
                <input type="text" onChange={props.handleNameChange} placeholder="FIRST NAME LAST NAME" ></input>
            </label>
            <label>
                
            CARD NUMBER:
            <input type="tel" pattern="[0-9\s]{13,19}" onChange={props.handleNumber} placeholder="eg 1234 5678 8765 4321"></input>
            </label>
            <div id="cvcExp">
                <label>
                    EXP:
                    <div id="exp">
                    <input type="text" onChange={props.handleExp} placeholder="mm"></input>
                    <input type="text" placeholder="yy"></input>
                    </div>
                
                </label>
                <label>
                    CVC:
                    <input type="text" onChange={props.handleCvc} placeholder="eg 123"></input>
                </label>
            </div>
            <div>
                <button className="confirmBtn">Confirm</button>
            </div>
        </form>
    </div>

    )

};

export default CardForm;