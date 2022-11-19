import React from "react";

export const Card = (
    props : {
        children? : React.ReactNode,
        action : string,
        size : string,
        color : string,
        rounded : string,
        flex? : string,
        blur? : string
        shadow? : string
    }
) => {
    return (
        <form action={props.action} className={`${props.flex} ${props.size} ${props.color} ${props.rounded} ${props.blur} ${props.shadow}`}>
            {props.children}
        </form>
    );
}