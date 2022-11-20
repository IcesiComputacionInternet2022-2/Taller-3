import {ThemeProvider} from "@mui/material/styles";
import theme from "../theme/createTheme";
import ScrollAppBar from "../components/ScrollAppBar";
import FormInSide from "../components/FormInSide";

export default function Create() {
    return (
        <ThemeProvider theme={theme}>
            <ScrollAppBar/>
            <FormInSide/>
        </ThemeProvider>
    );
}