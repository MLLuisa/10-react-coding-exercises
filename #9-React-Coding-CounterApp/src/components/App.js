import '../styles/App.scss';
import {useState} from 'react';

function App() {

  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number => number + 1);
  }

  const decrement = () => {
    setNumber(number => number -1);
  }

  const reset = () => {
    setNumber(0);
  }

  return (
    <>
    <div>
      <h2>Counter: {number}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
    </>
  );
}

export default App;
