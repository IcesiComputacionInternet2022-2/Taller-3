import {Search} from "../components/Search";
import {List} from "../components/List";
import {Card} from "../components/Card";
import {Styles} from "../tailwind/Styles";

const S = new Styles();

export const All = (
    props : {

    }
) => {
    return (
        <div className={"flex flex-col justify-center items-center"}>
            <Card isForm={false} spacing={S.SEARCH_STYLES.cardSpacing} size={S.SEARCH_STYLES.cardSize} color={S.SEARCH_STYLES.cardColor} rounded={S.CARD_STYLES.rounded} flex={S.flexAll}>
                <Search/>
                <List/>
            </Card>
        </div>
    );
}