import '../styles/App.scss';
import {useState} from 'react';


function Child({setValue}) {
  const handleClick = () => {
    setValue("parent updated")
  }
  
  return (
    <>
      <div>Child</div>
      <button
        onClick={handleClick}>Change Parent Value</button>
    </>
  );
}

function App() {
  const [value, setValue] = useState(
    "I need to be updated from my child"
  );

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child 
          setValue={setValue}/>
      </div>
    </>
  );
}

export default App;
