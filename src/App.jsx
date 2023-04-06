import './App.css';
import { useState } from 'react';
import React from 'react';

function App() {
  const [weight,setWeight] = useState(0);
  const [height,setheight] = useState(0);
  const [bmi,setBmi] = useState("");
  const [message,setMessage] = useState("");

  let reload = ()=>{
    window.location.reload();
  }

  let calcBmi=(e) =>{
    e.preventDefault();
    if(weight==0||height==0){
      alert("Enter a valid weight/height");
    }
    else{
      let bmi = (weight/(height*height)*703);
      setBmi(bmi);
    }
  }

  return (
    <div className="App">
      <div className='container'>
        <h2>BMI Calculator</h2>
        <form action="" onSubmit={calcBmi}>
          <div>
            <label htmlFor="">Weight(lbs)</label>
            <input type="text" placeholder='Enter your weight' value={weight} onChange={(e)=>{setWeight(e.target.value)}}/>
          </div>
          <div>
            <label htmlFor="">Height(ft)</label>
            <input type="text" placeholder='Enter your height' value={height} onChange={(e)=>{setheight(e.target.value)}}/>
          </div>
          <div>
            <button className='btn'type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} >Reload</button>
          </div>
          <div className='centre'>
            <h3>Your BMI is {bmi}</h3>
            {/* <p>{message}</p> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
