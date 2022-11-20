import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.css';

import CreateLion from './CreateLion';
import GetLion from './GetLion';
import GetLions from './GetLions'

import '../css/APITabPane.css';

function APITabPane(){
    return(
        <div className="APITabPane">
            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="Tabs mb-3"
              >
                <Tab className='Tab' eventKey="createLion" title="Create">
                  <CreateLion/>
                </Tab>
                <Tab className='Tab' eventKey="getLion" title="Get Lion">
                  <GetLion/>
                </Tab>
                <Tab className='Tab' eventKey="getLions" title="Get Lions">
                  <GetLions/>
                </Tab>
            </Tabs>
        </div>
    );
}

export default APITabPane;