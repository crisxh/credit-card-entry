import ThankYou from './ThankYou';

function CardForm(props){

   const CardFormComponent=<form>
        <label>
            CARDHOLDER NAME
            <input type="text" onChange={props.handleNameChange} placeholder="FIRST NAME LAST NAME" ></input>
        </label>
        <label>
            
        CARD NUMBER
        <input type="tel" pattern="[0-9\s]{13,19}" onChange={props.handleNumber} placeholder="eg 1234 5678 8765 4321"></input>
        </label>
        <div id="cvcExp">
            <label>
                EXP DATE (MM/YY)
                <div id="exp">
                <input type="text" onChange={props.handleExpMM} placeholder="MM"></input>
                <input type="text" onChange={props.handleExpYY} placeholder="YY"></input>
                </div>
            
            </label>
            <label>
                CVC
                <input type="text" onChange={props.handleCvc} placeholder="eg 123"></input>
            </label>
        </div>
        <div>
            <button className="confirmBtn" onClick={props.handleSubmit}>Confirm</button>
        </div>
    </form>



    const ThankYouComponent = <ThankYou/>

    return(
        <div id='Form'>
{!props.submited ? CardFormComponent : ThankYouComponent }
        </div>
    )

};

export default CardForm;