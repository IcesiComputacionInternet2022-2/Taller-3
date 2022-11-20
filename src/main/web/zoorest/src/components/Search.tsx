import {Input} from "./Input";
import {Styles} from "../Styles";

const S = new Styles();

export const Search = (
    props : {

    }
) => {
    return (
        <div>
            <Input id={"all-search"} placeHolder={"Search animal... (not working)"} rounded={S.INPUT_STYLES.rounding} size={S.INPUT_STYLES.size} font={S.INPUT_STYLES.font} color={S.INPUT_STYLES.color} type={"text"}/>
        </div>
    );
}