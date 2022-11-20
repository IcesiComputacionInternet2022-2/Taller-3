import {ThemeProvider} from "@mui/material/styles";
import theme from "../theme/createTheme";
import ScrollAppBar from "../components/ScrollAppBar";
import FlexBoxDiv from "../components/FlexBoxDiv";
import FlexCards from "../components/FlexCards";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <ScrollAppBar/>
            <FlexBoxDiv/>
            <FlexCards/>
            <Footer/>
        </ThemeProvider>
    );
}