import React, {useEffect, useState} from 'react';
import {Card} from "./components/Card";
import {Add} from "./pages/Add";

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
      <Add/>
    </div>
  );
}

export default App;
