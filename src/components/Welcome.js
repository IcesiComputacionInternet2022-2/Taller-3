import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

export default function Welcome() {
    return (
        <header>
            <div
            id='intro-example'
            className='p-5 vh-100 text-center bg-image'
            style={{ backgroundImage: "url('https://animals.sandiegozoo.org/sites/default/files/2016-09/animals_hero_hyena_spotted.jpg')" }}
            >
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                <div className='d-flex justify-content-center align-items-center h-100'>
                    <div className='text-white'>
                    <h1 className='mb-3'>Welcome to Hyena Cali Zoo</h1>
                    <h5 className='mb-4'>Best CRUD for Hyenas in Cali</h5>
                    <MDBBtn
                        className="m-2"
                        tag="a"
                        outline
                        size="lg"
                        rel="nofollow"
                        href='hyenas'
                    >
                        Create a Hyena
                    </MDBBtn>
                    <MDBBtn
                        className="m-2"
                        tag="a"
                        outline
                        size="lg"
                        target=''
                        href='about'
                    >
                        About
                    </MDBBtn>
                    </div>
                </div>
                </div>
            </div>
        </header>
    );
}