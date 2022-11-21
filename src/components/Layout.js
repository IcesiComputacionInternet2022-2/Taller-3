import React from 'react';

import './styles/Layout.css'

import Navbar from './Navbar';

export default function Layout (props){
    return (
        <div className='Layout'>
            <Navbar/>
            {props.children}
        </div>

    );
}