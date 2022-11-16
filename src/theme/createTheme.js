import {createTheme} from '@mui/material/styles'

const {palette} = createTheme()
const {augmentColor} = palette
const createColor = (mainColor) => augmentColor({color: {main: mainColor}})

const typography = {
    fontFamily: 'Roboto'
}

export default createTheme({
    palette: {
        dark: createColor('#121212'),
        brown: createColor('#4f3721'),
        anger: createColor('#F40B27'),
        apple: createColor('#5DBA40'),
        steelBlue: createColor('#5C76B7'),
        violet: createColor('#BC00A3')
    },
    typography
})