export const Input = (
    props : {
        id : string,
        placeHolder : string,
        rounded : string,
        size : string,
        font : string,
        color : string,
        type : string,
        dateStyles? : {value : string},
        focus? : string,
        hover? : string
    }
) => {
    const styles : string = `${props.rounded} ${props.size} ${props.font} ${props.color}`;

    if (props.dateStyles === undefined) return (
        <input id={props.id} type={props.type} placeholder={props.placeHolder} className={`px-[0.60625rem] py-[0.3125rem] ${props.focus} ${props.hover} ${styles} focus:outline-none`}/>
    ); else return (
        <input id={props.id} type={props.type} placeholder={props.placeHolder} className={`px-[0.60625rem] py-[0.3125rem] ${props.focus} ${props.hover} ${styles} focus:outline-none`}
        value={props.dateStyles.value}/>
    );
}