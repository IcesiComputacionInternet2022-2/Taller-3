import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

//import Login from './components/Login';
import API from './pages/API';
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="api" element={<API/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
