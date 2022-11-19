import {Card} from "../components/Card";
import React, {MouseEventHandler, useState} from "react";
import {Input} from "../components/Input";
import {ToggleButton} from "../components/ToggleButton";
import {Button} from "../components/Button";

const handlePostRequest = () => {

}

export const Add = (
    props : {

    }
) => {

    /*These are all styles, should be moved into separate enum or interface style file to follow solid*/

    const cardSize = "w-[22rem] h-[40rem]";
    const columnFlex : string = "flex flex-col items-center justify-around";
    const selectedButton : string = "bg-orange-200";
    const unselectedButton : string = "bg-orange-500";

    const TOGGLE_STYLES = {
        'labels' : ["Male", "Female"],
        'colors' : [selectedButton, unselectedButton],
        'sizes' : 'w-32 h-10',
        'background': 'bg-orange-500/50 rounded-lg'
    };

    const INPUT_STYLES = {
        'focus' : 'border-b-2 border-transparent transition ease-in-out delay-450 focus:border-solid focus:border-amber-700 focus:bg-orange-200 focus:drop-shadow-shine-field focus:placeholder-orange-400 focus:text-orange-600',
        'color' : 'bg-orange-500/50 text-white placeholder-orange-200 c-type-orange',
        'rounding' : 'rounded-[0.315rem]',
        'size' : 'h-[2rem] w-[16rem]',
        'font' : 'text-[1rem] text-center'
    };

    let inputStylesAsString : string = "";
    for (const [_, value] of Object.entries(INPUT_STYLES)) {
        inputStylesAsString += " " + value;
    }

    const DATE_STYLES = {
        'value' : 'DD/MM/YYYYTHH:mm'
    }

    let selectedSex : string = "Male"; // This is a default to prevent user errors

    const toggleFunction = (e : React.MouseEvent) => {
        const parentToggle = document.getElementById("toggleButtonsSex");
        const children = parentToggle!!.children;
        for (let i = 0; i < children.length; i++) {
            const child : HTMLButtonElement = children[i] as HTMLButtonElement;
            child.className = child.className.replaceAll(selectedButton, unselectedButton);
        }
        let clickedButton : HTMLButtonElement = (e.target as HTMLButtonElement);
        clickedButton.className = clickedButton.className.replaceAll(unselectedButton, selectedButton);
        selectedSex = clickedButton.name;
    }

    return (
        <div className={"flex flex-col justify-center items-center"}>
            <Card action={"/all"} flex={columnFlex} rounded={"rounded-lg"} size={cardSize} color={"bg-orange-400"} shadow={"drop-shadow-shine"}>
                <Input id={"new-name"} type={"text"} placeHolder={"Name"} focus={INPUT_STYLES.focus} rounded={INPUT_STYLES.rounding} size={INPUT_STYLES.size} font={INPUT_STYLES.font} color={INPUT_STYLES.color}/>
                <ToggleButton title={"Sex"} size={2} labels={TOGGLE_STYLES.labels} colors={TOGGLE_STYLES.colors} buttonSizes={TOGGLE_STYLES.sizes} onClick={toggleFunction} background={TOGGLE_STYLES.background}/>
                <Input id={"new-weight"} type={"number"} placeHolder={"Weight"} focus={INPUT_STYLES.focus} rounded={INPUT_STYLES.rounding} size={INPUT_STYLES.size} font={INPUT_STYLES.font} color={INPUT_STYLES.color}/>
                <Input id={"new-age"} type={"number"} placeHolder={"Age"} focus={INPUT_STYLES.focus} rounded={INPUT_STYLES.rounding} size={INPUT_STYLES.size} font={INPUT_STYLES.font} color={INPUT_STYLES.color}/>
                <Input id={"new-length"} type={"number"} placeHolder={"Length"} focus={INPUT_STYLES.focus} rounded={INPUT_STYLES.rounding} size={INPUT_STYLES.size} font={INPUT_STYLES.font} color={INPUT_STYLES.color}/>
                <Input id={"new-arrivalDate"} type={"datetime-local"} placeHolder={"Length"} focus={INPUT_STYLES.focus} rounded={INPUT_STYLES.rounding} size={INPUT_STYLES.size} font={INPUT_STYLES.font} color={INPUT_STYLES.color}/>
                <Input id={"new-Father"} type={"text"} placeHolder={"Father"} focus={INPUT_STYLES.focus} rounded={INPUT_STYLES.rounding} size={INPUT_STYLES.size} font={INPUT_STYLES.font} color={INPUT_STYLES.color}/>
                <Input id={"new-Mother"} type={"text"} placeHolder={"Mother"} focus={INPUT_STYLES.focus} rounded={INPUT_STYLES.rounding} size={INPUT_STYLES.size} font={INPUT_STYLES.font} color={INPUT_STYLES.color}/>
                <Input id={"new-submit"} placeHolder={"Create"} rounded={INPUT_STYLES.rounding} size={TOGGLE_STYLES.sizes} font={INPUT_STYLES.font} color={INPUT_STYLES.color} type={"submit"}/>
            </Card>
        </div>
    );
}