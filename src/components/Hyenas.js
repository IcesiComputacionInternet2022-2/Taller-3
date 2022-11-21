import { MDBContainer } from 'mdb-react-ui-kit';
import React from 'react';
import NavBar from './NavBar';
import Table from './Table';

export default function Hyenas() {
    return (
        <div>
            <NavBar/>
            <MDBContainer className='d-flex flex-column justify-content-center vh-100'>
                <h1 className='text-center py-5'>Hyenas in Zoo</h1>
                <div>
                    <Table/>
                </div>
            </MDBContainer>
            
        </div>
    );
}