import ScrollAppBar from "./components/ScrollAppBar";
import FlexBoxDiv from './components/FlexBoxDiv'
import FlexCards from './components/FlexCards'
import Footer from './components/Footer'
import theme from './theme/createTheme'
import {ThemeProvider} from '@mui/material/styles'

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <ScrollAppBar/>
            <FlexBoxDiv/>
            <FlexCards/>
            <Footer/>
        </ThemeProvider>
    );
}