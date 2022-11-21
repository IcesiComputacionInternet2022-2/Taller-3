import React, { Component } from 'react';

import './styles/AnimalNew.css'

import {Link} from 'react-router-dom';
import { AnimalService } from '../service/AnimalService';

export default class AnimalNew extends Component {

    constructor(){
        super()
        this.state = {
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
        this.animalService = new AnimalService()
    }

    handleChange = (e) => {

        this.setState({
            animal:{
                ...this.state.animal,
                [e.target.name]: e.target.value
            }
        })

    }

    handleSubmit = async e => {
        e.preventDefault()

        try{
            await this.animalService.create(this.state.animal)
        }catch(e){
            console.log(e)
        }

    }


    render() {
        return (
            <div className='NewCard'>

                <form className="formCard" onSubmit={this.handleSubmit}>
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
                    <Link className='btn btn-secondary' to="/">Cancel</Link>
                    <button className='btn btn-primary' >Apply</button>
                    <Link className='btn btn-primary' to="/">Save</Link>
                </div>
                </form>
            </div>
        );
    }
}