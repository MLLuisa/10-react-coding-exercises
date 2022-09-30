import '../styles/App.scss';

const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 }
];

function App() {

  const renderUsers = users.map((element) => {
      return <li key={element.id}>{element.name}</li>
  })

  return (
    <div className="App">
      <h3>User names</h3>
      <ul>{renderUsers}</ul>
    </div>
  );
}

export default App;
