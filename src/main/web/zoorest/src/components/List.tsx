import {useEffect, useState} from "react";
import {Card} from "./Card";
import {Styles} from "../tailwind/Styles";
import {Animal} from "../model/Animal";
import {AnimalRow} from "./AnimalRow";

const S = new Styles();

export const List = (
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

    useEffect(() => {
        setLoading(true);
        getAnimals();
    }, []);

    if (loading) {
        return (
            <p>Loading...</p>
        );
    }

    return (
        <Card isForm={false} size={S.SEARCH_STYLES.listCardSize} color={S.SEARCH_STYLES.color} rounded={S.CARD_STYLES.rounded} spacing={S.SEARCH_STYLES.listCardSpacing}>
            <h1 className={"font-semibold text-xl text-center"}>Animals</h1>
            {animals.map((animal : Animal) =>
                <AnimalRow animal={animal}/>
            )}
        </Card>
    );
}