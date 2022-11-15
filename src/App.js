import './App.css';
import { useState } from 'react';

function App() {

  const [count, setcount] = useState(0)
  const [disabled, setdisabled] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{count}</h3>
        <button
          data-testid="minus-button"
          onClick={() => setcount((prev) => prev - 1)}
          disabled={disabled}>
         
          -
        </button>
        <button
          data-testid="plus-button"
          onClick={() => setcount((prev) => prev + 1)}
          disabled={disabled}>
          +
        </button>
        <button 
        style={{backgroundColor : "blue"}}
        data-testid="on/off-button"
        onClick={()=>setdisabled(prev=>!prev)}>
          on/off
        </button>
      </header>
    </div>
  );
}

export default App;
