import {Card} from "../components/Card";
import React, {useState} from "react";
import {Input} from "../components/Input";
import {ToggleButton} from "../components/ToggleButton";
import {Styles} from "../tailwind/Styles";
import {useNavigate} from "react-router-dom";

const S = new Styles();

export const Add = () => {
    const navigate = useNavigate();
    let inputStylesAsString : string = "";
    for (const [_, value] of Object.entries(S.INPUT_STYLES)) {
        inputStylesAsString += " " + value;
    }

    let [animal, setAnimal] = useState({
        'name' : '',
        'sex' : 'M',
        'weight' : '0.0',
        'length' : '0.0',
        'age' : 0.0,
        'arrivalDate' : "2000-01-01T00:00:00",
        'father' : null,
        'mother' : null
    });

    const ERROR_STYLE = "text-red-500 font-medium text-xs";
    let [errorMessage, setErrorMessage] = useState( "");
    let [errorStyle, setErrorStyle] = useState(ERROR_STYLE);

    const toggleFunction = (e : React.MouseEvent) => {
        e.preventDefault();
        const parentToggle = document.getElementById("toggleButtonsSex");
        const children = parentToggle!!.children;
        for (let i = 0; i < children.length; i++) {
            const child : HTMLButtonElement = children[i] as HTMLButtonElement;
            child.className = child.className.replaceAll(S.selectedButton, S.unselectedButton);
        }
        let clickedButton : HTMLButtonElement = (e.target as HTMLButtonElement);
        clickedButton.className = clickedButton.className.replaceAll(S.unselectedButton, S.selectedButton);
        setAnimal((prevState) => {
            return {
                ...prevState,
                sex : `${(prevState.sex === 'M') ? 'F' : 'M'}`
            }
        });
    }

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        let name = (e.target as HTMLInputElement).name;
        let value = (e.target as HTMLInputElement).value;
        setAnimal((prevState) => {
            return {
                ...prevState,
                [name] : value
            }
        });
    }

    let OK : boolean = true;
    const handleSubmit = async (e: React.FormEvent) => {
        setErrorStyle("text-gray-700 font-medium text-xs")
        setErrorMessage("Awaiting server response...")
        e.preventDefault();
        await sendPost().then((res) => {
            if (OK) navigate('/all');
            else {
                let res_ = (res as {code : string, message : string});
                let resUnknown = res as {timestamp : string, status : number, error : string, path : string}
                let message = (res_.message);
                let code = (res_.code)
                setErrorStyle(ERROR_STYLE);
                setErrorMessage(`${message === undefined ? resUnknown.error : message} (\nError Code: ${code === undefined ? resUnknown.status : code})`);
            }
        });
    }

    const correctParents = async () => {
        if (animal.father === '') {
        setAnimal((prevState) => {
            return {
                ...prevState,
                father: null
            }
        });
    }
    if (animal.mother === '') {
        setAnimal((prevState) => {
            return {
                ...prevState,
                father: null
            }
        });
    }
    }

    const buildJson = async () => {
        await correctParents();
        return JSON.stringify(animal);
    }

    const sendPost = async () => {
        let body = await buildJson();
        return fetch('http://localhost:8080/animals', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: body
        })
            .then(res => res.json())
            .then((res) => {
                if (res.hasOwnProperty("code") || res.hasOwnProperty("error")) {
                    OK = false;
                    return res;
                }
            });
    }

    return (
        <div className={"flex flex-col justify-center items-center space-x-4 mb-[3rem]"}>
            <Card isForm={true} onSubmit={handleSubmit} flex={S.flexAdd} rounded={S.CARD_STYLES.rounded} size={S.CARD_STYLES.size} color={S.CARD_STYLES.color} shadow={S.CARD_STYLES.shadow}>
                <Input id={"new-name"} type={"text"} placeHolder={"Name"} focus={S.INPUT_STYLES.focus} rounded={S.INPUT_STYLES.rounding} size={S.INPUT_STYLES.size} font={S.INPUT_STYLES.font} color={S.INPUT_STYLES.color} onChange={handleChange}/>
                <ToggleButton title={"Sex"} size={2} labels={S.TOGGLE_STYLES.labels} colors={S.TOGGLE_STYLES.colors} buttonSizes={S.TOGGLE_STYLES.sizes} onClick={toggleFunction} background={S.TOGGLE_STYLES.background} hover={S.TOGGLE_STYLES.hover}/>
                <Input id={"new-weight"} type={"number"} placeHolder={"Weight"} focus={S.INPUT_STYLES.focus} rounded={S.INPUT_STYLES.rounding} size={S.INPUT_STYLES.size} font={S.INPUT_STYLES.font} color={S.INPUT_STYLES.color} onChange={handleChange}/>
                <Input id={"new-age"} type={"number"} placeHolder={"Age"} focus={S.INPUT_STYLES.focus} rounded={S.INPUT_STYLES.rounding} size={S.INPUT_STYLES.size} font={S.INPUT_STYLES.font} color={S.INPUT_STYLES.color} onChange={handleChange}/>
                <Input id={"new-length"} type={"number"} placeHolder={"Length"} focus={S.INPUT_STYLES.focus} rounded={S.INPUT_STYLES.rounding} size={S.INPUT_STYLES.size} font={S.INPUT_STYLES.font} color={S.INPUT_STYLES.color} onChange={handleChange}/>
                <Input id={"new-arrivalDate"} type={"datetime-local"} dateStyles={S.DATE_STYLES} placeHolder={"Arrival Date"} focus={S.INPUT_STYLES.focus} rounded={S.INPUT_STYLES.rounding} size={S.INPUT_STYLES.size} font={S.INPUT_STYLES.font} color={S.INPUT_STYLES.color} onChange={handleChange}/>
                <Input id={"new-Father"} type={"text"} placeHolder={"Father"} focus={S.INPUT_STYLES.focus} rounded={S.INPUT_STYLES.rounding} size={S.INPUT_STYLES.size} font={S.INPUT_STYLES.font} color={S.INPUT_STYLES.color} onChange={handleChange}/>
                <Input id={"new-Mother"} type={"text"} placeHolder={"Mother"} focus={S.INPUT_STYLES.focus} rounded={S.INPUT_STYLES.rounding} size={S.INPUT_STYLES.size} font={S.INPUT_STYLES.font} color={S.INPUT_STYLES.color} onChange={handleChange}/>
                <Input id={"new-submit"} placeHolder={"Create"} rounded={S.INPUT_STYLES.rounding} size={S.TOGGLE_STYLES.sizes} font={S.INPUT_STYLES.font} color={S.INPUT_STYLES.color} type={"submit"} hover={S.TOGGLE_STYLES.hover}/>
            </Card>
            <p className={errorStyle}>{errorMessage}</p>
        </div>
    );
}