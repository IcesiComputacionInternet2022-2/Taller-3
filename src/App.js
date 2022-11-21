import React from 'react';
import SideNav, {NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import styled from 'styled-components';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import CreateSwan from './components/CreateSwan';
import ListSwan from './components/ListSwan';
import SearchSwan from './components/SearchSwan';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <AppComponent>
  
      </AppComponent>
    );
}

const Main = styled.main`
    position: relative;
    overflow: hidden;
    transition: all .15s;
    padding: 0 30px;
    margin-left: ${props => (props.expanded ? 240 : 64)}px;
`;

class AppComponent extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      selected: 'createswan',
      expanded: false
    }

  }

  onSelect = (selected) => {
    this.setState({ selected: selected });
  };
  onToggle = (expanded) => {
    this.setState({ expanded: expanded });
  };

  render(){

    const { expanded, selected } = this.state;

    return(
      <div>
         <SideNav style={{'background-color': 'black'}}  onSelect={this.onSelect} onToggle={this.onToggle}>
                    <SideNav.Nav id="nav" selected={selected}>
                        <NavItem  eventKey="createswan">
                        <NavText style={{ padding: 8}} >
                                Create
                            </NavText>
                        </NavItem >
                        <NavItem eventKey="searchswan">
                        <NavText style={{ padding: 8}} >
                                Search 
                            </NavText>
                            
                        </NavItem>
                        <NavItem eventKey="listswan">
                        <NavText style={{ padding: 8}} >
                                List
                            </NavText>
                        </NavItem>
                        
                    </SideNav.Nav>
                </SideNav>
         
          <Main expanded={expanded}>
            {this.router()}
          </Main>
      </div>
        
    )
  }

  router(){
    switch (this.state.selected){
      case "createswan": return <CreateSwan></CreateSwan>
      case "listswan": return <ListSwan></ListSwan>
      case "searchswan": return <SearchSwan></SearchSwan>
      default: return <CreateSwan></CreateSwan>

    }
  }

}

export default App;
