import Navbar from "../components/Navbar";

import '../css/Home.css';

function Home() {
    return (
        <div className="Home">
            <div className="HomeHeader">
                <Navbar/>
            </div>
            <div className="HomeBody">
                <h2>Welcome to Zoo!</h2>
                <p>Here you could manage the register 
                    of the exhibitied animals in our zoo.
                </p>
                <p>Currently is enabled the access to
                    the following animals: 
                </p>

                <div className="card">
                    <div className="card-body">
                        <i className="fa-solid fa-paw-claws"></i>
                        <h6 className="card-title">African Lion</h6>
                        <p>You are able to create and request <br/>
                            the lions registered in the database.
                        </p>
                        <a href="api" className="btn btn-primary">Go</a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;