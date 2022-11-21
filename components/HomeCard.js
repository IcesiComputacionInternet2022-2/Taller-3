import React, {Component} from 'react';

import "./styles/HomeCard.css"

import {Link} from 'react-router-dom';

export default class HomeCard extends Component{
    render(){
        
        const{
            title,
            imgIcon,
            description,
            buttonText,
            buttonPath
        } = this.props



        return (
            <div className="HomeCard">
                <div className="HomeCard__title">
                    <div className="child">
                        <img  className='CardIcon' src={imgIcon} alt="Icon" />
                    </div>
                    <div className="child">
                        <h4>{title}</h4>
                    </div>
                </div>
                <p>{description}</p>
                <Link to={buttonPath} className="btn btn-primary">{buttonText}</Link>
            </div>
        );

    }
    
}