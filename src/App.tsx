import { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import CreateCaripiare from "./components/create-caripiare.component";
import Caripiare from "./components/caripiare.component";
import CaripiareList from "./components/caripiare-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Animals
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/create"} className="nav-link">
                Create
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/caripiares"} className="nav-link">
                Caripiares
              </Link>
            </li>
          </div>
        </nav>

        <ul>
          <br>
        
          </br>
          <label>
            <strong>Functionalities:</strong>
          </label>{" "}
          <li>Use navigation bar on header to move between functionalities.</li>
          <li>Create an animal by filling out the corresponding fields.</li>
          <li>Search an animal by providing its Id in UUID format.</li>
          <li>Click on an animal to view its information and edit/update option</li>
        </ul>

        <div className="container mt-3">
          <Switch>
            <Route exact path="/caripiares" component={CaripiareList} />
            <Route exact path="/create" component={CreateCaripiare} />
            <Route path="/caripiares/id/:id" component={Caripiare} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
