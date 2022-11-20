import {AnimalType} from "../model/AnimalType";
import {Button} from "./Button";
import {Styles} from "../tailwind/Styles";
import React from "react";

const S = new Styles();

export const AnimalRow = (
    props : {
        animal : AnimalType,
        style : string,
        onView : {(e : React.MouseEvent<Element, MouseEvent>) : any},
        onDelete : {(e : React.MouseEvent<Element, MouseEvent>) : any}
    }
) => {

    return (
        <div tabIndex={0} key={props.animal.id} className={props.style} onClick={props.onView}>
            <h3 className={S.ROW.text}>{props.animal.name}</h3>
            <h3 className={S.ROW.text}>{props.animal.arrivalDate.split("T")[0]}</h3>
            <div className={"flex space-x-2 items-center justify-center"}>
                <Button focusable={-1} label={"View"} size={S.SEARCH_STYLES.buttonSize} color={S.utility} rounded={S.CARD_STYLES.rounded} onClick={props.onView} />
                {/*<Button focusable={-1} label={"Remove"} size={S.SEARCH_STYLES.buttonSize} color={S.danger} rounded={S.CARD_STYLES.rounded} onClick={props.onDelete} />*/}
            </div>
        </div>
    );
}