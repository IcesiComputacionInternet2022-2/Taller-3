import React, { useState } from 'react';
import {
    MDBInput,
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBRadio, 
    MDBCol,
    MDBRow
} from 'mdb-react-ui-kit';

const HYENAS_API = 'http://localhost:8080/hyenas';

export default function CreateModal() {
    const [basicModal, setBasicModal] = useState(false);
    
    const [name, setName] = useState('');
    const [sex, setSex] = useState('');
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [arrivalDate, setArrivalDate] = useState('');
    const [fatherId, setFatherId] = useState('');
    const [motherId, setMotherId] = useState('');

    const toggleShow = () => setBasicModal(!basicModal);

    function handleClick () {
        setBasicModal(!basicModal);

        const body = {
            name: name,
            sex: sex,
            weight: weight,
            age: age,
            height: height,
            arrivalDate: arrivalDate,
            fatherId: fatherId,
            motherId: motherId
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        };

        fetch(HYENAS_API, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data), alert('Hyena added!'))
            .catch(error => alert(error));
        
    }   
                
/*         event.preventDefault();
        console.log('name',name)
        console.log('sex',sex)
        console.log('weight',weight)
        console.log('age',age)
        console.log('height',height)
        console.log('arrivalDate',arrivalDate)
        console.log('fatherId',fatherId)
        console.log('motherId',motherId) */

    return (
        <>
        <MDBBtn onClick={toggleShow}>Create New Hyena</MDBBtn>
        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
            <MDBModalDialog>
            <MDBModalContent>
                <MDBModalHeader>
                <MDBModalTitle>New Hyena</MDBModalTitle>
                <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody>
                    <form>
                        <MDBInput className='mb-3 pt-3 pb-2' label='Name' id='nameInput' type='text' onChange={e => setName(e.target.value)} required />
                        <div className='d-flex justify-content-evenly text-center my-3'>
                            <MDBRadio id='maleRdBtn' name='options' label='Male' value='Male' onChange={e => setSex(e.target.value)} />
                            <MDBRadio id='femaleRdBtn' name='options' label='Female' value='Female' onChange={e => setSex(e.target.value)}/>
                        </div>
                        <MDBRow>
                            <MDBCol>
                                <MDBInput className='pt-3 pb-2' label='Weight' id='weightInput' type='number' onChange={e => setWeight(e.target.value)} step='.10' min='0' max='64'/>
                            </MDBCol>
                            <MDBCol>
                                <MDBInput className='pt-3 pb-2'  label='Height' id='heightInput' type='number' onChange={e => setHeight(e.target.value)} step='.10' min='0' max='92'/>
                            </MDBCol>
                            <MDBCol>
                                <MDBInput className='pt-3 pb-2' label='Age' id='ageInput' type='number' onChange={e => setAge(e.target.value)} max='25' />
                            </MDBCol>
                        </MDBRow>
                        <MDBInput className='my-3 pt-3 pb-2' label='Arrival Date (yyyy-MM-dd HH:mm:ss)' id='arrivalDateInput' type='text' onChange={e => setArrivalDate(e.target.value)}/>
                        <MDBInput className='my-3 pt-3 pb-2' label='Father ID' id='nameInput' onChange={e => setFatherId(e.target.value)} type='text' />
                        <MDBInput className='pt-3 pb-2' label='Mother ID' id='nameInput' onChange={e => setMotherId(e.target.value)} type='text' />
                    </form>
                </MDBModalBody>
                <MDBModalFooter>
                <MDBBtn color='secondary' onClick={toggleShow}>
                    Close
                </MDBBtn>
                <MDBBtn onClick={handleClick}>Create</MDBBtn>
                </MDBModalFooter>
            </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
        </>
    );
}