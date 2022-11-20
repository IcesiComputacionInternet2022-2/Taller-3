import LionCard from "./LionCard";

import '../css/GetLion.css';
import { useState } from "react";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function GetLion() {

    const [lionName, setLionName] = useState('')

    const [requestedLion, setRequestedLion] = useState(null)
    const [lionsFather, setLionsFather] = useState(null)
    const [lionsMother, setLionsMother] = useState(null)

    //Messages
    const [message, setMessage] = useState('')
    const [dialogTitle, setDialogTitle] = useState('')
    const dialogTitleError = 'Error'
    const emptyFieldError = 'Empty field';

    //Dialog logic
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const getLion = () => {
        fetch('http://localhost:8080/african-lion/' + lionName, {
            method: 'GET',
            headers: { "Content-Type": "application/json" }
        }).then(async res => {

            if(lionName === ''){
                throw Error(emptyFieldError)
            }

            const response = await res.json();

            if (response.requestedLion === undefined) {
                throw Error(response.message)
            }

            return response
        }).then(data => {
            const lion = data
            setRequestedLion(lion.requestedLion)
            setLionsFather(lion.lionFather)
            setLionsMother(lion.lionMother)
        }).catch(error => {
            setMessage(error.message)
            setDialogTitle(dialogTitleError)
            handleClickOpen()
        })
    }

    return (
        <div className="GetLion">

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
                            {message}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} autoFocus>
                            Continue
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>

            <div className="GetLionHeader">
                <h3>Get Lion</h3>
                <p>Search a saved lion in the database, searching it by it's name.</p>
                <form className="GetLionIdForm">
                    <div className="form-group">
                        <label>Lion's name</label>
                        <input
                            type="text"
                            name="lionName"
                            className="form-control"
                            placeholder="Lion's Name"
                            required
                            onChange={(e) => { setLionName(e.target.value) }}
                        />
                    </div>
                </form>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={getLion}
                >Buscar</button>
            </div>

            <div className="GetLionBody">

                {requestedLion && <div className="RequestedLionRow">
                    <div className="RequestedLion">
                        <b>Requested Lion</b>
                        <LionCard lion={requestedLion} />
                    </div>
                </div>}

                <div className="LionParents row">
                    {lionsFather && <div className="LionItem">
                        <b>Lion's Father</b>
                        <LionCard lion={lionsFather} />
                    </div>}

                    {lionsMother && <div className="LionItem">
                        <b>Lion's Mother</b>
                        <LionCard lion={lionsMother} />
                    </div>}
                </div>
            </div>

        </div>
    );
}

export default GetLion;