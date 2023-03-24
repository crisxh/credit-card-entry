import {useState} from 'react';
import './App.css';
import CardForm from './components/CardForm';
import Card from './components/Card';
import ThankYou from './components/ThankYou'



function App() {
  const [name,setName]=useState('CLIENT NAME');
  const [number,setNumber]=useState('0000 0000 0000 0000');
  const [expMM,setExpMM]=useState('00');
  const [expYY,setExpYY]=useState('00')
  const [cvc,setCvc]=useState('000');
  const [submited,setSubmited]=useState(false);


  
  const handleNameChange=(event)=>{
    setName(event.target.value);
    console.log(name);
  }
const handleNumberChange=(event)=>{
setNumber(event.target.value);
}
const handleExpMMChange=(event)=>{
setExpMM(event.target.value);
}

const handleExpYYChange=(event)=>{
  setExpYY(event.target.value);
}
const handleCvcChange=(event)=>{
setCvc(event.target.value);
}

const handleConfirm=(event)=>{
  return true;
}

const handleSubmit =()=>{
  setSubmited(true);
}

const CardFormComponent=  <CardForm handleNameChange={handleNameChange} handleNumber={handleNumberChange} handleExpMM={handleExpMMChange} handleExpYY={handleExpYYChange} handleCvc={handleCvcChange}  handleSubmit={handleSubmit} submited={submited} />;
const ThankComponent= <ThankYou />;
  return (
<div id="App">

  <div className="appContainer">
   
   
  <Card ccName={name} ccNumber={number} expMM={expMM} expYY={expYY} cvc={cvc} logo="\src\img\images\favicon-32x32.png" />
  {CardFormComponent}
  
    
  </div>

  
  
    </div>
  );
}

export default App;
