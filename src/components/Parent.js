import React, { Component } from 'react';

export default class Parent extends Component {
    render() {

        const{
            title,
        } = this.props

        const parent = this.props.dataParent

        if(parent === false){
            return(
                <div>Not registred</div>
            )
        }else{

            return (
                <div className="parent">
                    <h6>{this.props.title}</h6>
                    <p style={{fontSize: 'x-small'}}>ID # {parent.id || 'XXXX-XXXX-XXXX-XXXX'}</p>
                    <div className="parentBasicInfo">
                        <div>Name: {parent.name || 'name'}</div>
                        <div>Gender: {parent.gender || '??'}</div>
                        <div>Age: {parent.age || '?? yo'}</div>
                    </div>
                    <div className="parentEights">
                        <div>Height: {parent.height || '?? cm'}</div>
                        <div>Weight: {parent.height || '?? lb'}</div>
                    </div>
                    <p style={{fontSize: 'x-small'}}>Since {parent.arrivalDate || '0000-00-00 00:00:00'}</p>
                </div>
            );
        }

    }
}
