import React from "react";

export const Card = (
    props : {
        children? : React.ReactNode,
        onSubmit : {(e : React.FormEvent) : any},
        size : string,
        color : string,
        rounded : string,
        flex? : string,
        blur? : string
        shadow? : string
    }
) => {
    return (
        <form autoComplete={"off"} onSubmit={props.onSubmit} className={`${props.flex} ${props.size} ${props.color} ${props.rounded} ${props.blur} ${props.shadow}`}>
            {props.children}
        </form>
    );
}