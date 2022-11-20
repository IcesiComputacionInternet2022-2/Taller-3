import React, {MouseEventHandler} from "react";

export const Button = (
    props : {
        label : string,
        size : string,
        color : string,
        rounded : string,
        focus? : string,
        hover? : string,
        id? : string,
        onClick : { (e : React.MouseEvent): any }
    }
) => {
    const dimensions : string = `${props.size}`;
    // props.focus = props.focus === undefined ? "" : props.focus;
    return (
        <button id={props.id} name={props.label} onClick={props.onClick} className={`${dimensions} ${props.rounded} ${props.color} focus:outline-none ${props.hover === undefined ? "" : props.hover} ${props.focus === undefined ? "" : props.focus}`}>{props.label}</button>
    );
}