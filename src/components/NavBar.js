import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
  MDBNavbarNav,
  MDBInputGroup,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';

export default function NavBar() {
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => {
    setBasicModal(!basicModal);

    setName('');
    setSex('');
    setWeight('');
    setAge('');
    setHeight('');
    setArrivalDate('');
    setFatherId('');
    setMotherId('');
  };
  const [searchInput, setSearchInput] = useState('');
  const [name, setName] = useState('');
  const [sex, setSex] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [fatherId, setFatherId] = useState('');
  const [motherId, setMotherId] = useState('');

  const HYENAS_API = 'http://localhost:8080/hyenas/';    

  function handleClick() {
    toggleShow();
    
    fetch(HYENAS_API + searchInput)
      .then(response => response.json()) 
      .then(data => {
        console.log(data);
        setName(data.name);
        setSex(data.sex);
        setWeight(data.weight);
        setAge(data.age);
        setHeight(data.height);
        setArrivalDate(data.arrivalDate);
        setFatherId(data.fatherId == null ? 'Not Found' : data.fatherId);
        setMotherId(data.motherId == null ? 'Not Found' : data.motherId);
      })
      .catch(error => alert(error));

  }

  return (
    <>
    <MDBNavbar sticky expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'>Cali Zoo</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarTogglerDemo02'
          aria-controls='navbarTogglerDemo02'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavNoTogglerSecond}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/hyenas'>Hyenas</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <MDBInputGroup tag="form" className='d-flex w-50'>
            <input className='form-control' placeholder="Type ID" aria-label="Search" type='Search' onChange={e => setSearchInput(e.target.value)} />
            <MDBBtn outline onClick={handleClick}>Search</MDBBtn>
          </MDBInputGroup>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>Found Hyena</MDBModalTitle>
            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>
          <form>
            <MDBInput className='mb-3 pt-3 pb-2' value={name} label='Name' id='nameInput' type='text' disabled/>
            <MDBInput className='mb-3 pt-3 pb-2' value={sex} label='Sex' id='sexInput' type='text' disabled/>
            <MDBRow>
                <MDBCol>
                    <MDBInput className='pt-3 pb-2' value={weight} label='Weight' id='weightInput' type='number' disabled />
                </MDBCol>
                <MDBCol>
                    <MDBInput className='pt-3 pb-2' value={height} label='Height' id='heightInput' type='number' disabled/>
                </MDBCol>
                <MDBCol>
                    <MDBInput className='pt-3 pb-2' value={age} label='Age' id='ageInput' type='number' disabled/>
                </MDBCol>
            </MDBRow>
            <MDBInput className='my-3 pt-3 pb-2' value={arrivalDate} label='Arrival Date (yyyy-MM-dd HH:mm:ss)' id='arrivalDateInput' type='text' disabled/>
            <MDBInput className='my-3 pt-3 pb-2' value={fatherId} label='Father ID' id='nameInput' type='text' disabled/>
            <MDBInput className='pt-3 pb-2' value={motherId} label='Mother ID' id='nameInput' type='text' disabled/>
          </form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color='secondary' onClick={toggleShow}>
              Close
            </MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
    </>
  );
}