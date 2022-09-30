import '../styles/App.scss';
import {useState} from 'react';

function App() {

  const [text, setText] = useState("");
  
  const handleText = (ev) => {
    setText(ev.target.value);
  }
  
  const isDisable = text.length === 0;

  return (
    <div className="App">
      <h3>Disable Button Challenge</h3>
      <input 
        type="text"
        onChange={handleText}
        value={text}/>
      <button disabled={isDisable}>Submit</button>
    </div>
  );
}

export default App;
