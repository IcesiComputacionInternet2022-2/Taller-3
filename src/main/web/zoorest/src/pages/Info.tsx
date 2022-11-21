import {Card} from "../components/Card";
import {Styles} from "../tailwind/Styles";
import {Link} from "react-router-dom";

const S = new Styles();

export const Info = () => {
    return (
        <div className={"flex flex-col justify-center items-center"}>
            <Card isForm={false} size={S.SEARCH_STYLES.cardSize} color={S.SEARCH_STYLES.cardColor} rounded={S.CARD_STYLES.rounded} spacing={"px-4 py-8"}>
                <h1 className={"font-bold text-6xl text-center c-type-orange-dark"}>React Zoo</h1>
                <h4 className={"font-light text-center text-lg italic c-type-orange-dark"}> A React + Spring API tool</h4>
                <div className={"m-8"}/>
                <p className={"font-medium text-center c-type-orange-dark"}>Welcome to this react + spring application. To get started, <Link className={S.inlineLink} to={"/new"}>add</Link> an animal.</p>
                <p className={"font-medium text-center c-type-orange-dark"}>This application can host <a className={S.inlineLink} target={"_blank"} href={"https://en.wikipedia.org/wiki/Anteater"}>Anteaters</a>. When filling out the form, mind the following parameters: </p>
                <div className={"m-8"}/>
                <ul className={"list-disc list-inside flex flex-col justify-center items-center space-y-2"}>
                    <li className={S.listItem}>"<b>Name</b>" can only contain <b>letters and spaces</b>, and can't be <b>duplicate</b> (check <Link className={S.inlineLink} to={"/all"}>here</Link> first to check name availability)</li>
                    <li className={S.listItem}>The maximum <b>age</b> of an Anteater is <b>31 years</b>. The "<b>Age</b>" field allows decimal ages, and is expected to be given in <b>years</b></li>
                    <li className={S.listItem}>The "<b>Weight</b>" field is constrained between <b>1600 grams</b> and <b>50000 grams</b>. The "<b>Weight</b>" field allows decimal ages, and is expected to be given in <b>grams (g)</b></li>
                    <li className={S.listItem}>The "<b>Length</b>" field is constrained between <b>30 centimeters</b> and <b>220 centimeters</b>. The "<b>Length</b>" field allows decimal ages, and is expected to be given in <b>centimeters (cm)</b></li>
                    <li className={S.listItem}>Make sure the <b>arrival date</b> is correct and not set in the future. The format follows <a className={S.inlineLink} target={"_blank"} href={"https://en.wikipedia.org/wiki/ISO_8601"}>ISO 8601</a> with no timezone</li>
                    <li className={S.listItem}>Input the <b>Father and Mother's names</b> only if they <b>already exist</b> within the Zoo database. Otherwise, creation will not be possible <br/>
                    Also make sure the mother's sex is "<b>Female</b>" and the father's sex is "<b>Male</b>". These two fields are optional, and can be left blank <b>only together</b></li>
                </ul>
            </Card>
        </div>
    );
}