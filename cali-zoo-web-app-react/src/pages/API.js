import Navbar from '../components/Navbar';
import APITabPane from '../components/APITabPane';

import '../css/API.css';

function API() {
    return(
        <div className="API">
            <div className="APIHeader">
                <Navbar/>
            </div>
            <div className="APIBody">
                <APITabPane/>
            </div>
        </div>
    );
}

export default API;