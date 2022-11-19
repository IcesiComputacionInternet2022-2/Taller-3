import {Link} from "react-router-dom";

export const Navbar = (
    props : {

    }
) => {

    const linkStyle : string = "transition delay-250 ease-in hover:text-white";
    const homeStyle : string = "transition delay-250 ease-in hover:text-white";

    return (
        <nav className={"h-12 mb-8 px-[7rem] bg-orange-400 flex justify-between items-center drop-shadow-shine"}>
            <div>
                <Link to={"/"} className={homeStyle}>React Zoo</Link>
            </div>
            <div className={"w-64 flex justify-between items-center"}>
                <Link to={"/all"} className={linkStyle}>ALL</Link>
                <Link to={"/new"} className={linkStyle}>ADD</Link>
                <Link to={"/info"} className={linkStyle}>INFO</Link>
            </div>
        </nav>
    );
}