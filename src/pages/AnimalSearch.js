import React, { Component } from 'react';

import './styles/AnimalSearch.css'

import { AnimalService } from '../service/AnimalService';
import {Link} from 'react-router-dom';
import jaribuPhoto from '../images/jaribuIRL.jpg'
import Parent from '../components/Parent';
class AnimalSearch extends Component {

    constructor(){
        super()
        this.state ={
            searchName : '',
            animalSearched: {
                id:'',
                name:'',
                gender:'',
                age:'',
                weight:'',
                height:'',
                arrivalDate:'',
                father:{
                    id:'',
                    name:'',
                    gender:'',
                    weight:'',
                    height:'',
                    arrivalDate:''
                },
                mother:{
                    id:'',
                    name:'',
                    gender:'',
                    weight:'',
                    height:'',
                    arrivalDate:''
                }
            }
        }
        this.animalService = new AnimalService()
    }


    handleChange = (e) => {
        this.setState({
            searchName: e.target.value
        })
    }

    handleClick = async (e) => {
        try{
            await this.animalService.findByName(this.state.searchName).then(
                data => this.setState({
                    animalSearched: data
                })
            )
        }catch(e){
            console.log(e)
        }

    }

    render() {

        const animalData = this.state.animalSearched


        return (
            <div className='AnimalSearch'>
                <h2>Search animal (Only working rn with animals with both parents ;-;)</h2>
                <div className="searchRow">
                    <div className="input">
                        <input
                            onChange={this.handleChange}
                            className='form-control'
                            type="text"
                            name="name"
                            placeholder="Search by name"
                            value={this.state.searchName}
                        />
                    </div>
                    <Link className='btn btn-primary' onClick={this.handleClick}>Search</Link>
                </div>
                <div className="result">
                    <div className="animalInfoCard">
                        <h4>Information</h4>
                        <p style={{fontSize: 'x-small'}}>ID # {animalData.id || 'XXXX-XXXX-XXXX-XXXX'}</p>
                        <div className="animalCard__info-img">
                            <img src={jaribuPhoto} alt="Jaribu img" />
                            <div className="animalCard__info">
                                <div>Name: {animalData.name || 'name'}</div>
                                <div>Gender: {animalData.gender || '??'}</div>
                                <div>Age: {animalData.age || '??yo'}</div>
                            </div>
                        </div>
                        <div className="eights">
                            <div>Height: {animalData.height || '?? cm'}</div>
                            <div>Weight: {animalData.height || '?? lb'}</div>
                        </div>
                        <div className='longLine'>Father Id: {animalData.father.id || 'XXXX-XXXX-XXXX-XXXX'}</div>
                        <div className='longLine'>Father Id: {animalData.mother.id|| 'XXXX-XXXX-XXXX-XXXX'}</div>
                        <div style={{fontSize: 'x-small'}}>Since {animalData.arrivalDate || '0000-00-00 00:00:00'}</div>
                        
                    </div>
                    <div className="parentsInfo">
                        <h4>Parents</h4>
                        <Parent title='Father' dataParent={animalData.father}></Parent>
                        <Parent title='Mother' dataParent={animalData.mother}></Parent>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default AnimalSearch;