import { React, Component } from "react";
import CreateTiger from './CreateTiger';
import SearchTiger from './SearchTiger';
import GetTigers from './GetTigers';

class MainPane extends Component {

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse d-flex justify-content-around" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className={"nav-link" + (this.props.page === 1 ? " active" : "")} aria-current="page" onClick={() => this.props.handlePageChange(1)}>Search Tiger</a>
                                <a className={"nav-link" + (this.props.page === 2 ? " active" : "")} onClick={() => this.props.handlePageChange(2)}>Create Tiger</a>
                                <a className={"nav-link" + (this.props.page === 3 ? " active" : "")} onClick={() => this.props.handlePageChange(3)}>Get Tigers</a>
                            </div>
                        </div>
                    </div>
                </nav>
                {
                    this.props.page === 1 &&
                    <SearchTiger></SearchTiger>
                }
                {
                    this.props.page === 2 &&
                    <CreateTiger></CreateTiger>
                }
                {
                    this.props.page === 3 &&
                    <GetTigers></GetTigers>
                }
            </>
        )
    }
}

export default MainPane;