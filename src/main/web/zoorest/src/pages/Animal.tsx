import {useLocation} from "react-router-dom";
import {AnimalType} from "../model/AnimalType";
import React, {useEffect, useState} from "react";
import {NotFound404} from "./NotFound404";
import {Card} from "../components/Card";
import {Styles} from "../tailwind/Styles";

const S = new Styles();

export const Animal = (
    props: {}
) => {

    const location = useLocation();
    const SPACE = "%20";
    const name = location.pathname.replaceAll("/", "");

    let [animal, setAnimal] = useState({} as AnimalType);
    let [error, setError] = useState(false);

    const handleGet = async () => {
        let input: string = name.includes(SPACE) ? `/name=${name}` : `/id=${name}`;
            return fetch(`http://localhost:8080/animals${input}`)
                .then((res) => res.json())
                .then(res => (res as AnimalType))
                .catch(_ => null)

    }

    useEffect(() => {
        let res_;
        handleGet().then((res : AnimalType | null) => {
            if (res !== null) {
                res_ = res;
                setAnimal(res_);
            } else {
                setError(true);
            }
        });
    }, [])

    if (!error && animal.name !== undefined) return (
        <div>
            <div className={"flex flex-col justify-center items-center space-x-4 mb-[3rem]"}>
                <Card isForm={false} flex={"flex flex-col items-center justify-center space-y-12"} rounded={S.CARD_STYLES.rounded} size={"w-[32rem] h-[40rem]"} color={S.CARD_STYLES.color} shadow={S.CARD_STYLES.shadow}>
                    <h1>Animal #{animal.id}</h1>
                    <Card flex={"flex flex-col space-y-1 items-center justify-center"} isForm={false} size={"h-auto w-4/5"}
                          color={S.TOGGLE_STYLES.colors[0]} rounded={S.CARD_STYLES.rounded}>
                        <h2>Basic information</h2>
                        <div className={"flex flex-row space-x-8"}>
                            <h3>Name: {animal.name}</h3>
                            <h3>Sex: {animal.sex}</h3>
                            <h3>Age: {animal.age}</h3>
                        </div>
                    </Card>
                    <Card flex={"flex flex-col space-y-1 items-center justify-center"} isForm={false} size={"h-auto w-4/5"}
                          color={S.TOGGLE_STYLES.colors[0]} rounded={S.CARD_STYLES.rounded}>
                        <h2>Physical Information</h2>
                        <div className={"flex flex-row space-x-8"}>
                            <h3>Length: {animal.length} cm</h3>
                            <h3>Weight: {animal.weight} g</h3>
                        </div>
                    </Card>
                    <Card flex={"flex flex-col space-y-1 items-center justify-center"} isForm={false} size={"h-auto w-4/5"}
                          color={S.TOGGLE_STYLES.colors[0]} rounded={S.CARD_STYLES.rounded}>Arrival Date: {animal.arrivalDate}</Card>
                    <Card flex={"flex flex-col space-y-1 items-center justify-center"} isForm={false} size={"h-auto w-4/5"}
                          color={S.TOGGLE_STYLES.colors[0]} rounded={S.CARD_STYLES.rounded}>
                        <h2>Parents Information</h2>
                        <div className={"flex flex-col space-y-4 items-center justify-center"}>
                            <h3>Father: {animal.father}</h3>
                            <h3>Mother: {animal.mother}</h3>
                        </div>
                    </Card>
                </Card>
            </div>
        </div>
    ); else return <NotFound404 query={name.replaceAll(SPACE, " ")} />
}