import {Input} from "./Input";
import {Styles} from "../tailwind/Styles";
import React from "react";

const S = new Styles();

export const Search = (
    props : {

    }
) => {
    return (
        <Input id={"all-search"} type={"text"} placeHolder={"Search animal... (not working)"} focus={S.SEARCH_STYLES.focus} rounded={S.INPUT_STYLES.rounding} size={S.SEARCH_STYLES.size} font={S.INPUT_STYLES.font} color={S.SEARCH_STYLES.color}/>

    );
}