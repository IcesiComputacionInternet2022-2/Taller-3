
import  './App.css';
import React from 'react';
import Menu from './components/Menu';
import Create from './components/Create';
import List from './components/List';
import Search from './components/Search';

class App extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      currentPage: 1
    }
  }
  changePage = e=>{
    this.setState({
      currentPage:e.target.name
    })
  }

  
  
  render() {
    switch (this.state.currentPage){
      case "create": return <Menu changer = {this.changePage}><Create></Create></Menu>
      case "list": return <Menu changer = {this.changePage}><List></List></Menu> 
      case "search": return <Menu changer = {this.changePage}><Search></Search></Menu>
      default: return <Menu changer = {this.changePage}><Create></Create></Menu>

    }
    
  }
}




export default App;
