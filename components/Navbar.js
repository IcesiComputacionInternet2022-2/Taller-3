import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Navbar.css'

import logo from '../images/jabiru.jpeg'

export default function Navbar(props) {
    return (
        <div className='Navbar'>
            <div className="container-fluid">
                <Link className='Navbar__brand' to="/">
                    <img className='brand-logo' src={logo} alt="Jaribu Logo" />
                    <span className='fw-bold fs-3 jaribu_span'>Jaribu </span>
                    <span className='fw-bold fs-3 reserva_span'>Reserve </span>
                </Link>
            </div>
        </div>
    );
}