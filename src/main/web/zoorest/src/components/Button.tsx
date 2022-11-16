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

    return (
        <button id={props.id} name={props.label} onClick={props.onClick} className={`${dimensions} ${props.rounded} ${props.color} ${props.focus} ${props.hover} focus:outline-none`}>{props.label}</button>
    );
}