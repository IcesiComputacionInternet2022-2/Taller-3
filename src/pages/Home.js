import React, { Component } from 'react';

import './styles/Home.css'

import HomeCard from '../components/HomeCard'
import plus from '../images/plus-circle.svg'
import list from '../images/list.svg'
import search from '../images/search.svg'

export default class Home extends Component {
    
    constructor(){
        super()
        this.state = {
            homeCardData: [
                {   
                    key: 1,
                    title: "Crear nuevo Animal",
                    imgIcon: plus,
                    description: "Permite crear un nuevo Animal y agregarlo a la base de datos",
                    buttonText: "Crea un animal",
                    buttonPath: "/animals/new"
                },
                {
                    key: 2,
                    title: "Listar los Animales",
                    imgIcon: list,
                    description: "Muestra una lista con los animales ya registrados en la base de datos",
                    buttonText: "Listar animales",
                    buttonPath: "/animals"
                },
                {
                    key: 3,
                    title: "Buscar un Animal",
                    imgIcon: search,
                    description: "Busca en la base de datos un animal a partir de su nombre",
                    buttonText: "Buscar",
                    buttonPath: "/animals/search"
                }
            ]
        }

    }
    
    render() {
        const cards = this.state.homeCardData

        return (
            <div className='Home'>
                    <div className="container">
                        <div className="row">
                            {cards.map(card => (
                                <div key={card.key} className="col-4">
                                    <HomeCard
                                        title={card.title} 
                                        imgIcon={card.imgIcon}
                                        description={card.description}
                                        buttonText={card.buttonText}
                                        buttonPath={card.buttonPath}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
            </div>
        );
    }
}