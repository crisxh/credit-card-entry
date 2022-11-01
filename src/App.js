import {useState,createContext,useContext} from 'react';
import './App.css';
import CardForm from './components/CardForm';
import CardFront from './components/CardFront';
import CardBack from './components/CardBack';
import Card from './components/Card';

const nameContext = createContext();

function App() {
  const [name,setName]=useState('test name');
  const handleNameChange=(event)=>{
    setName(event.target.value);
    console.log(name);
  }
  return (
<div id="App">
  
  <Card ccName={name} />
   <CardForm handleChange={handleNameChange}/>

  
  
    </div>
  );
}

export default App;
