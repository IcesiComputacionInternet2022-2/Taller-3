import React from 'react';
import { Component } from 'react';
import '../styles.css';
import CreateSuricato from './CreateSuricato';
import GetSuricatos from './GetSuricatos';
import SearchSuricato from './SearchSuricato';
class MainPage extends Component{
    render(){
        return(
        <>
        
            <nav class="navbar navbar-expand-lg ">
               
                <a class="navbar-brand m-3" href=" "> Zoo Suricatos  </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
                

            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a className={"nav-link" + (this.props.page === 1 ? " active" : "")} aria-current="page" onClick={() => this.props.handlePageChange(1)}>Create Suricato</a>
                    <a className={"nav-link" + (this.props.page === 2 ? " active" : "")} onClick={() => this.props.handlePageChange(2)}>Get Suricatos</a>
                    <a className={"nav-link" + (this.props.page === 3 ? " active" : "")} onClick={() => this.props.handlePageChange(3)}>Search Suricato</a>
                </div>
            </div>
            </nav>
        
        {
            this.props.page === 1 &&
            <CreateSuricato></CreateSuricato>
        }
        {
            this.props.page === 2 &&
            <GetSuricatos></GetSuricatos>
        }
        {
            this.props.page === 3 &&
            <SearchSuricato></SearchSuricato>
        }

        </>
        )
    }
}
export default MainPage;