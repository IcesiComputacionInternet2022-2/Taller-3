import React from "react";

export const Card = (
    props : {
        children? : React.ReactNode
        height : string,
        width : string,
        color : string,
        rounded : string,
        flex? : string,
        blur? : string
        shadow? : string
    }
) => {
    return (
        <div className={`${props.flex} ${props.width} ${props.height} ${props.color} ${props.rounded} ${props.blur} ${props.shadow}`}>
            {props.children}
        </div>
    );
}