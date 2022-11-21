import {Card} from "../components/Card";
import {Styles} from "../tailwind/Styles";

const S = new Styles();

export const NotFound404 = (
    props: {
        query : string
    }
) => {
    return (
        <div className={"flex flex-col justify-center items-center w-full"}>
            <Card isForm={false} size={S.SEARCH_STYLES.cardSize} color={S.SEARCH_STYLES.cardColor} rounded={S.CARD_STYLES.rounded} flex={S.flexAll}>
                <h2 className={"text-lg font-semibold text-orange-500"}>It seems you're trying to reach an non-existing site, we're sorry :(</h2>
                <h1 className={"font-bold text-xlg text-orange-600"}>404 Not Found: </h1> "{props.query}"
            </Card>
        </div>
    );
}