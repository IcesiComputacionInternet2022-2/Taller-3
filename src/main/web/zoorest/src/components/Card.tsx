import React from "react";

export const Card = (
    props : {
        isForm : boolean,
        children? : React.ReactNode,
        onSubmit? : {(e : React.FormEvent) : any},
        size : string,
        color : string,
        rounded : string,
        flex? : string,
        blur? : string
        shadow? : string,
        spacing? : string
    }
) => {
    if (props.isForm) {
        return (
            <form autoComplete={"off"} onSubmit={props.onSubmit}
                  className={`${props.flex === undefined ? "" : props.flex} ${props.size} ${props.color} ${props.rounded} ${props.blur === undefined ? "" : props.blur} ${props.shadow === undefined ? "" : props.shadow}`}>
                {props.children}
            </form>
        );
    } else {
        return (
            <div onSubmit={props.onSubmit}
                 className={`${props.flex === undefined ? "" : props.flex} ${props.spacing === undefined ? "" : props.spacing} ${props.size} ${props.color} ${props.rounded} ${props.blur === undefined ? "" : props.blur} ${props.shadow === undefined ? "" : props.shadow}`}>
                {props.children}
            </div>
        );
    }
}