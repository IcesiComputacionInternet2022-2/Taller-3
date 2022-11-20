import {Link} from "react-router-dom";

export const Navbar = (
    props : {

    }
) => {

    const linkHoverStyle : string = "transition delay-250 ease-in hover:text-white hover:border-b-white hover:rounded-[0.35rem]";
    const linkFocusStyle : string = "focus:outline-none focus:border-b-white focus:rounded-[0.35rem] focus:text-white";
    const linkStyle : string = `font-bold text-orange-600 border-solid border-transparent border-4 ${linkHoverStyle} ${linkFocusStyle}`;
    const homeStyle : string = `text-2xl font-extrabold text-orange-700 ${linkHoverStyle} ${linkFocusStyle}`;

    return (
        <header className={"h-12 mb-8 px-[7rem] bg-orange-400 flex justify-between items-center drop-shadow-shine sticky top-0 z-50"}>
            <div>
                <Link to={"/"} className={homeStyle}>React Zoo</Link>
            </div>
            <div className={"w-64 flex justify-between items-center"}>
                <Link id={"nav-all"} to={"/all"} className={linkStyle}>ALL</Link>
                <Link id={"nav-new"} to={"/new"} className={linkStyle}>ADD</Link>
                <Link to={"/info"} className={linkStyle}>INFO</Link>
            </div>
        </header>
    );
}