import '../styles/App.scss';



function App() {

  const [button, setButton] = React.useState(true);

  const handleButton = () => {
    setButton(!button);
  }
  
  const renderDiv = () => {
    if(!button) {
      return <div>Toggle Challenge</div>
    } else {
      null;
    }
  }

  return (
    <div className="App">
      <button onClick={handleButton}>Hide Element Below</button>
      <div>{renderDiv()}</div>
    </div>
  );
}

export default App;
