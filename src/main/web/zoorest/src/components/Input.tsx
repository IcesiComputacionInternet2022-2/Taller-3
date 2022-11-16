export const Input = (
    props : {
        placeHolder : string,
        rounded : string,
        height : string,
        width : string,
        fontSize : string,
        align : string,
        margin : string
    }
) => {
    const styles : string = `${props.margin} ${props.rounded} ${props.height} ${props.width} ${props.fontSize} ${props.align} bg-orange-500/25`;
    const focus : string = `border-b-2 border-transparent transition ease-in-out delay-450 focus:outline-none focus:border-solid focus:border-amber-700 focus:bg-orange-300/80 focus:drop-shadow-shine-field`;
    return (
        <input  placeholder={props.placeHolder} className={`px-[0.60625rem] py-[0.3125rem] ${focus} ${styles}`} />
    );
}