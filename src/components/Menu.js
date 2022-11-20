import React from "react";

export default class Menu extends React.Component {
    
    render(){
        return( 
            <diV>
              <head>
              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous"></link>
              <title>Zootopia App</title>
              </head>
              <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><h1>Zootopia</h1></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" onClick = {this.props.changer} name = "create">Create Animal</a>
          
        </li>
        <li className="nav-item">
          <a className="nav-link active" onClick = {this.props.changer} name = "list">List Of Animals</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" onClick = {this.props.changer} name = "search">Search Animal</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
                {
                    this.props.children
                }
            </diV>

        )
    }
}