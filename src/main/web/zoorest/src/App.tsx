import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("animals").then(res => res.json()).then(data => {
      setAnimals(data);
      setLoading(false);
    })
  }, []);

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div className="App">

    </div>
  );
}

export default App;
