import {useState,useContext} from 'react';

function CardForm(props){

    

    return(
        <div id="Form">
        <form>
            <label>
                CARDHOLDER NAME:
                <input type="text" onChange={props.handleChange} ></input>
            </label>
            <label>
                
            CARD NUMBER:
            <input type="tel" pattern="[0-9\s]{13,19}"></input>
            </label>
            <div id="cvcExp">
                <label>
                    EXP:
                    <div id="exp">
                    <input type="text"></input>
                    <input type="text"></input>
                    </div>
                
                </label>
                <label>
                    Cvc:
                    <input type="text"></input>
                </label>
            </div>
            
        </form>
    </div>

    )

};

export default CardForm;