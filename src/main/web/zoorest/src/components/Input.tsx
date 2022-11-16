export const Input = (
    props : {
        placeHolder : string,
        rounded : string,
        size : string,
        font : string,
        margin : string,
        color : string,
        focus? : string,
        hover? : string
    }
) => {
    const styles : string = `${props.margin} ${props.rounded} ${props.size} ${props.font} ${props.color}`;

    return (
        <input  placeholder={props.placeHolder} className={`px-[0.60625rem] py-[0.3125rem] ${props.focus} ${props.hover} ${styles} focus:outline-none`}/>
    );
}