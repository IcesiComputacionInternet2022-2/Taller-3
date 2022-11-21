import React, { Component } from 'react';

import './styles/AnimalNew.css'

import {Link} from 'react-router-dom';

export default class AnimalNew extends Component {

    state = {
        animal:{
            name:'',
            gender:'',
            age:'',
            weight:'',
            height:'',
            arrivalDate:'',
            fatherId:'',
            motherId:''
        }
    }

    handleChange = (e) => {

        this.setState({
            animal:{
                ...this.state.animal,
                [e.target.name]: e.target.value
            }
        })

    }

    handleSubmit = (e) => {
        console.log(">>> Enviado")
    }


    render() {
        return (
            <div className='NewCard'>

                <form onSubmit={this.handleSubmit} className="formCard">
                    <h2>Add Animal</h2>

                    <div className="form-group">
                        <label>Name</label>
                        <input
                            onChange={this.handleChange}
                            className='form-control'
                            type="text"
                            name="name"
                            value={this.state.name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Gender (M or F)</label>
                        <input
                            onChange={this.handleChange}
                            className='form-control'
                            type="text"
                            name="gender"
                            value={this.state.gender}
                        />
                    </div>
                    <div className="form-group">
                        <label>Age (0 - 35)</label>
                        <input
                            onChange={this.handleChange}
                            className='form-control'
                            type="number"
                            name="age"
                            value={this.state.age}
                        />
                    </div>
                    <div className="form-group">
                        <label>Weight (4 - 9 lbs)</label>
                        <input
                            onChange={this.handleChange}
                            className='form-control'
                            type="number"
                            name="weight"
                            value={this.state.weight}
                        />
                    </div>
                    <div className="form-group">
                        <label>Height (120 - 150 cms)</label>
                        <input
                            onChange={this.handleChange}
                            className='form-control'
                            type="number"
                            name="height"
                            value={this.state.height}
                        />
                    </div>
                    <div className="form-group">
                        <label>Arrival Date (yyyy-MM-dd HH:mm:ss)</label>
                        <input
                            onChange={this.handleChange}
                            className='form-control'
                            type="text"
                            name="arrivalDate"
                            value={this.state.arrivalDate}
                        />
                    </div>
                    <div className="form-group">
                        <label>Father Id</label>
                        <input
                            onChange={this.handleChange}
                            className='form-control'
                            type="text"
                            name="fatherId"
                            value={this.state.fatherId}
                        />
                    </div>
                    <div className="form-group">
                        <label>Mother Id</label>
                        <input
                            onChange={this.handleChange}
                            className='form-control'
                            type="text"
                            name="motherId"
                            value={this.state.motherId}
                        />
                    </div>

                <div className="buttons">
                    <Link className='btn btn-secondary'>Cancel</Link>
                    <Link className='btn btn-primary'>Save</Link>
                </div>
                </form>
            </div>
        );
    }
}