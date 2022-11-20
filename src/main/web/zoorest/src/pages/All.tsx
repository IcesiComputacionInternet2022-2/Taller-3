import {Search} from "../components/Search";
import {List} from "../components/List";

export const All = (
    props : {

    }
) => {
    return (
        <div className={"flex flex-col space-y-2"}>
            <Search/>
            <List/>
        </div>
    );
}