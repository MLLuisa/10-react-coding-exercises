import '../styles/App.scss';
import {useEffect, useState} from 'react';
import api from '../services/api';

function App() {

const [dataApi, setDataApi] = useState({});

useEffect(() => {
  api().then((dataFromApi) => {
  setDataApi(dataFromApi);
  });
}, []);

  return (
    <>
    <div>
    <h2>User Data</h2>
      <p>
        <strong>Name: </strong>{" "}
        {dataApi.name || "(Need to populate name here)"}
      </p>
      <p>
        <strong>Website: </strong>
        {dataApi.website || "(Need to populate website here)"}
      </p>
      <p>
        <strong>Email: </strong>
        {dataApi.email || "(Need to populate email here)"}
      </p>
      <p>
        <strong>Phone: </strong>
        {dataApi.phone || "(Need to populate phone here)"}
      </p>
    </div>
    </>
  );
}

export default App;
