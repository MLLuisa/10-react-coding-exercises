import '../styles/App.scss';
import {useState} from 'react';



function App() {

const [text, setText] = useState("");
  
const handleText = (ev) => {
  setText(ev.target.value);
  console.log(ev.target.value);
 }

  return (
    <div className="App">
      <input 
        onChange={handleText}
        value={text}
        type="text" 
        placeholder="Enter Text" />
      <p>{text}</p>
    </div>
  );
}

export default App;
