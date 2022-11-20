import CreateLionForm from "./CreateLionForm";

import '../css/CreateLion.css';

function CreateLion(){
    return(
        <div className="CreateLion">
            <div className="CreateLionHeader">
                <h3>Create Lion</h3>
                <p>Register a new lion in the database.</p>
            </div>
            <div className="CreateLionBody">
                <CreateLionForm/>
            </div>
        </div>
    );
}

export default CreateLion;