import {useState} from "react";

export const NotFound404 = (
    props: {
        query : string
    }
) => {
    let message = `Animal '${props.query}' was not found`
    if (/[0-9]/g.test(props.query)) message = `Animal with id '${props.query}' was not found`;

    return (
        <div>
            {message}
        </div>
    );
}