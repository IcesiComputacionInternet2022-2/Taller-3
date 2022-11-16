import {Card} from "../components/Card";
import React, {MouseEventHandler} from "react";
import {Input} from "../components/Input";
import {ToggleButton} from "../components/ToggleButton";

export const Add = (
    props : {

    }
) => {

    /*These are all styles, should be moved into separate enum or interface style file to follow solid*/

    const HEIGHTS = {
        "def": "h-[38rem]",
        "sm" : "h-[20rem]"
    };

    const WIDTHS = {
        "def": "w-[22rem]",
        "lg" : "w-[32rem]"
    };

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
        'font' : 'text-[1rem] text-center',
        'margin' : 'mb-[0.25rem]'
    };

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
        <div className={"flex justify-center items-center space-x-4"}>
            <Card flex={columnFlex} rounded={"rounded-lg"} width={WIDTHS.def} height={HEIGHTS.def} color={"bg-orange-400"} shadow={"drop-shadow-shine"}>
                <Input placeHolder={"Name"} focus={INPUT_STYLES.focus} rounded={INPUT_STYLES.rounding} size={INPUT_STYLES.size} font={INPUT_STYLES.font} margin={INPUT_STYLES.margin} color={INPUT_STYLES.color}/>
                <ToggleButton title={"Sex"} size={2} labels={TOGGLE_STYLES.labels} colors={TOGGLE_STYLES.colors} buttonSizes={TOGGLE_STYLES.sizes} onClick={toggleFunction} background={TOGGLE_STYLES.background}/>
                <Input placeHolder={"Weight"} focus={INPUT_STYLES.focus} rounded={INPUT_STYLES.rounding} size={INPUT_STYLES.size} font={INPUT_STYLES.font} margin={INPUT_STYLES.margin} color={INPUT_STYLES.color}/>
                <Input placeHolder={"Age"} focus={INPUT_STYLES.focus} rounded={INPUT_STYLES.rounding} size={INPUT_STYLES.size} font={INPUT_STYLES.font} margin={INPUT_STYLES.margin} color={INPUT_STYLES.color}/>
                <Input placeHolder={"Length"} focus={INPUT_STYLES.focus} rounded={INPUT_STYLES.rounding} size={INPUT_STYLES.size} font={INPUT_STYLES.font} margin={INPUT_STYLES.margin} color={INPUT_STYLES.color}/>
                <h1>arrivalDate</h1>
                <h1>father</h1>
                <h1>mother</h1>
            </Card>

            <Card blur={"backdrop-filter-blur"} flex={columnFlex} rounded={"rounded-xl"} width={WIDTHS.lg} height={HEIGHTS.sm} color={"bg-orange-200/60"} shadow={"drop-shadow-blur"} >

            </Card>
        </div>
    );
}