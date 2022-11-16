import React, {MouseEventHandler} from "react";
import {Button} from "./Button";

export const ToggleButton = (
    props : {
        title : string,
        size : number,
        labels : string[],
        colors : string[],
        buttonSizes : string,
        background : string,
        onClick : {(e : React.MouseEvent) : any}
    }
) => {
    return (
        <div className={`flex justify-center items-center flex-col ${props.background}`}>
            <h1>{props.title}</h1>
            <div id={"toggleButtons" + props.title} className={"flex justify-center items-center"}>
                {Array.from({length: props.size}, (_, index) => {
                    const rounding = index === 0 ? "rounded-bl-lg" : index === props.size - 1 ? "rounded-br-lg" : "rounded-none";
                    return <Button id={"cButton" + index} key={index} label={props.labels[index]} onClick={props.onClick} color={props.colors[index]} size={props.buttonSizes} rounded={rounding}/>
                })}
            </div>
        </div>
    );
}