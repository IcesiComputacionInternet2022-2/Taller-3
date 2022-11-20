export class Styles {
    flexAdd : string = "flex flex-col items-center justify-around";
    flexAll : string = "flex flex-col items-center space-y-2";
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

    danger = 'focus:outline-none bg-red-600 text-white transition delay-250 ease-in hover:bg-red-100 hover:text-red-700 active:bg-red-700 active:text-red-200'
    utility = 'focus:outline-none bg-amber-600 text-white transition delay-250 ease-in hover:bg-amber-100 hover:text-amber-700 active:bg-amber-700 active:text-amber-200'

    SEARCH_STYLES = {
        'size' : 'h-[2rem] w-full',
        'listCardSize' : 'h-auto w-full',
        'listCardSpacing' : 'py-6 px-4',
        'listCardColor' : 'bg-orange-100',
        'focus' : 'border-b-2 border-transparent transition ease-in-out delay-450 focus:border-solid focus:border-orange-700 focus:bg-orange-300 focus:drop-shadow-shine-field focus:placeholder-orange-600 focus:text-orange-800',
        'color' : 'bg-orange-400 text-white placeholder-orange-800 c-type-orange autofill:bg-orange-500 autofill:text-white',
        'cardSize' : 'h-auto w-4/5',
        'cardSpacing' : 'py-6 mb-[6rem]',
        'cardColor' : 'bg-transparent',
        'buttonSize' : 'w-24 h-[2rem]',
        'listCardFlex': 'flex flex-col space-y-2'
    }

    ROW = {
        'style' : 'focus:outline-none border-2 border-transparent focus:border-orange-700 flex flex-row justify-between items-center p-1 rounded-lg',
        'hover' : 'transition delay-450 bounce-in-out hover:bg-orange-300 hover:-translate-y-1 hover:cursor-pointer',
        'text' : 'text-center font-semibold text-base'
    }

    DATE_STYLES = {
        'value' : '2000-01-01T00:00:00'
    }
}