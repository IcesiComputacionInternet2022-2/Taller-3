import {ThemeProvider} from "@mui/material/styles";
import theme from "../theme/createTheme";
import ScrollAppBar from "../components/ScrollAppBar";

export default function Search() {
    return (
        <ThemeProvider theme={theme}>
            <ScrollAppBar/>
        </ThemeProvider>
    );
}