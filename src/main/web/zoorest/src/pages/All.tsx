import {Search} from "../components/Search";
import {List} from "../components/List";
import {Card} from "../components/Card";
import {Styles} from "../tailwind/Styles";
import React, {useState} from "react";
import {AnimalType} from "../model/AnimalType";

const S = new Styles();

export const All = (
    props : {

    }
) => {

    const [animals, setAnimals] = useState([]);
    const [loading, setLoading] = useState(false);

    const getAnimals = () => {
        fetch('http://localhost:8080/animals')
            .then((res) => res.json())
            .then(data => {
                setAnimals(data);
                setLoading(false);
            })
    }
    
    const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
        let value = (e.target as HTMLInputElement).value;
        animals.forEach((animal : AnimalType) => {
            console.log(animal.name.includes(value))
        })
        // setAnimals()
    }

    return (
        <div className={"flex flex-col justify-center items-center"}>
            <Card isForm={false} spacing={S.SEARCH_STYLES.cardSpacing} size={S.SEARCH_STYLES.cardSize} color={S.SEARCH_STYLES.cardColor} rounded={S.CARD_STYLES.rounded} flex={S.flexAll}>
                {/*<Search onChange={handleSearch}/>*/}
                <List animalState={[animals, setAnimals]} getAnimals={getAnimals} loadingState={[loading, setLoading]}/>
            </Card>
        </div>
    );
}