import React, {useEffect, useState} from 'react';
import {Card} from "./components/Card";
import {Add} from "./pages/Add";
import {All} from "./pages/All";
import {Home} from "./pages/Home";
import {Info} from "./pages/Info";
import {Navbar} from "./components/Navbar";
import {Route, Routes} from "react-router-dom"

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
      <Navbar/>
      <div>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/all"} element={<All/>}/>
          <Route path={"/new"} element={<Add/>}/>
          <Route path={"/info"} element={<Info/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
