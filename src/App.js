import {useState} from 'react';
import './App.css';
import CardForm from './components/CardForm';
import Card from './components/Card';



function App() {
  const [name,setName]=useState('CLIENT NAME');
  const [number,setNumber]=useState('0000 0000 0000 0000');
  const [exp,setExp]=useState('00/00');
  const [cvc,setCvc]=useState('000');
  
  const handleNameChange=(event)=>{
    setName(event.target.value);
    console.log(name);
  }
const handleNumberChange=(event)=>{
setNumber(event.target.value);
}
const handleExpChange=(event)=>{
setExp(event.target.value);
}
const handleCvcChange=(event)=>{
setCvc(event.target.value);
}

  return (
<div id="App">
  
  <div className="appContainer">
    <Card ccName={name} ccNumber={number} exp={exp} cvc={cvc} logo="\src\img\images\favicon-32x32.png" />
     <CardForm handleNameChange={handleNameChange} handleNumber={handleNumberChange} handleExp={handleExpChange} handleCvc={handleCvcChange}/>
  </div>

  
  
    </div>
  );
}

export default App;
