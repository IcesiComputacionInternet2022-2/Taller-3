import React, { Component } from 'react';
import { AnimalService } from '../service/AnimalService';

export default class Animals extends Component {

    state ={}

    constructor(){
        super()
        this.setState = {}
        this.animalService = new AnimalService()
    }

    componentDidMount(){
        this.animalService.getAll().then(
            data => this.setState({
                animalsData: data
            })
        )
    }

    render() {

        // if(this.props.animalsData.length === 0){
        //     return(
        //         <div>
        //             <h2>Animal's List</h2>
        //             <h4>No Animals were found</h4>
        //         </div>
        //     )
        // }

        return (
            <div className='Animals'>
                <h2>Animal's List</h2>
                <ul className='list-unstyled'>
                    {this.props.animalsData.map((animal) => {
                        return(
                            <li key={animal.id} className="AnimalCard">
                                <div className="AnimalCard__left__image-date">
                                    <img src="" alt="jaribu img" />
                                    <p>Since {animal.arrivalDate}</p>
                                </div>
                                <div className="AnimalCard__right__detail">
                                    <div className="AnimalCard__name-gender-age">
                                        <p>Name: {animal.name}</p>
                                        <p>Gender: {animal.gender}</p>
                                        <p>{animal.age} years</p>
                                    </div>
                                    <div className="AnimalCard__height-weight">
                                        <p>Height: {animal.height}</p>
                                        <p>weight: {animal.weight}</p>
                                    </div>
                                    <div className="AnimalCard__parents">
                                        <p>Father: {animal.fatherId}</p>
                                        <p>Father: {animal.motherId}</p>
                                    </div>
                                </div>
                            </li>
                        )

                    })}

                </ul>
            </div>
        );
    }
}

