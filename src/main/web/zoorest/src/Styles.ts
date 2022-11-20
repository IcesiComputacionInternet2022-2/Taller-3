export class Styles {
    columnFlex : string = "flex flex-col items-center justify-around";
    selectedButton : string = "bg-orange-300";
    unselectedButton : string = "bg-orange-500";
    
    CARD_STYLES = {
        'size': 'w-[22rem] h-[40rem]',
        'rounded' : 'rounded-lg',
        'color' : 'bg-orange-400',
        'shadow' : 'drop-shadow-shine'
    };

    TOGGLE_STYLES = {
        'labels' : ["Male", "Female"],
        'colors' : [this.selectedButton, this.unselectedButton],
        'sizes' : 'w-32 h-10',
        'background': 'bg-orange-500/50 rounded-lg',
        'hover' : 'transition delay-250 ease-in-out hover:bg-orange-200 active:bg-orange-100 hover:cursor-pointer hover:text-orange-800'
    };

    INPUT_STYLES = {
        'focus' : 'border-b-2 border-transparent transition ease-in-out delay-450 focus:border-solid focus:border-amber-700 focus:bg-orange-200 focus:drop-shadow-shine-field focus:placeholder-orange-400 focus:text-orange-600',
        'color' : 'bg-orange-500/50 text-white placeholder-orange-200 c-type-orange autofill:bg-orange-500/50 autofill:text-white',
        'rounding' : 'rounded-[0.315rem]',
        'size' : 'h-[2rem] w-[16rem]',
        'font' : 'text-[1rem] text-center',
    };

    DATE_STYLES = {
        'value' : '2000-01-01T00:00:00'
    }
}