import React, {useEffect, useState} from "react";
import {Card} from "./Card";
import {Styles} from "../tailwind/Styles";
import {AnimalType} from "../model/AnimalType";
import {AnimalRow} from "./AnimalRow";
import {useNavigate} from "react-router-dom";

const S = new Styles();

export const List = (
    props : {
        animalState : [any,  React.Dispatch<React.SetStateAction<any>>],
        loadingState : [any,  React.Dispatch<React.SetStateAction<any>>],
        getAnimals : {() : any}
    }
) => {

    const navigate = useNavigate();

    const handleView = (e : React.MouseEvent<Element, MouseEvent>) => {
        let animal;
        try {
            animal = ((e.target as HTMLDivElement).children[0] as HTMLBodyElement).innerHTML;
        } catch (_) {
            animal = (((e.target as HTMLButtonElement).parentElement as HTMLDivElement).parentElement as HTMLDivElement).children[0].innerHTML;
        }
        // console.log(animal);
        navigate(`/${animal}`)
    }

    const handleDelete = (e : React.MouseEvent<Element, MouseEvent>) => {

    }

    useEffect(() => {
        props.loadingState[1](true);
        props.getAnimals();
    }, []);

    if (props.loadingState[0]) {
        return (
            <p>Loading...</p>
        );
    }

    return (
        <Card flex={S.SEARCH_STYLES.listCardFlex} isForm={false} size={S.SEARCH_STYLES.listCardSize} color={S.SEARCH_STYLES.listCardColor} rounded={S.CARD_STYLES.rounded} spacing={S.SEARCH_STYLES.listCardSpacing}>
            <h1 className={"font-semibold text-2xl text-center"}>Animals</h1>
            {props.animalState[0].map((animal : AnimalType) =>
                <AnimalRow animal={animal} style={`${S.ROW.style} ${S.ROW.hover}`} onView={handleView} onDelete={handleDelete}/>
            )}
        </Card>
    );
}