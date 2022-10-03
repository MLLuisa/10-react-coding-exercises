import '../styles/App.scss';
import {useState} from 'react';

function App() {

  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [total, setTotal] = useState(0);

  const one = (ev) => {
    setNumber1(+ev.target.value);
  }
  const two = (ev) => {
    setNumber2(+ev.target.value);
  }
  
  const sum = () => {
    setTotal(number1 + number2);
  }

  return (
    <>
      <div>
      <h2>Adding Two Numbers</h2>
      <input 
       placeholder="First Number" 
       type="number"
       value={number1}
       onChange={one}/>
      <input 
       placeholder="Second Number"
       type="number"
       value={number2}
       onChange={two}/>

      <button
        onClick={sum}>Add Two Numbers</button>
      <p>Total: {total || ""}</p>
    </div>
    </>
  );
}

export default App;
