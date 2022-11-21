import React, { Component } from 'react';

import './styles/Animals.css'

import { AnimalService } from '../service/AnimalService';
import jaribuPhoto from '../images/jaribuIRL.jpg'

export default class Animals extends Component {

    state ={
        animalsData: []
    }

    constructor(){
        super()
        this.animalService = new AnimalService()
    }

    fetchData = async () => {
        try{
            await this.animalService.getAll().then(
                data => this.setState({
                    animalsData: data
                })
            )
        }catch(error){
            console.log(error)
        }
    }

    componentDidMount(){
        this.fetchData()

    }

    render() {

        if(this.state.animalsData.length === 0){
            return(
                <div>
                    <h2>Animal's List</h2>
                    <h4>No Animals were found</h4>
                </div>
            )
        }

        return (
            <div className='Animals'>
                <h2>Animal's List</h2>
                <ul className='list-unstyled'>
                    {this.state.animalsData.map((animal) => {
                        return(
                            <li key={animal.id} className="AnimalCard">
                                <div className="AnimalCard__left__image-date">
                                    <img src={jaribuPhoto} alt="jaribu img" />
                                    <p>{animal.arrivalDate}</p>
                                </div>
                                <div className="AnimalCard__right__detail">
                                    <div className="line">
                                        <div>Name: {animal.name}</div>
                                        <div>Gender: {animal.gender}</div>
                                        <div>Age: {animal.age}y</div>
                                    </div>
                                    <div className="line">
                                        <div>Height: {animal.height} cm</div>
                                        <div>Weight: {animal.weight} lbs</div>
                                    </div>
                                    <div className='line parentTxt'>Father Id: {animal.fatherId || "No data"}</div>
                                    <div className='line parentTxt'>Mother Id: {animal.motherId || "No data"}</div>
                                </div>
                            </li>
                        )

                    })}

                </ul>
            </div>
        );
    }
}

