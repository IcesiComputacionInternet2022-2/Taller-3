import React from "react";

export const Input = (
    props : {
        id : string,
        placeHolder : string,
        rounded : string,
        size : string,
        font : string,
        color : string,
        type : string,
        onChange? : { (e: React.FormEvent<HTMLInputElement>) : any}
        dateStyles? : {value : string},
        focus? : string,
        hover? : string
    }
) => {
    const styles : string = `${props.rounded} ${props.size} ${props.font} ${props.color}`;
    const name : string = props.placeHolder[0].toLowerCase() + props.placeHolder.substring(1).replaceAll(" ", "");
    if (props.dateStyles === undefined) return (
        <input onChange={props.onChange} name={name} id={props.id} type={props.type} placeholder={props.placeHolder} className={`px-[0.60625rem] py-[0.3125rem] ${props.focus} ${props.hover} ${styles} focus:outline-none`}/>
    ); else return (
        <input onChange={props.onChange} name={name} id={props.id} type={props.type} placeholder={props.placeHolder} className={`px-[0.60625rem] py-[0.3125rem] ${props.focus} ${props.hover} ${styles} focus:outline-none`}
        value={props.dateStyles.value}/>
    );
}