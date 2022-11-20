import { useState } from 'react';
import '../css/CreateLionForm.css';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function CreateLionForm() {

    //Upload messages types
    const dialogTitleSuccessFully = 'Added';
    const dialogTitleError = 'Error';
    const successFullyMessage = 'Lion Added Successfully';

    //Form fields
    const [name, setName] = useState('');
    const [sex, setSex] = useState('MALE');
    const [age, setAge] = useState(0);
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [arrivedZooDate, setArrivedZooDate] = useState('');
    const [fatherId, setFatherId] = useState('');
    const [motherId, setMotherId] = useState('');

    //Messages
    const [addedStatus, setAddedStatus] = useState('');
    const [dialogTitle, setDialogTitle] = useState('');

    //Dialog logic
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    var sendLionForm = (e) => {
        e.preventDefault();

        let tempFatherId = fatherId
        if (fatherId === '') {
            setFatherId(null)
        }

        let tempMotherId = motherId
        if (motherId === '') {
            setMotherId(null)
        }

        const lion = { name, sex, age, weight, height, arrivedZooDate, fatherId, motherId };
        setMotherId(tempMotherId)
        setFatherId(tempFatherId)

        fetch('http://localhost:8080/african-lion', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(lion)
        }).then(async res => {
            const response = await res.json()
            if (response.id === undefined) {
                throw Error(response.message)
            }
            setAddedStatus(successFullyMessage)
            setDialogTitle(dialogTitleSuccessFully)
           handleClickOpen()
        }).catch(error => {
            setAddedStatus(error.message)
            setDialogTitle(dialogTitleError)
            handleClickOpen()
        })
    }

    return (
        <div className="CreateLionForm">
            <div className='AlertDialog'>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {dialogTitle}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {addedStatus}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} autoFocus>
                            Continue
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <form className="card-body"
                        onSubmit={sendLionForm}
                    >
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                name="lionName"
                                className="form-control"
                                placeholder="New Lion's name"
                                required
                                value={name}
                                onChange={(e) => { setName(e.target.value) }}
                            />
                        </div>

                        <div className="form-group">
                            <label>Sex</label>
                            <select className="form-control"
                                name="lionSex"
                                value={sex}
                                onChange={(e) => setSex(e.target.value)}
                            >
                                <option defaultValue value="MALE">MALE</option>
                                <option value="FEMALE">FEMALE</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Age</label>
                            <input
                                type="text"
                                name="lionAge"
                                className="form-control"
                                placeholder="Age"
                                required
                                value={age}
                                onChange={(e) => { setAge(e.target.value) }}
                            />
                        </div>

                        <div className="form-group">
                            <label>Weight</label>
                            <input
                                type="text"
                                name="lionWeight"
                                className="form-control"
                                placeholder="Weight"
                                required
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Height</label>
                            <input
                                type="text"
                                name="lionHeight"
                                className="form-control"
                                placeholder="Height"
                                required
                                value={height}
                                onChange={(e) => { setHeight(e.target.value) }}
                            />
                        </div>

                        <div className="form-group">
                            <label>Arrival date</label>
                            <input
                                type="text"
                                name="lionArrivedZooDate"
                                className="form-control"
                                placeholder="yyyy-MM-dd HH:mm:ss"
                                required
                                value={arrivedZooDate}
                                onChange={(e) => { setArrivedZooDate(e.target.value) }}
                            />
                        </div>

                        <div className="form-group">
                            <label>Father Id</label>
                            <input
                                type="text"
                                name="lionFatherId"
                                className="form-control"
                                placeholder="Father"
                                value={fatherId}
                                onChange={(e) => { setFatherId(e.target.value) }}
                            />
                        </div>

                        <div className="form-group">
                            <label>Mother Id</label>
                            <input
                                type="text"
                                name="lionMotherId"
                                className="form-control"
                                placeholder="Mother"
                                value={motherId}
                                onChange={(e) => { setMotherId(e.target.value) }}
                            />
                        </div>

                        <button className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default CreateLionForm;

//<AlertDialog message={addedStatus} messageType={dialogTitle} open={open}/>